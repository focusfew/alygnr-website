// Analytics wiring for GA4 + Microsoft Clarity, gated behind cookie consent.
//
// Design notes:
// - No analytics script (gtag.js or Clarity) is loaded until the visitor
//   explicitly accepts. This guarantees zero analytics network requests on the
//   decline / no-choice paths.
// - Google Consent Mode v2 defaults (all denied) are set *before* the GA4
//   config call, then updated to granted on accept.
// - Page views (initial load AND App Router client-side navigations) are sent
//   MANUALLY via trackPageView(), fired from the Analytics component on every
//   pathname change. This is deterministic and dwell-independent — GA4 Enhanced
//   Measurement's "page changes based on browser history events" was observed
//   to DROP page_views for pages the visitor leaves quickly, so we do not rely
//   on it. IMPORTANT: to avoid double-counting, that Enhanced Measurement
//   option must be turned OFF in the GA4 data stream (Admin → Data streams →
//   Enhanced measurement → Page changes based on browser history events).

export const GA_ID = 'G-Z5MSRTSYW9';
export const CLARITY_ID = 'w7efc08fqh';
export const CONSENT_KEY = 'cookie_consent';

export type ConsentChoice = 'accepted' | 'declined';

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* localStorage unavailable — non-fatal */
  }
}

// --- Consent as an external store (read via useSyncExternalStore) ---------
// 'loading' is the server/initial snapshot so the banner is never in the SSR
// HTML (no hydration flash for returning visitors); 'unset' means the visitor
// has not chosen yet and the banner should show.
export type ConsentSnapshot = ConsentChoice | 'unset' | 'loading';

const consentListeners = new Set<() => void>();

export function subscribeConsent(cb: () => void): () => void {
  consentListeners.add(cb);
  return () => consentListeners.delete(cb);
}

export function getConsentSnapshot(): ConsentSnapshot {
  return getStoredConsent() ?? 'unset';
}

export function getConsentServerSnapshot(): ConsentSnapshot {
  return 'loading';
}

/** Persist the choice and notify subscribers so the UI re-renders. */
export function setConsent(choice: ConsentChoice): void {
  storeConsent(choice);
  consentListeners.forEach((l) => l());
}

let booted = false;
let clarityStarted = false;

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || [];
  // gtag pushes its arguments onto dataLayer; commands queue until the library
  // script drains them, so ordering holds regardless of load timing.
  window.gtag =
    window.gtag ||
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
}

function loadGtagLibrary(): void {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

async function initClarity(): Promise<void> {
  if (clarityStarted) return;
  clarityStarted = true;
  const { default: Clarity } = await import('@microsoft/clarity');
  Clarity.init(CLARITY_ID);
}

/**
 * Boot GA4 (with Consent Mode v2) and Clarity. Only call this once the visitor
 * has accepted. Idempotent — safe to call again if the component remounts.
 */
export function bootstrapAnalytics(): void {
  if (typeof window === 'undefined') return;
  // Registering gtag `config` more than once makes every later event fire once
  // per registration (duplicate page_views), so boot exactly once per load.
  if (booted) return;
  booted = true;

  ensureGtagStub();
  window.gtag('js', new Date() as unknown as string);

  // Consent Mode v2 defaults — everything denied — set BEFORE config.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  // Disable gtag's automatic initial page_view; trackPageView() sends the
  // initial and every subsequent (SPA) page_view explicitly.
  window.gtag('config', GA_ID, { send_page_view: false });

  loadGtagLibrary();

  // The visitor has accepted: grant analytics storage (ads stay denied — this
  // site runs analytics only).
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'granted',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  void initClarity();
}

// Module-scoped so it survives component remounts and any transient double
// render during a client navigation — a component-local ref cannot. Suppresses
// only an immediately-repeated identical path, so back/forward to a prior page
// still tracks.
let lastTrackedPath: string | null = null;

/** Fire a GA4 page_view for the given path. No-op unless consent is accepted. */
export function trackPageView(path: string): void {
  if (typeof window === 'undefined') return;
  if (getStoredConsent() !== 'accepted') return;
  if (typeof window.gtag !== 'function') return;
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

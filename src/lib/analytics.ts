import Clarity from '@microsoft/clarity';

const CLARITY_ID = 'w7efc08fqh';
const GA_ID = 'G-Z5MSRTSYW9';

export function initAnalytics() {
  if (!import.meta.env.PROD) return;
  const consent = localStorage.getItem('cookie_consent');
  if (consent !== 'accepted') return;
  Clarity.init(CLARITY_ID);
}

export function initGA4ConsentMode() {
  if (!import.meta.env.PROD) return;
  if (typeof window.gtag !== 'function') return;
  const consent = localStorage.getItem('cookie_consent');
  if (consent === 'accepted') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied'
    });
  } else {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
  }
}

export function trackPageView(path: string) {
  if (!import.meta.env.PROD) return;
  if (typeof window.gtag !== 'function') return;
  const consent = localStorage.getItem('cookie_consent');
  if (consent !== 'accepted') return;
  window.gtag('config', GA_ID, { page_path: path });
}

export function handleConsentAccepted() {
  initAnalytics();
  initGA4ConsentMode();
}

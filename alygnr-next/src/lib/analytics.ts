import Clarity from '@microsoft/clarity';

const CLARITY_ID = 'w7efc08fqh';
const GA_ID = 'G-Z5MSRTSYW9';

export function initAnalytics() {
  if (!(process.env.NODE_ENV === 'production')) return;
  const consent = localStorage.getItem('cookie_consent');
  if (consent !== 'accepted') return;
  Clarity.init(CLARITY_ID);
}

export function initGA4ConsentMode() {
  if (!(process.env.NODE_ENV === 'production')) return;
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
  if (!(process.env.NODE_ENV === 'production')) return;
  if (typeof window.gtag !== 'function') return;
  const consent = localStorage.getItem('cookie_consent');
  if (consent !== 'accepted') return;
  window.gtag('config', GA_ID, { page_path: path });
}

export function handleConsentAccepted() {
  initAnalytics();
  initGA4ConsentMode();
}

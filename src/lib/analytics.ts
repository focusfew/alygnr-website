import Clarity from '@microsoft/clarity';

const CLARITY_ID = 'w7efc08fqh';
const GA_ID = 'G-Z5MSRTSYW9';

export function initAnalytics() {
  if (import.meta.env.PROD) {
    // Clarity
    Clarity.init(CLARITY_ID);
  }
}

export function trackPageView(path: string) {
  if (import.meta.env.PROD && typeof window.gtag === 'function') {
    window.gtag('config', GA_ID, { page_path: path });
  }
}

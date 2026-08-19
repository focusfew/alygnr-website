'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  bootstrapAnalytics,
  getConsentServerSnapshot,
  getConsentSnapshot,
  setConsent,
  subscribeConsent,
  trackPageView,
} from '@/lib/analytics';

export default function Analytics() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Boot analytics whenever consent is (or becomes) accepted. Idempotent.
  useEffect(() => {
    if (consent === 'accepted') bootstrapAnalytics();
  }, [consent]);

  // Fire a page_view on the initial load and every client-side route change,
  // once consent is granted. trackPageView de-dupes repeated identical paths.
  useEffect(() => {
    if (consent !== 'accepted') return;
    const query = searchParams.toString();
    trackPageView(pathname + (query ? `?${query}` : ''));
  }, [pathname, searchParams, consent]);

  // Banner shows only before a choice is made.
  if (consent !== 'unset') return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto flex max-w-[1080px] flex-col gap-4 rounded-[16px] border border-white/[0.08] bg-[#1C2029] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:flex-row md:items-center md:justify-between md:p-6">
        <p className="text-[13px] leading-[1.6] text-[#B4B4B4] md:max-w-[640px]">
          We use analytics cookies (Google Analytics and Microsoft Clarity) to
          understand how the site is used and improve it. You can accept or
          decline — declining keeps analytics off.{' '}
          <Link
            href="/privacy"
            className="text-white underline decoration-white/30 underline-offset-2 transition-colors hover:text-[#EC6427] hover:decoration-[#EC6427]"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent('declined')}
            className="rounded-[8px] border border-white/[0.15] bg-transparent px-5 py-2.5 text-[14px] font-medium text-white transition-colors duration-150 hover:border-white/40"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent('accepted')}
            className="rounded-[8px] bg-[#EC6427] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#d4551d]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

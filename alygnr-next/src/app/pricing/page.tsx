import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing — ALYGNR',
  description:
    'Simple, transparent pricing for marketing teams and agencies. Every plan includes the complete ALYGNR operating loop. 30-day free trial.',
  openGraph: {
    title: 'Pricing — ALYGNR',
    description:
      'Simple, transparent pricing for marketing teams and agencies. Every plan includes the complete ALYGNR operating loop. 30-day free trial.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — ALYGNR',
    description:
      'Simple, transparent pricing for marketing teams and agencies. Every plan includes the complete ALYGNR operating loop. 30-day free trial.',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}

import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy — ALYGNR',
  description: 'How ALYGNR collects, uses, and protects your data. Your data belongs to you.',
  openGraph: {
    title: 'Privacy Policy — ALYGNR',
    description: 'How ALYGNR collects, uses, and protects your data. Your data belongs to you.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — ALYGNR',
    description: 'How ALYGNR collects, uses, and protects your data. Your data belongs to you.',
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

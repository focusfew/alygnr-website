import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service — ALYGNR',
  description: 'Terms governing your use of ALYGNR, operated by FocusFew Strategy Consulting Pvt. Ltd.',
};

export default function TermsPage() {
  return <TermsContent />;
}

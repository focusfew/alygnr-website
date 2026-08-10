import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — ALYGNR',
  description:
    "Get in touch with the ALYGNR team. Whether you have a question, want a demo, or need help — we're here.",
};

export default function ContactPage() {
  // ContactForm reads useSearchParams(); it must be wrapped in a Suspense
  // boundary so the static export doesn't fail to prerender the page shell.
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}

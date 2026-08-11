'use client';

import { type ReactNode, useEffect, useState } from 'react';

type Section = { id: string; label: string; heading: string; body: ReactNode };

const sections: Section[] = [
  {
    id: 'who-runs-this',
    label: 'Who runs this',
    heading: 'Who runs this',
    body: 'ALYGNR is currently operated by FocusFew Strategy Consulting Pvt. Ltd. while ALYGNR is being incorporated as a separate entity. These terms apply to your use of the product in the meantime.',
  },
  {
    id: 'your-account',
    label: 'Your account',
    heading: 'Your account',
    body: "You're responsible for your account and what happens under it.",
  },
  {
    id: 'what-youre-paying-for',
    label: "What you're paying for",
    heading: "What you're paying for",
    body: "Access to ALYGNR's GTM operating loop — Foundation, Campaigns, GTM Calendar, Content Threads, Quick Create, and GTM Health — for the team size and usage limits of your plan.",
  },
  {
    id: 'your-content',
    label: 'Your content',
    heading: 'Your content',
    body: "Everything you build in ALYGNR is yours. We don't claim rights over it, train on it, or share it.",
  },
  {
    id: 'our-product',
    label: 'Our product',
    heading: 'Our product',
    body: "ALYGNR's frameworks and systems are proprietary, with patent applications pending. Don't copy, reverse-engineer, or resell access to the platform.",
  },
  {
    id: 'billing',
    label: 'Billing',
    heading: 'Billing',
    body: "Monthly plans cancel anytime. Annual plans are non-refundable after the 30-day trial. Prices may change with 30 days' notice.",
  },
  {
    id: 'availability',
    label: 'Availability',
    heading: 'Availability',
    body: "We work hard to keep ALYGNR running. We're not liable for losses from downtime or interruptions.",
  },
  {
    id: 'governing-law',
    label: 'Governing law',
    heading: 'Governing law',
    body: 'These terms are governed by the laws of India.',
  },
  {
    id: 'questions',
    label: 'Questions',
    heading: 'Questions',
    body: (
      <a
        href="mailto:support@alygnr.ai"
        className="text-white transition-colors duration-150 hover:text-[#EC6427]"
      >
        support@alygnr.ai
      </a>
    ),
  },
];

export default function TermsContent() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-12 py-20 md:grid-cols-[30fr_70fr] md:gap-16 md:py-[120px]">
        {/* LEFT COLUMN — sticky sidebar (hidden on mobile) */}
        <aside className="hidden md:block">
          <nav className="sticky top-[120px]">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block border-l-2 py-2 pl-3 text-[13px] uppercase tracking-[0.06em] transition-colors duration-150 ${
                  activeId === s.id
                    ? 'border-[#EC6427] text-[#EC6427]'
                    : 'border-transparent text-[#B4B4B4] hover:text-white'
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* RIGHT COLUMN — content */}
        <div className="max-w-[680px]">
          <h1 className="mb-2 text-[48px] font-bold tracking-[-0.03em] text-white">
            Terms of Service
          </h1>
          <p className="mb-16 text-[13px] text-[#B4B4B4]">Last updated: August 11, 2026</p>

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-[120px]">
              <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#EC6427]">
                {s.heading}
              </h2>
              <div className="mb-12 text-[15px] leading-[1.75] text-[#B4B4B4]">{s.body}</div>
              {i < sections.length - 1 && <div className="mb-12 border-t border-white/[0.08]" />}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

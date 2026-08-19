'use client';

import { type ReactNode, useEffect, useState } from 'react';

type Section = { id: string; label: string; heading: string; body: ReactNode };

const sections: Section[] = [
  {
    id: 'short-version',
    label: 'The short version',
    heading: 'The short version',
    body: "Your data belongs to you. We use it to run ALYGNR. We don't sell it, share it, or train models on it.",
  },
  {
    id: 'what-we-collect',
    label: 'What we collect',
    heading: 'What we collect',
    body: 'Information you give us when you sign up and use the product — your name, work email, and the strategic content you build inside ALYGNR (Foundations, campaign briefs, assets). Standard usage data like pages visited and features used.',
  },
  {
    id: 'how-we-use-it',
    label: 'How we use it',
    heading: 'How we use it',
    body: 'To operate ALYGNR, improve the product, and communicate with you about your account. Nothing else.',
  },
  {
    id: 'third-parties',
    label: 'Third parties',
    heading: 'Third parties',
    body: "We use Anthropic for AI generation, Postmark for email, and Google Analytics and Microsoft Clarity for analytics (only with your consent). Each receives only what they need to do their job. We don't sell your data to anyone.",
  },
  {
    id: 'your-data',
    label: 'Your data, your call',
    heading: 'Your data, your call',
    body: "You can export or delete your data anytime. Write to us at support@alygnr.ai and we'll sort it out.",
  },
  {
    id: 'changes',
    label: 'Changes',
    heading: 'Changes',
    body: "If we change this policy in a meaningful way, we'll let you know by email.",
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

export default function PrivacyContent() {
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
            Privacy Policy
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

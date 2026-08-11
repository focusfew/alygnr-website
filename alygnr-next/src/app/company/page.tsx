import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company — ALYGNR',
  description:
    "ALYGNR is built on 20+ years of B2B go-to-market work. Great marketing strategy shouldn't stay in docs.",
  openGraph: {
    title: 'Company — ALYGNR',
    description:
      "ALYGNR is built on 20+ years of B2B go-to-market work. Great marketing strategy shouldn't stay in docs.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company — ALYGNR',
    description:
      "ALYGNR is built on 20+ years of B2B go-to-market work. Great marketing strategy shouldn't stay in docs.",
  },
};

const truths = [
  {
    heading: 'Marketing is not a support function.',
    body: "It's how a business earns its place in the market. Treating it as anything less is where it starts to go wrong.",
  },
  {
    heading: 'The strategy was never the problem.',
    body: 'Every team we worked with had one. Most of them watched it dissolve the moment execution started.',
  },
  {
    heading: 'AI doesn’t fix a broken system. It amplifies it.',
    body: "If your strategy and execution aren't connected, faster output just means faster drift.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Navbar and Footer are rendered by the root layout (app/layout.tsx) */}

      {/* SECTION 2 — Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/assets/hero-images/hero-company.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <h1 className="mx-auto max-w-[760px] text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[72px]">
            Great marketing strategy shouldn&apos;t stay in docs.
          </h1>
        </div>
      </section>

      {/* SECTION 3 — Three truths */}
      <section className="bg-[#13171D] px-6 py-20 md:px-12 md:py-[120px]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-12 text-center text-[36px] font-bold tracking-[-0.025em] text-white">
            Three things we know to be true.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {truths.map((truth) => (
              <div
                key={truth.heading}
                className="rounded-[16px] border border-white/[0.08] bg-[#1C2029] p-8"
              >
                <h3 className="mb-4 text-[22px] font-bold tracking-[-0.02em] text-white">
                  {truth.heading}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#B4B4B4]">{truth.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Credential */}
      <section className="bg-[#13171D] px-6 py-20 md:px-12 md:py-[120px]">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[28px] font-normal leading-[1.5] tracking-[-0.02em] text-white">
            20+ years of B2B go-to-market work gives a certain kind of clarity. You stop wondering why
            strategies fail in execution. You start seeing the structural gap that was always there.
          </p>
          <p className="mt-10 text-[28px] font-bold tracking-[-0.025em] text-white">
            ALYGNR is what that clarity built.
          </p>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="bg-[#13171D] px-6 pb-20 text-center md:px-12 md:pb-[120px]">
        <Link
          href="/product"
          className="inline-flex items-center justify-center rounded-[8px] border-[1.5px] border-white bg-transparent px-9 py-3.5 text-[15px] font-medium text-white transition-colors duration-150 hover:border-[#EC6427] hover:text-[#EC6427]"
        >
          Explore ALYGNR
        </Link>
      </section>
    </>
  );
}

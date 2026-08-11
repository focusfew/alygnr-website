import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'For Agencies — ALYGNR',
  description:
    'ALYGNR gives B2B marketing agencies a complete strategic foundation for every client. Less guessing. More knowing. Better work.',
  openGraph: {
    title: 'For Agencies — ALYGNR',
    description:
      'ALYGNR gives B2B marketing agencies a complete strategic foundation for every client. Less guessing. More knowing. Better work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Agencies — ALYGNR',
    description:
      'ALYGNR gives B2B marketing agencies a complete strategic foundation for every client. Less guessing. More knowing. Better work.',
  },
};

export default function AgenciesPage() {
  return (
    <>
      {/* SECTION 2 — Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/assets/hero-images/hero-agencies.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <h1 className="mx-auto max-w-[800px] text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[72px]">
            Less guessing. More knowing. Better work.
          </h1>
        </div>
      </section>

      {/* SECTION 3 — Your unfair advantage. Built in. */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px]">
              Your unfair advantage.
              <br />
              Built in.
            </h2>
            <p className="mt-6 max-w-[380px] text-[16px] leading-[1.65] text-[#B4B4B4]">
              ALYGNR builds a complete strategic foundation for every client the moment you onboard
              them. Every campaign you run for them inherits from it. Every deliverable reflects it.
            </p>
          </div>
          <div className="overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/foundation.png"
              alt="ALYGNR foundation"
              width={4490}
              height={3175}
              className="-mt-[2%] -mb-[2.5%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — Every deliverable, unmistakably theirs. */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px]">
              Every deliverable,
              <br />
              unmistakably theirs.
            </h2>
            <p className="mt-6 max-w-[380px] text-[16px] leading-[1.65] text-[#B4B4B4]">
              Every deliverable carries your customers&apos; tone, message, and style. Automatically.
              Every time.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-[16px]">
            <div className="-ml-[43%] w-[143%]">
              <Image
                src="/assets/product-screenshots/rationale-panel.png"
                alt="ALYGNR rationale panel"
                width={4490}
                height={3175}
                className="-mt-[2%] -mb-[0.5%] h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Every client. Full context. No switching tax. */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="mx-auto mb-6 max-w-[900px] text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            Every client. Full context. No switching tax.
          </h2>
          <p className="mx-auto mb-16 max-w-[600px] text-[16px] leading-[1.65] text-[#B4B4B4]">
            Take on more clients without the mental overhead of managing their context. ALYGNR holds
            every client&apos;s world so you can move between them freely.
          </p>
          <div className="mx-auto max-w-[860px] overflow-hidden rounded-[16px]">
            <div className="-ml-[15%] -mr-[15%] w-[130%]">
              <Image
                src="/assets/product-screenshots/agency-workspace.png"
                alt="ALYGNR agency workspace"
                width={4490}
                height={3175}
                className="-mt-[15%] -mb-[15%] h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA block */}
      <section className="px-6 md:px-12">
        <div className="mx-auto mb-20 max-w-[720px] rounded-[16px] bg-white p-10 text-center md:p-16">
          <h2 className="text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#13171D]">
            Start with your
            <br />
            first client.
          </h2>
          <a
            href="https://app.alygnr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-[8px] bg-[#13171D] px-4 py-1.5 text-[14px] text-white transition-colors duration-150 hover:bg-[#EC6427]"
          >
            Try it
          </a>
        </div>
      </section>
    </>
  );
}

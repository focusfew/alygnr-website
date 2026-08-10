import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'For Scaling GTM Teams — ALYGNR',
  description:
    'ALYGNR helps scaling B2B marketing teams run more campaigns with the same team. No campaign left behind. GTM that compounds.',
};

export default function ScalingGtmTeamsPage() {
  return (
    <>
      {/* SECTION 2 — Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/assets/hero-images/hero-scaling-teams.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <h1 className="mx-auto max-w-[700px] text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[72px]">
            GTM that compounds.
          </h1>
        </div>
      </section>

      {/* SECTION 3 — No campaign left behind */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            No campaign left behind.
          </h2>
          <p className="mx-auto mb-16 mt-6 max-w-[640px] text-[16px] leading-[1.65] text-[#B4B4B4]">
            The overhead that makes you choose the briefs, the coordination, the starting from scratch
            every single time is gone. Every campaign your business needs gets the full strategic weight
            it deserves. All of them, running. None of them are waiting.
          </p>
          <div className="mx-auto max-w-[860px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/campaigns-list-2.png"
              alt="ALYGNR campaigns list"
              width={4490}
              height={3175}
              className="-mt-[0.5%] -mb-[0.5%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — Built from one brief */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px]">
              Built from one brief.
              <br />
              Sounds like one brand.
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] leading-[1.65] text-[#B4B4B4]">
              Your positioning doesn&apos;t get lost between the strategy deck and the asset. Every brief
              carries it forward. Every asset inherits it. Whatever your team ships sounds like it came
              from the same strategic mind.
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

      {/* SECTION 5 — Your best campaign is always the next one */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            Your best campaign is always the next one.
          </h2>
          <div className="mx-auto max-w-[860px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/gtm-health.png"
              alt="ALYGNR GTM health"
              width={4490}
              height={3175}
              className="-mt-[10%] -mb-[14%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA block */}
      <section className="px-6 md:px-12">
        <div className="mx-auto mb-20 max-w-[720px] rounded-[16px] bg-white p-10 text-center md:p-16">
          <h2 className="text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#13171D]">
            Your first campaign brief.
            <br />
            In under ten minutes.
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

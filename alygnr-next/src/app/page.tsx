import Image from 'next/image';
import CTABlock from '@/components/ui/CTABlock';
import ObjectiveTags from '@/components/sections/ObjectiveTags';

export default function Home() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/images/hero-homepage.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(19,23,29,0.55), rgba(19,23,29,0.85))',
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <h1 className="text-balance text-[48px] font-bold leading-[1.05] md:text-[64px] lg:text-[96px]">
            Say hello to the future of <span className="gradient-text">marketing</span>.
          </h1>
          <p className="mt-8 text-[24px] font-normal text-white md:mt-12">
            An operating system
            <br />
            for your go-to-market.
          </p>
          <div className="mt-6 text-[18px] font-normal">
            <p className="text-[#B4B4B4]">Strategy.</p>
            <p className="text-[#B4B4B4]">Execution.</p>
            <p className="text-[#B4B4B4]">Intelligence.</p>
            <p className="gradient-text">One system.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Business Goals */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mx-auto mb-12 max-w-[900px] text-balance text-center text-[36px] font-bold leading-[1.1] md:mb-16 md:text-[48px]">
            Business goals and marketing campaigns.
            <br />
            Connected at last.
          </h2>
          <ObjectiveTags />
        </div>
      </section>

      {/* SECTION 3 — Campaigns */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mx-auto mb-12 max-w-[720px] text-balance text-center text-[36px] font-bold leading-[1.1] md:mb-16 md:text-[48px]">
            Run more campaigns without a bigger team.
          </h2>
          <div className="mx-auto max-w-[1080px]">
            <Image
              src="/images/campaigns-list-1.png"
              alt="ALYGNR campaigns list"
              width={4490}
              height={3175}
              className="h-auto w-full rounded-[16px]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — Compounds */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mb-12 text-balance text-center text-[36px] font-bold leading-[1.1] md:mb-16 md:text-left md:text-[48px]">
            <span className="block text-white">Marketing that compounds.</span>
            <span className="block text-[#B4B4B4]">Campaign after campaign.</span>
          </h2>
          <div className="mx-auto max-w-[1080px] md:mx-0">
            <Image
              src="/images/gtm-health.png"
              alt="ALYGNR GTM health"
              width={4490}
              height={3175}
              className="h-auto w-full rounded-[16px]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA Block */}
      <section className="px-0 py-20 md:py-[120px]">
        <CTABlock variant="light" heading="Take a closer look." />
      </section>
    </>
  );
}

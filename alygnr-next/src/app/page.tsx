import Image from 'next/image';
import CTABlock from '@/components/ui/CTABlock';
import ObjectiveTags from '@/components/sections/ObjectiveTags';

export default function Home() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section
        className="relative flex items-center justify-center px-6 md:px-12"
        style={{
          minHeight: '100vh',
          backgroundImage: "url('/assets/hero-images/hero-homepage.jpg')",
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
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center pt-16 text-center">
          <h1 className="text-balance text-[40px] font-bold leading-[1.05] md:text-[56px] lg:text-[72px]">
            Beat AI slop with<br />a{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #EC6427 0%, #F5A623 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              business foundation
            </span>
            .
          </h1>
        </div>
      </section>

      {/* SECTION 2 — Operating System intro */}
      <section className="bg-[#13171D] px-6 py-20 md:py-[120px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-8 text-[18px] font-normal tracking-[0.02em] text-[#B4B4B4] md:mb-12">
            An operating system for your go-to-market.
          </p>
          <p className="block text-[40px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[64px]">
            Strategy.
          </p>
          <p className="block text-[40px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[64px]">
            Execution.
          </p>
          <p className="block text-[40px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[64px]">
            Intelligence.
          </p>
          <p className="block text-[40px] font-bold leading-[1.15] tracking-[-0.03em] gradient-text md:text-[64px]">
            One system.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Business Goals */}
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

      {/* SECTION 4 — Campaigns */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mx-auto mb-4 max-w-[720px] text-balance text-center text-[36px] font-bold leading-[1.1] md:mb-6 md:text-[48px]">
            Run more campaigns without a bigger team.
          </h2>
          <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/campaigns-list-1.png"
              alt="ALYGNR campaigns list"
              width={4490}
              height={3175}
              className="-mt-[10%] -mb-[24%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — Compounds */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="mb-4 text-balance text-center text-[36px] font-bold leading-[1.1] md:mb-6 md:text-left md:text-[48px]">
            <span className="block text-white">Marketing that compounds.</span>
            <span className="block text-[#B4B4B4]">Campaign after campaign.</span>
          </h2>
          <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[16px] md:mx-0">
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

      {/* SECTION 6 — CTA Block */}
      <section className="px-0 py-20 md:py-[120px]">
        <CTABlock variant="light" heading="Take a closer look." />
      </section>
    </>
  );
}

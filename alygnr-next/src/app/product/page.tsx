import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product — ALYGNR',
  description:
    'See how ALYGNR turns a single sentence into a complete campaign strategy. Foundation, campaign brief, market intelligence, and calendar — in one system.',
  openGraph: {
    title: 'Product — ALYGNR',
    description:
      'See how ALYGNR turns a single sentence into a complete campaign strategy. Foundation, campaign brief, market intelligence, and calendar — in one system.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product — ALYGNR',
    description:
      'See how ALYGNR turns a single sentence into a complete campaign strategy. Foundation, campaign brief, market intelligence, and calendar — in one system.',
  },
};

const integrationLogos = [
  'hubspot.svg',
  'linkedin.svg',
  'google-analytics.svg',
  'make.svg',
  'pipedrive.svg',
  'apollo.svg',
  'brevo.svg',
  'slack.svg',
  'teams.svg',
  'onedrive.svg',
];

const iconItems = [
  { icon: 'icon-gtm-readiness.svg', caption: 'Know exactly how ready your GTM is to execute.' },
  { icon: 'icon-asset-type.svg', caption: 'Every asset type your campaign needs, built in.' },
  { icon: 'icon-campaign-intelligence.svg', caption: 'Your content is building toward something. ALYGNR sees it first.' },
  { icon: 'icon-asset-suggestions.svg', caption: 'Never wonder what to create next.' },
  { icon: 'icon-calendar-view.svg', caption: 'Every campaign, every asset, one calendar.' },
  { icon: 'icon-market-signals.svg', caption: 'Your market, monitored daily. You just show up.' },
];

export default function ProductPage() {
  return (
    <>
      {/* Navbar and Footer are rendered by the root layout (app/layout.tsx) */}

      {/* SECTION 2 — Hero */}
      <section
        className="relative flex items-center justify-center px-6 md:px-12"
        style={{
          minHeight: '100vh',
          backgroundImage: "url('/assets/hero-images/hero-product-page.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] text-center">
          <h1 className="mt-16 text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[72px]">
            Strategy meets execution.
          </h1>
        </div>
      </section>

      {/* SECTION 3 — Foundation */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-balance text-[32px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
              Already up to speed.
            </h2>
            <p className="mt-6 max-w-[420px] text-[16px] font-normal leading-[1.6] text-[#B4B4B4]">
              Your positioning. Your buyers. Your value pillars. ALYGNR reads your business the moment
              you sign up. So everything that comes after starts knowing everything.
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

      {/* SECTION 4 — Campaign Brief Input */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="text-balance text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            Turns out, one sentence is enough.
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-[16px] font-normal text-[#B4B4B4]">
            ALYGNR turns your business intent into the most complete campaign strategy you&apos;ve ever
            had. Powered by patent-pending proprietary frameworks. Built in seconds.
          </p>
          <div className="mx-auto mt-12 max-w-[720px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/campaign-composer.png"
              alt="ALYGNR campaign brief input"
              width={4490}
              height={3175}
              className="-mt-[21%] -mb-[25%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — Campaign Brief Output */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-[45fr_55fr] md:px-12">
          <div className="max-w-[420px]">
            <h2 className="text-balance text-[32px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
              Weeks of thinking. None of the waiting.
            </h2>
            <p className="mt-6 text-[16px] font-normal leading-[1.6] text-[#B4B4B4]">
              Every campaign brief ALYGNR builds starts with your intent and market positioning, maps it
              to your ideal buyers, and sequences every decision before a single asset is made.
            </p>
            <p className="mt-4 text-[16px] font-normal leading-[1.6] text-[#B4B4B4]">
              The thinking that once used to take a room full of people and a week of alignment calls now
              gets done before your first coffee.
            </p>
          </div>
          <div className="overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/campaign-brief.png"
              alt="ALYGNR campaign brief output"
              width={4490}
              height={3175}
              className="-mt-[4.5%] -mb-[0.5%] h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — Market Intelligence */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="text-balance text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            <span className="block">Real-time market intelligence.</span>
            <span className="block">
              <span className="gradient-text">Contextualised</span> to your campaign.
            </span>
          </h2>
          <div className="mx-auto mt-12 max-w-[800px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/market-signals.png"
              alt="ALYGNR market signals"
              width={4490}
              height={3175}
              className="-mt-[2%] -mb-[7.5%] h-auto w-full"
            />
          </div>
          <p className="mx-auto mt-12 max-w-[640px] text-[16px] font-normal text-[#B4B4B4]">
            Every campaign starts with the market research. ALYGNR scans your target market in real time:
            competitor moves, category shifts, what your buyers are responding to, and more, and bases
            those signals directly into your brief.
          </p>
        </div>
      </section>

      {/* SECTION 7 — Momentum breaker */}
      <section className="bg-[#13171D] px-6 py-[60px] md:px-12 md:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="text-balance text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            From here, it&apos;s just <span className="gradient-text">momentum</span>.
          </p>
        </div>
      </section>

      {/* SECTION 8 — Calendar */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="text-balance text-[36px] font-bold tracking-[-0.03em] text-white md:text-[56px]">
            Many campaigns. One calendar.
          </h2>
          <div className="mx-auto mt-12 max-w-[800px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/product-screenshots/calendar.png"
              alt="ALYGNR calendar"
              width={4490}
              height={3175}
              className="-mt-[2.5%] -mb-[2.5%] h-auto w-full"
            />
          </div>
          <p className="mx-auto mt-12 max-w-[640px] text-[16px] font-normal text-[#B4B4B4]">
            Whether you&apos;re running one campaign or five, every asset, every deadline, and every team
            member comes together in a single view. No spreadsheets, no status meetings, no wondering what
            went out yesterday.
          </p>
        </div>
      </section>

      {/* SECTION 9 — Integrations */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
          <h2 className="text-balance text-[32px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
            Created here. Delivered everywhere.
          </h2>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-5 grid-rows-2 items-center justify-items-center gap-6">
            {integrationLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo}
                src={`/assets/integration-logos/${logo}`}
                alt=""
                className="h-14 w-14 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Icon grid */}
      <section className="bg-[#13171D] py-20 md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <h2 className="text-balance text-center text-[32px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
            And so much more.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-12 md:grid-cols-3">
            {iconItems.map((item) => (
              <div key={item.icon} className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/icons/${item.icon}`} alt="" className="h-10 w-10" />
                <p className="mx-auto mt-4 max-w-[200px] text-center text-[14px] font-normal leading-[1.5] text-[#B4B4B4]">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — CTA (custom) */}
      <section className="px-6 pb-[60px] md:px-12 md:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[710px] rounded-[16px] bg-white p-10 text-center md:p-16">
            <h2 className="text-[36px] font-bold tracking-[-0.02em] text-[#13171D]">
              See how ALYGNR fits your needs.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/for/scaling-gtm-teams"
                className="rounded-[8px] border-[1.5px] border-[#13171D] px-6 py-3 text-[15px] font-medium text-[#13171D] transition-colors duration-150 hover:border-[#EC6427]"
              >
                For scaling GTM teams
              </Link>
              <Link
                href="/for/agencies"
                className="rounded-[8px] border-[1.5px] border-[#13171D] px-6 py-3 text-[15px] font-medium text-[#13171D] transition-colors duration-150 hover:border-[#EC6427]"
              >
                For Agencies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

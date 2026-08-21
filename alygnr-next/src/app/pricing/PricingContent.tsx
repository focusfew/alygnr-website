'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ---------- icons ---------- */
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#555]"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ---------- segmented toggle ---------- */
function SegmentedToggle({
  options,
  value,
  onChange,
  tabClassName,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  tabClassName: string;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/[0.12] p-1">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`cursor-pointer rounded-full font-medium transition-colors duration-150 ${tabClassName} ${
            value === opt ? 'bg-white text-[#13171D]' : 'bg-transparent text-[#B4B4B4]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ---------- price + feature row ---------- */
function PriceDisplay({
  amount,
  suffix,
  bigPrefix = false,
}: {
  amount: string;
  suffix: string;
  bigPrefix?: boolean;
}) {
  return (
    <div className="mt-6 flex items-start">
      <span
        className={
          bigPrefix
            ? 'text-[48px] font-bold leading-none tracking-[-0.03em] text-white'
            : 'mt-[10px] text-[24px] font-bold leading-none text-white'
        }
      >
        $
      </span>
      <span className="text-[48px] font-bold leading-none tracking-[-0.03em] text-white">{amount}</span>
      <span className="ml-1 mt-[26px] text-[14px] font-normal text-[#B4B4B4]">{suffix}</span>
    </div>
  );
}

function FeatureRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] py-2">
      <span className="text-[13px] text-[#B4B4B4]">{label}</span>
      <span className="text-right text-[13px] font-medium text-white">{value}</span>
    </div>
  );
}

/* ---------- tier card shell ---------- */
function TierCard({
  featured = false,
  reserveBadge = false,
  name,
  children,
}: {
  featured?: boolean;
  reserveBadge?: boolean;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col rounded-[16px] bg-[#1C2029] p-8 ${
        featured ? 'border-[1.5px] border-[#EC6427]' : 'border border-white/[0.08]'
      }`}
    >
      {featured ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#EC6427]">
          POPULAR
        </p>
      ) : reserveBadge ? (
        <div
          className="invisible mb-2 text-[11px] font-semibold uppercase tracking-[0.08em]"
          aria-hidden="true"
        >
          POPULAR
        </div>
      ) : null}
      <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#B4B4B4]">{name}</p>
      {children}
    </div>
  );
}

/* ---------- buttons ---------- */
const btnBase = 'mt-6 block w-full rounded-[8px] px-6 py-3 text-center text-[14px] font-medium';
const btnFilledOrange = `${btnBase} bg-[#EC6427] text-white`;
const btnOutlined = `${btnBase} border-[1.5px] border-white/30 text-white transition-colors duration-150 hover:border-[#EC6427] hover:text-[#EC6427]`;

function TierButton({ href, filled = false }: { href: string; filled?: boolean }) {
  return (
    <Link href={href} className={filled ? btnFilledOrange : btnOutlined}>
      Get started
    </Link>
  );
}

function OrgCapture() {
  const [state, setState] = useState<'idle' | 'capturing' | 'confirmed'>('idle');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const submit = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    window.open(
      `mailto:sales@alygnr.ai?subject=ORG%20Plan%20Interest&body=Interested%20user%3A%20${encodeURIComponent(
        email
      )}`,
      '_blank'
    );
    setState('confirmed');
  };

  if (state === 'confirmed') {
    return (
      <p className="mt-6 py-3 text-center text-[14px] text-[#B4B4B4]">
        You&apos;re on the list. We&apos;ll reach out when ORG launches.
      </p>
    );
  }

  if (state === 'capturing') {
    return (
      <div className="mt-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full rounded-[8px] border-[1.5px] border-white/20 bg-[#13171D] px-4 py-[10px] text-[14px] text-white focus:border-[#EC6427] focus:outline-none"
        />
        {error && <p className="mt-1 text-[12px] text-[#EC6427]">Please enter a valid email.</p>}
        <button
          type="button"
          onClick={submit}
          className="mt-2 w-full rounded-[8px] bg-[#EC6427] px-4 py-[10px] text-[14px] font-medium text-white"
        >
          Notify me →
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setState('capturing')} className={btnOutlined}>
      Get notified
    </button>
  );
}

/* ---------- feature data ---------- */
const companiesFeatures = {
  solo: [
    { label: 'Company Foundation', value: <CheckIcon /> },
    { label: 'Campaigns', value: '2 active' },
    { label: 'GTM Calendar', value: <CheckIcon /> },
    { label: 'Content Threads', value: <CheckIcon /> },
    { label: 'Assets', value: '10/mo' },
    { label: 'GTM Health', value: <CheckIcon /> },
    { label: 'Integrations', value: <CheckIcon /> },
    { label: 'Role-based Access', value: <CrossIcon /> },
    { label: 'Support and Access', value: 'Full platform access' },
    { label: 'L1 & L2 support', value: <CheckIcon /> },
  ],
  teams: [
    { label: 'Company Foundation', value: <CheckIcon /> },
    { label: 'Campaigns', value: '5 active' },
    { label: 'GTM Calendar', value: <CheckIcon /> },
    { label: 'Content Threads', value: <CheckIcon /> },
    { label: 'Assets', value: '50/mo' },
    { label: 'GTM Health', value: <CheckIcon /> },
    { label: 'Integrations', value: <CheckIcon /> },
    { label: 'Role-based Access', value: <CheckIcon /> },
    { label: 'Support and Access', value: 'Full platform access' },
    { label: 'L1 & L2 support', value: <CheckIcon /> },
  ],
};

const orgBullets = [
  'Unlimited campaigns',
  'Multiple lines of business',
  'Advanced GTM intelligence',
  'Dedicated success manager',
  'Custom integrations',
  'Enterprise SLA',
];

const agenciesFeatures = {
  studio: [
    { label: 'Client Workspaces', value: '1–2' },
    { label: 'Campaigns / workspace', value: '2 active' },
    { label: 'Assets / workspace', value: '10/day' },
    { label: 'Support and Access', value: 'Full platform access' },
    { label: 'L1 & L2 support', value: <CheckIcon /> },
  ],
  practice: [
    { label: 'Client Workspaces', value: '3–7' },
    { label: 'Campaigns / workspace', value: '5 active' },
    { label: 'Assets / workspace', value: '50/day' },
    { label: 'Support and Access', value: 'Full platform access' },
    { label: 'L1 & L2 support', value: <CheckIcon /> },
  ],
  network: [
    { label: 'Client Workspaces', value: '8–20' },
    { label: 'Campaigns / workspace', value: 'Unlimited' },
    { label: 'Assets / workspace', value: 'Unlimited' },
    { label: 'Support and Access', value: 'Full platform access' },
    {
      label: 'L1 & L2 support',
      value: (
        <span className="inline-flex items-center gap-1">
          <CheckIcon /> + Dedicated success manager
        </span>
      ),
    },
  ],
};

const companiesPrices = {
  solo: { monthly: { amount: '99', suffix: '/mo' }, annual: { amount: '990', suffix: '/yr' } },
  teams: { monthly: { amount: '199', suffix: '/mo' }, annual: { amount: '1,990', suffix: '/yr' } },
};

const agenciesPrices = {
  studio: { monthly: { amount: '129', suffix: '/mo' }, annual: { amount: '1,290', suffix: '/yr' } },
  practice: { monthly: { amount: '299', suffix: '/mo' }, annual: { amount: '2,990', suffix: '/yr' } },
  network: { monthly: { amount: '649', suffix: '/mo' }, annual: { amount: '6,490', suffix: '/yr' } },
};

function Divider() {
  return <div className="my-6 border-t border-white/[0.08]" />;
}

function ToggleSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <div className="mt-4 flex items-center gap-2">
      <span className={`text-[12px] ${on ? 'text-[#EC6427]' : 'text-[#B4B4B4]'}`}>
        {on ? 'Billed annually' : 'Billed monthly'}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label="Toggle annual billing"
        onClick={onToggle}
        className={`relative h-[22px] w-[40px] cursor-pointer rounded-full transition-colors duration-150 ${
          on ? 'bg-[#EC6427]' : 'bg-[#333]'
        }`}
      >
        <span
          className={`absolute top-[3px] h-[16px] w-[16px] rounded-full transition-all duration-150 ${
            on ? 'left-[21px] bg-white' : 'left-[3px] bg-[#555555]'
          }`}
        />
      </button>
    </div>
  );
}

/* ================= PAGE CONTENT ================= */
export default function PricingContent() {
  const [tab, setTab] = useState<'Companies' | 'Agencies'>('Companies');
  const [companiesBilling, setCompaniesBilling] = useState<'Monthly' | 'Annual'>('Monthly');
  const [agenciesBilling, setAgenciesBilling] = useState<'Monthly' | 'Annual'>('Monthly');

  const cAnnual = companiesBilling === 'Annual';
  const aAnnual = agenciesBilling === 'Annual';

  return (
    <>
      {/* SECTION 2 — Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/assets/hero-images/hero-pricing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <h1 className="relative z-10 mx-auto max-w-[800px] text-center text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[64px]">
          Built for every kind of marketing team.
        </h1>
      </section>

      {/* SECTION 3 — Tab toggle */}
      <section className="bg-[#13171D] px-6 pt-20 md:px-12">
        <p className="mx-auto mb-8 max-w-[560px] text-center text-[16px] text-[#B4B4B4]">
          {tab === 'Companies'
            ? 'Every tier ships with the complete, ungated ALYGNR operating loop. Pricing scales with team size and usage, not features.'
            : 'Your clients. Your workspaces. Pay only for what you run.'}
        </p>
        <div className="flex justify-center">
          <SegmentedToggle
            options={['Companies', 'Agencies']}
            value={tab}
            onChange={(v) => setTab(v as 'Companies' | 'Agencies')}
            tabClassName="px-7 py-[10px] text-[14px]"
          />
        </div>
      </section>

      {/* SECTION 4 — Companies pricing */}
      {tab === 'Companies' && (
        <section className="bg-[#13171D] px-6 pb-20 md:px-12">
          <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-6 md:grid-cols-3">
            {/* SOLO */}
            <TierCard name="SOLO" reserveBadge>
              <PriceDisplay {...(cAnnual ? companiesPrices.solo.annual : companiesPrices.solo.monthly)} bigPrefix />
              <ToggleSwitch on={cAnnual} onToggle={() => setCompaniesBilling(cAnnual ? 'Monthly' : 'Annual')} />
              <Divider />
              <div className="flex-1">
                {companiesFeatures.solo.map((f) => (
                  <FeatureRow key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
              <TierButton href="/contact?plan=solo" />
            </TierCard>

            {/* TEAMS (featured) */}
            <TierCard name="TEAMS" featured>
              <PriceDisplay {...(cAnnual ? companiesPrices.teams.annual : companiesPrices.teams.monthly)} bigPrefix />
              <ToggleSwitch on={cAnnual} onToggle={() => setCompaniesBilling(cAnnual ? 'Monthly' : 'Annual')} />
              <Divider />
              <div className="flex-1">
                {companiesFeatures.teams.map((f) => (
                  <FeatureRow key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
              <TierButton href="/contact?plan=teams" filled />
            </TierCard>

            {/* ORG */}
            <TierCard name="ORG" reserveBadge>
              <p className="mt-6 text-[48px] font-bold leading-none tracking-[-0.03em] text-white">Coming soon</p>
              <Divider />
              <div className="flex-1">
                <p className="text-[12px] italic text-[#B4B4B4]">Everything in Teams, plus</p>
                <ul className="mt-4 space-y-2">
                  {orgBullets.map((b) => (
                    <li key={b} className="text-[13px] text-[#B4B4B4]">
                      · {b}
                    </li>
                  ))}
                </ul>
              </div>
              <OrgCapture />
            </TierCard>
          </div>

          <p className="mx-auto mt-6 max-w-[680px] text-center text-[11px] text-[#555]">
            * All plans include a 30-day free trial. No credit card required. L1 &amp; L2 support covers your entire team, including Foundation, Campaigns, GTM Calendar, Content Threads, Quick Create, and Integrations.
          </p>
        </section>
      )}

      {/* SECTION 5 — Agencies pricing */}
      {tab === 'Agencies' && (
        <section className="bg-[#13171D] px-6 pb-20 md:px-12">
          <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-6 md:grid-cols-3">
            {/* STUDIO */}
            <TierCard name="STUDIO" reserveBadge>
              <PriceDisplay {...(aAnnual ? agenciesPrices.studio.annual : agenciesPrices.studio.monthly)} bigPrefix />
              <ToggleSwitch on={aAnnual} onToggle={() => setAgenciesBilling(aAnnual ? 'Monthly' : 'Annual')} />
              <Divider />
              <div className="flex-1">
                {agenciesFeatures.studio.map((f) => (
                  <FeatureRow key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
              <TierButton href="/contact?plan=studio" />
            </TierCard>

            {/* PRACTICE (featured) */}
            <TierCard name="PRACTICE" featured>
              <PriceDisplay {...(aAnnual ? agenciesPrices.practice.annual : agenciesPrices.practice.monthly)} bigPrefix />
              <ToggleSwitch on={aAnnual} onToggle={() => setAgenciesBilling(aAnnual ? 'Monthly' : 'Annual')} />
              <Divider />
              <div className="flex-1">
                {agenciesFeatures.practice.map((f) => (
                  <FeatureRow key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
              <TierButton href="/contact?plan=practice" filled />
            </TierCard>

            {/* NETWORK */}
            <TierCard name="NETWORK" reserveBadge>
              <PriceDisplay {...(aAnnual ? agenciesPrices.network.annual : agenciesPrices.network.monthly)} bigPrefix />
              <ToggleSwitch on={aAnnual} onToggle={() => setAgenciesBilling(aAnnual ? 'Monthly' : 'Annual')} />
              <Divider />
              <div className="flex-1">
                {agenciesFeatures.network.map((f) => (
                  <FeatureRow key={f.label} label={f.label} value={f.value} />
                ))}
              </div>
              <TierButton href="/contact?plan=network" />
            </TierCard>
          </div>

          <p className="mx-auto mt-6 max-w-[680px] text-center text-[11px] text-[#555]">
            * All plans include a 30-day free trial. No credit card required. Each client workspace includes Foundation, Campaigns, GTM Calendar, Content Threads, Quick Create, and Integrations.
          </p>
        </section>
      )}

      {/* SECTION 6 — FAQ */}
      <section className="bg-[#13171D] px-6 py-[120px] md:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-16 text-left text-[40px] font-bold tracking-[-0.025em] text-white">
            Frequently asked questions
          </h2>

          <FaqGroup title="About pricing">
            <Faq
              q="What's included in every plan?"
              a="Every plan ships with the complete ALYGNR operating loop: Foundation, Campaigns, GTM Calendar, Content Threads, Quick Create, GTM Health, and 3,000+ integrations. Nothing is gated. Pricing scales with team size and usage, not features."
            />
            <Faq
              q="What's the difference between monthly and annual billing?"
              a="A monthly subscription gives you flexibility to cancel anytime. An annual subscription is billed upfront as 10 monthly payments — you get two months free."
            />
            <Faq
              q="Can I switch tiers?"
              a="Yes. Upgrade anytime, effective immediately. Downgrades take effect at the start of your next billing cycle."
            />
            <Faq q="Are there any setup fees?" a="None. No setup fees, onboarding fees, or hidden costs." />
          </FaqGroup>

          <FaqGroup title="Finding the right fit">
            <Faq
              q="Which plan is right for me?"
              a="Solo is for one marketer running up to 2 active campaigns. Teams is for collaborative marketing teams: up to 5 active campaigns, role-based approvals, and higher asset limits. If you're unsure, start with Solo. Upgrading takes one click."
            />
            <Faq
              q="What's the difference between Companies and Agencies pricing?"
              a="Companies pricing is for in-house marketing teams. Agencies pricing is for those running GTM across multiple client workspaces: one workspace per client, priced accordingly."
            />
            <Faq
              q="I'm a fractional CMO. Which plan is right for me?"
              a="The Agencies tab. Each client gets their own Foundation, campaigns, and workspace, completely separate."
            />
            <Faq
              q="What counts as an active campaign?"
              a="Any campaign with a live brief and calendar. Completed or archived campaigns don't count toward your limit."
            />
          </FaqGroup>

          <FaqGroup title="Before you sign up">
            <Faq q="Is there a free trial?" a="Yes. 30 days. No credit card required." />
            <Faq
              q="What happens to my data?"
              a="Your data belongs to you. ALYGNR doesn't use it to train models or share it with third parties. You can export or delete it anytime."
            />
            <Faq
              q="Can I cancel anytime?"
              a="Monthly plans cancel anytime, no penalty. Annual plans are non-refundable after the 30-day trial period."
              last
            />
          </FaqGroup>
        </div>
      </section>

      {/* SECTION 7 — CTA block */}
      <section className="px-6 md:px-12">
        <div className="mx-auto mb-20 max-w-[860px] rounded-[16px] bg-white p-10 text-center md:p-16">
          <h2 className="text-[36px] font-bold tracking-[-0.02em] text-[#13171D]">
            Got something specific in mind?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-[8px] border-[1.5px] border-[#13171D] px-7 py-3 text-[15px] font-medium text-[#13171D] transition-colors duration-150 hover:border-[#EC6427] hover:text-[#EC6427]"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- FAQ helpers ---------- */
function FaqGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#EC6427]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Faq({ q, a, last = false }: { q: string; a: string; last?: boolean }) {
  return (
    <div className={last ? '' : 'mb-8'}>
      <p className="mb-2 text-[16px] font-semibold text-white">{q}</p>
      <p className="text-[15px] leading-[1.65] text-[#B4B4B4]">{a}</p>
    </div>
  );
}

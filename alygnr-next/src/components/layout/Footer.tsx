import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { label: 'How it works', href: '/product' },
  { label: 'Certification', href: '/certification' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Glossary', href: '/glossary' },
];

const forLinks = [
  { label: 'Founder-led teams', href: '/for/founder-led-teams' },
  { label: 'Scaling GTM teams', href: '/for/scaling-gtm-teams' },
  { label: 'Enterprise GTM', href: '/for/enterprise-gtm' },
  { label: 'Agencies', href: '/for/agencies' },
];

const companyLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-[13px] font-normal uppercase tracking-[0.08em] text-[#B4B4B4]">
        {heading}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-[#B4B4B4] transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#13171D]">
      <div className="mx-auto max-w-[1280px] px-6 pb-6 pt-12 md:px-12 md:pb-8 md:pt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Column 1 — Brand */}
          <div>
            <Image src="/logo-wordmark-dark.svg" alt="ALYGNR" width={120} height={20} className="h-7 w-auto" />
            <p className="mt-3 text-[14px] text-[#B4B4B4]">The GTM Operating System</p>
          </div>

          <FooterColumn heading="Product" links={productLinks} />
          <FooterColumn heading="ALYGNR for" links={forLinks} />
          <FooterColumn heading="Company" links={companyLinks} />
        </div>

        <div className="mt-8 border-t border-white/[0.08] pt-6 md:mt-12">
          <p className="text-center text-[14px] text-[#B4B4B4] md:text-left">
            © 2026 ALYGNR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

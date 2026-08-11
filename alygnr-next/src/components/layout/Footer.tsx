import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { label: 'How it works', href: '/product' },
];

const forLinks = [
  { label: 'Scaling GTM teams', href: '/for/scaling-gtm-teams' },
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
      <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.08em] text-[#B4B4B4]">
        {heading}
      </p>
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
            <p className="mt-3 text-[14px] text-[#B4B4B4]">GTM Intelligence OS</p>
            <a
              href="https://www.linkedin.com/company/alygnr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ALYGNR on LinkedIn"
              className="mt-4 inline-block text-[#B4B4B4] transition-colors duration-150 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
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

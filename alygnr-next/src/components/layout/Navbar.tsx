'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const APP_URL = 'https://app.alygnr.ai';
const LOGIN_URL = 'https://app.alygnr.ai/auth/login';

const forItems = [
  { label: 'Scaling GTM teams', href: '/for/scaling-gtm-teams' },
  { label: 'Agencies', href: '/for/agencies' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [forOpen, setForOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const navPill = (href: string) =>
    `rounded-full px-4 py-1.5 text-[15px] transition-colors duration-150 ${
      isActive(href)
        ? 'bg-white/[0.12] font-medium text-white'
        : 'bg-transparent font-normal text-white/60 hover:bg-white/[0.06] hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-150 ${
        scrolled
          ? 'bg-[#13171D]/95 backdrop-blur-sm border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-6 md:h-16 md:px-12">
        {/* LEFT — Logo */}
        <Link href="/" className="flex items-center" aria-label="ALYGNR home">
          <Image
            src="/logo-wordmark-dark.svg"
            alt="ALYGNR"
            width={120}
            height={20}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* CENTRE — desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/product" className={navPill('/product')}>
            Product
          </Link>
          <Link href="/pricing" className={navPill('/pricing')}>
            Pricing
          </Link>

          {/* ALYGNR for — dropdown */}
          <div
            className="group relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsDropdownOpen((v) => !v);
                } else if (e.key === 'Escape') {
                  setIsDropdownOpen(false);
                }
              }}
              className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-[15px] transition-colors duration-150 ${
                pathname.startsWith('/for/')
                  ? 'bg-white/[0.12] font-medium text-white'
                  : 'bg-transparent font-normal text-white/60 group-hover:bg-white/[0.06] group-hover:text-white'
              }`}
            >
              ALYGNR for
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                isDropdownOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-[-4px] opacity-0'
              }`}
            >
              <div className="min-w-[200px] rounded-[12px] border border-white/[0.08] bg-[#23272F] p-2">
                {forItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-[8px] px-4 py-[10px] text-[15px] text-[#B4B4B4] transition-colors duration-150 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/company" className={navPill('/company')}>
            Company
          </Link>
        </div>

        {/* RIGHT — desktop actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={LOGIN_URL}
            className="text-[15px] font-normal text-[#B4B4B4] transition-colors duration-150 hover:text-white"
          >
            Log in
          </a>
          <a
            href={APP_URL}
            className="rounded-[8px] border-[1.5px] border-white px-4 py-1.5 text-[14px] font-normal text-white transition-colors duration-150 hover:border-[#EC6427]"
          >
            Try it
          </a>
        </div>

        {/* MOBILE — hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="text-white transition-colors duration-150 hover:text-[#EC6427] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* MOBILE — full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#13171D] transition-opacity duration-200 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
            aria-label="ALYGNR home"
          >
            <Image src="/logo-wordmark-dark.svg" alt="ALYGNR" width={120} height={20} className="h-7 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-white transition-colors duration-150 hover:text-[#EC6427]"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 px-6 pt-16">
          <Link
            href="/product"
            onClick={() => setMobileOpen(false)}
            className="text-2xl text-white transition-colors duration-150 hover:text-[#EC6427]"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="text-2xl text-white transition-colors duration-150 hover:text-[#EC6427]"
          >
            Pricing
          </Link>

          <div className="flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => setForOpen((v) => !v)}
              className="flex items-center gap-2 text-2xl text-white transition-colors duration-150 hover:text-[#EC6427]"
            >
              ALYGNR for
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-150 ${forOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {forOpen &&
              forItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-[#B4B4B4] transition-colors duration-150 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <Link
            href="/company"
            onClick={() => setMobileOpen(false)}
            className="text-2xl text-white transition-colors duration-150 hover:text-[#EC6427]"
          >
            Company
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 px-6">
          <a
            href={LOGIN_URL}
            className="text-xl text-[#B4B4B4] transition-colors duration-150 hover:text-white"
          >
            Log in
          </a>
          <a
            href={APP_URL}
            className="rounded-[8px] border-[1.5px] border-white px-6 py-3 text-xl text-white transition-colors duration-150 hover:border-[#EC6427]"
          >
            Try it
          </a>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState, useRef } from 'react';
import logoSrc from '../../assets/logo4.png';

/* ───────── dropdown items ───────── */
const alygnrForItems = [
  {
    label: 'Founder-led teams',
    desc: 'GTM structure for teams moving fast without losing strategic direction.',
    href: '/founders',
  },
  {
    label: 'Scaling GTM Teams',
    desc: 'Marketing teams ready to connect strategy to execution.',
    href: '/scaling-teams',
  },
  {
    label: 'Enterprise GTM',
    desc: 'GTM governance and alignment across teams and markets.',
    href: '/enterprise',
  },
  {
    label: 'Agencies',
    desc: 'Structured, repeatable GTM across every client.',
    href: '/agencies',
  },
] as const;

/* ───────── chevron svg ───────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{
        marginLeft: 4,
        transition: 'transform 180ms',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────── hamburger / close icon ───────── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ───────── main nav ───────── */
interface NavProps {
  activePage?: 'home' | 'platform' | 'pricing' | 'founders' | 'scaling-teams' | 'enterprise' | 'agencies' | 'company';
}

export default function Nav({ activePage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'var(--black)',
          borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 200ms, border-color 200ms, backdrop-filter 200ms',
        }}
      >
        {/* ── logo ── */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src={logoSrc} alt="ALYGNR" style={{ height: 21, width: 'auto' }} />
        </a>

        {/* ── desktop centre links ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            fontSize: 15,
          }}
          className="nav-desktop"
        >
          <a
            href="/platform"
            style={activePage === 'platform' ? { ...linkBase, ...activePill } : linkBase}
          >
            Platform
          </a>

          <a
            href="/pricing"
            style={activePage === 'pricing' ? { ...linkBase, ...activePill } : linkBase}
          >
            Pricing
          </a>

          {/* ALYGNR for dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              style={{
                ...linkBase,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'inherit',
              }}
            >
              ALYGNR for
              <Chevron open={dropdownOpen} />
            </button>

            {/* dropdown card */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                paddingTop: 8,
                opacity: dropdownOpen ? 1 : 0,
                pointerEvents: dropdownOpen ? 'auto' : 'none',
                transition: 'opacity 180ms',
              }}
            >
              <div
                style={{
                  background: 'var(--dark)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 12,
                  padding: 8,
                  minWidth: 360,
                }}
              >
                {alygnrForItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      padding: '12px 16px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      transition: 'background 180ms',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--dark-mid)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--text-primary-dark)',
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        color: 'var(--text-secondary-dark)',
                        fontSize: 13,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/company" style={linkBase}>
            Company
          </a>
        </div>

        {/* ── desktop CTA ── */}
        <a href="https://app.alygnr.ai" style={ctaStyle} className="nav-desktop nav-cta">
          Try it yourself
        </a>

        {/* ── mobile hamburger ── */}
        <button
          type="button"
          className="nav-mobile"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary-dark)',
            cursor: 'pointer',
            padding: 4,
          }}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </nav>

      {/* ── mobile drawer ── */}
      <div
        className="nav-mobile"
        style={{
          position: 'fixed',
          inset: 0,
          top: 64,
          zIndex: 99,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 32px',
          gap: 8,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 250ms ease-in-out',
        }}
      >
        <a
          href="/platform"
          onClick={() => setMobileOpen(false)}
          style={activePage === 'platform' ? { ...mobileLinkStyle, ...activePill } : mobileLinkStyle}
        >
          Platform
        </a>

        <a
          href="/pricing"
          onClick={() => setMobileOpen(false)}
          style={activePage === 'pricing' ? { ...mobileLinkStyle, ...activePill } : mobileLinkStyle}
        >
          Pricing
        </a>

        {/* mobile submenu trigger */}
        <button
          type="button"
          onClick={() => setMobileSubmenuOpen((v) => !v)}
          style={{
            ...mobileLinkStyle,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'inherit',
            width: '100%',
          }}
        >
          ALYGNR for
          <Chevron open={mobileSubmenuOpen} />
        </button>

        {mobileSubmenuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 16, gap: 4 }}>
            {alygnrForItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: 'none',
                  padding: '10px 12px',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <span
                  style={{
                    color: 'var(--text-primary-dark)',
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: 'var(--text-secondary-dark)',
                    fontSize: 13,
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </span>
              </a>
            ))}
          </div>
        )}

        <a href="/company" onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>
          Company
        </a>

        <div style={{ marginTop: 'auto', paddingBottom: 32 }}>
          <a
            href="https://app.alygnr.ai"
            onClick={() => setMobileOpen(false)}
            style={{ ...ctaStyle, display: 'block', textAlign: 'center' as const }}
          >
            Try it yourself
          </a>
        </div>
      </div>

      {/* ── responsive styles ── */}
      <style>{`
        .nav-mobile { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
        .nav-desktop a:hover,
        .nav-desktop button:hover {
          color: var(--text-primary-dark) !important;
        }
        .nav-cta:hover {
          border-color: #E8521A !important;
        }
      `}</style>
    </>
  );
}

/* ───────── shared style objects ───────── */
const linkBase: React.CSSProperties = {
  color: 'var(--text-secondary-dark)',
  textDecoration: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: 15,
  transition: 'color 180ms',
  cursor: 'pointer',
};

/* Hover handled via onMouseEnter/Leave for inline styles isn't great for
   simple links, so we add a tiny stylesheet above. For the nav links we
   rely on CSS :hover via a class instead. We keep linkBase for the base
   colour and attach hover via the style tag below. */

const ctaStyle: React.CSSProperties = {
  background: '#FFFFFF',
  color: '#0A0A0A',
  border: '1px solid #EFEFED',
  fontFamily: "'Inter', sans-serif",
  fontSize: 15,
  fontWeight: 500,
  borderRadius: 8,
  padding: '12px 24px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'border-color 180ms',
  flexShrink: 0,
};

const activePill: React.CSSProperties = {
  background: 'var(--dark)',
  color: 'var(--text-primary-dark)',
  borderRadius: 999,
  padding: '6px 14px',
};

const mobileLinkStyle: React.CSSProperties = {
  color: 'var(--text-secondary-dark)',
  textDecoration: 'none',
  fontSize: 18,
  padding: '14px 0',
  transition: 'color 180ms',
};

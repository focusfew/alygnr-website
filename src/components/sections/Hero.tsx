import { useEffect, useRef } from 'react';

const STAGGER_MS = 120;

export default function Hero() {
  const els = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    els.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      const timeout = setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * STAGGER_MS);
      return () => clearTimeout(timeout);
    });
  }, []);

  const setRef = (i: number) => (node: HTMLElement | null) => {
    els.current[i] = node;
  };

  return (
    <section style={sectionStyle} className="hero-section">
      <div style={containerStyle} className="section-container">
        {/* 1 — eyebrow */}
        <div ref={setRef(0)} className="eyebrow eyebrow-dark">
          THE GTM OPERATING SYSTEM
        </div>

        {/* 2 — headline */}
        <h1 ref={setRef(1)} style={headlineStyle} className="hero-headline">
          Turn strategic alignment
          <br />
          into predictable{' '}
          <span style={underlinedWord}>pipeline.</span>
        </h1>

        {/* 3 — subhead */}
        <div ref={setRef(2)} style={subheadWrap}>
          <p style={subheadProblem}>
            Most marketing teams execute in fragments. Strategy in decks.
            Messaging in someone's head. Campaigns disconnected from the original intent.
          </p>
          <p style={subheadSolution}>
            ALYGNR is the orchestration layer that connects them —
            so every execution reflects strategy.
          </p>
        </div>

        {/* 4 — CTAs */}
        <div ref={setRef(3)} className="hero-ctas" style={ctaRow}>
          <a href="#request" style={ctaPrimary} className="hero-cta-primary">
            Request early access →
          </a>
          <a href="#how" className="btn-secondary hero-cta-secondary" style={{ height: 52, color: '#fff' }}>
            See how it works
          </a>
        </div>

        {/* 5 — trust line */}
        <p ref={setRef(4)} style={trustLine}>
          Built on proven GTM frameworks and consulting practice.
        </p>

      </div>

      <style>{`
        .hero-headline {
          font-size: clamp(52px, 7vw, 80px);
        }
        .hero-ctas {
          flex-direction: row;
        }
        .hero-cta-primary,
        .hero-cta-secondary {
          width: auto;
        }
        .hero-cta-primary:hover {
          border-color: #E8521A !important;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 32px !important;
          }
          .hero-headline {
            font-size: clamp(36px, 7vw, 52px) !important;
          }
          .hero-ctas {
            flex-direction: column !important;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100% !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── keep style objects outside render to avoid re-creation ─── */

// Intentionally hide all children before JS runs — the useEffect reveals them.
// We set opacity/transform imperatively so there is no FOUC even if the
// component re-mounts.

const _initHidden = { opacity: 0, transform: 'translateY(32px)' } as const;
void _initHidden; // referenced only by docs; actual hiding done in useEffect

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  display: 'flex',
  justifyContent: 'center',
  padding: '48px 0 32px',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

/* 2 — headline */
const headlineStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: '#fff',
  margin: '0 0 32px',
};

const underlinedWord: React.CSSProperties = {
  textDecoration: 'underline',
  textDecorationColor: 'var(--orange)',
  textDecorationThickness: 2,
  textUnderlineOffset: 6,
};

/* 3 — subhead */
const subheadWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginBottom: 40,
  maxWidth: 680,
};

const subheadProblem: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 18,
  fontWeight: 400,
  color: '#9BA3AF',
  lineHeight: 1.7,
  margin: 0,
  textAlign: 'center',
};

const subheadSolution: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 20,
  fontWeight: 500,
  color: '#D1D5DB',
  lineHeight: 1.7,
  margin: '20px 0 0',
  textAlign: 'center',
};

/* 4 — CTAs */
const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginBottom: 32,
};

const ctaBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 52,
  borderRadius: 8,
  padding: '14px 28px',
  fontSize: 15,
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: "'Inter', sans-serif",
  transition: 'border-color 180ms, color 180ms',
  whiteSpace: 'nowrap',
};

const ctaPrimary: React.CSSProperties = {
  ...ctaBase,
  background: '#FFFFFF',
  color: '#0A0A0A',
  border: '1px solid #EFEFED',
};


/* 5 — trust */
const trustLine: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  textAlign: 'center',
  margin: 0,
};


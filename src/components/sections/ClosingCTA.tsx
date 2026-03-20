import { useEffect, useRef, useState } from 'react';

export default function ClosingCTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reveal = (i: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
  });

  return (
    <section ref={ref} style={section}>
      <div style={container}>
        <h2 style={{ ...headline, ...reveal(0) }} className="ccta-headline">
          GTM that scales.
          <br />
          Start with intent.
        </h2>

        <p style={{ ...subhead, ...reveal(1) }}>
          Request early access and see how ALYGNR connects strategy
          to execution — in one system.
        </p>

        <div style={{ ...ctaRow, ...reveal(2) }} className="ccta-ctas">
          <a href="#request" style={ctaPrimary} className="ccta-primary">
            Request early access &rarr;
          </a>
          <a href="#how" className="btn-secondary ccta-secondary" style={{ height: 52, color: '#fff' }}>
            See how it works
          </a>
        </div>
      </div>

      <style>{`
        .ccta-headline { font-size: clamp(36px, 4.5vw, 52px); }
        .ccta-ctas { flex-direction: row; }
        .ccta-primary:hover {
          border-color: #E8521A !important;
        }
        @media (max-width: 768px) {
          .ccta-headline { font-size: 36px !important; }
          .ccta-ctas {
            flex-direction: column !important;
            width: 100%;
          }
          .ccta-primary,
          .ccta-secondary {
            width: 100% !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--black)',
  padding: '56px 24px',
  textAlign: 'center',
};

const container: React.CSSProperties = {
  maxWidth: 720,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: '#fff',
  margin: '0 0 24px',
};

const subhead: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: '0 0 40px',
};

const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  justifyContent: 'center',
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


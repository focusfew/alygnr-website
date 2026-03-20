import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    label: 'SCALING GTM TEAMS',
    title: 'GTM that doesn\'t reset every quarter.',
    body: 'Growing teams can\'t afford misaligned execution. ALYGNR gives every campaign a strategic foundation — so each cycle builds on the last.',
    link: 'See how it works',
  },
  {
    label: 'ENTERPRISE GTM',
    title: 'One strategic direction. Across every team and market.',
    body: 'Governance, consistency, and strategic alignment at scale — without slowing execution down.',
    link: 'See how it works',
  },
  {
    label: 'AGENCIES',
    title: 'Repeatable GTM strategy across every client.',
    body: 'Stop rebuilding from scratch. Run structured, repeatable GTM across all your accounts.',
    link: 'See how it works',
  },
] as const;

export default function WhoItsFor() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
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
      <h2 style={{ ...headline, ...reveal(0) }} className="wif-headline">
        Built for teams that take GTM seriously.
      </h2>

      <div style={{ ...grid, ...reveal(1) }} className="wif-grid">
        {cards.map((c) => (
          <div key={c.label} style={card} className="wif-card">
            <span style={cardLabel}>{c.label}</span>
            <h3 style={cardTitle}>{c.title}</h3>
            <p style={cardBody}>{c.body}</p>
            <a href="#" style={cardLink} className="wif-link">
              {c.link} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .wif-headline { font-size: clamp(36px, 4.5vw, 52px); }
        .wif-grid { grid-template-columns: repeat(3, 1fr); }
        .wif-card {
          transition: transform 180ms ease-out, box-shadow 180ms ease-out;
        }
        .wif-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06);
        }
        .wif-link:hover {
          text-decoration: underline !important;
        }
        @media (max-width: 900px) {
          .wif-headline { font-size: 36px !important; }
          .wif-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--cream)',
  padding: 'var(--section-padding-standard)',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  fontWeight: 800,
  color: 'var(--text-primary-light)',
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  margin: '0 auto var(--heading-margin-bottom)',
  maxWidth: 720,
};

const grid: React.CSSProperties = {
  display: 'grid',
  gap: 24,
  maxWidth: 1080,
  margin: '0 auto',
  textAlign: 'left',
};

const card: React.CSSProperties = {
  background: 'var(--cream-deep)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 12,
  padding: 36,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
  transition: 'transform 180ms ease-out, box-shadow 180ms ease-out',
};

const cardLabel: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--orange)',
  fontWeight: 500,
  display: 'block',
  marginBottom: 12,
};

const cardTitle: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  fontSize: 24,
  fontWeight: 600,
  color: 'var(--text-primary-light)',
  margin: '0 0 12px',
  lineHeight: 1.3,
};

const cardBody: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 16,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.6,
  margin: '0 0 24px',
  flex: 1,
};

const cardLink: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--orange)',
  textDecoration: 'none',
  fontWeight: 500,
};

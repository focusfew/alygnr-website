import { useScrollReveal } from '../../hooks/useScrollReveal';

const cards = [
  {
    label: 'CLEAR DIRECTION',
    title: 'Strategy and execution move as one.',
    body: 'Every campaign, asset, and message inherits from the same strategic intent. No drift. No reinterpretation. No surprises.',
  },
  {
    label: 'COMPOUNDING EXECUTION',
    title: 'Each cycle builds on the last.',
    body: 'Plays and assets reinforce each other across campaigns. The system carries forward what works.',
  },
  {
    label: 'PREDICTABLE PIPELINE',
    title: 'Orchestration creates consistency.',
    body: 'Coordinated execution produces structured performance data — so you know what\'s working and why.',
  },
] as const;

export default function ValueProps() {
  const { ref, reveal } = useScrollReveal();

  return (
    <section ref={ref} style={section}>
      <h2 style={{ ...headline, ...reveal(0) }} className="vp-headline">
        Clarity at the top. Consistency all the way down.
      </h2>
      <p style={{ ...subhead, ...reveal(1) }}>
        When strategy, messaging, and execution share the same source
        of truth — pipeline becomes a function of process, not luck.
      </p>

      <div style={{ ...grid, ...reveal(2) }} className="vp-grid">
        {cards.map((c) => (
          <div key={c.label} style={card} className="vp-card">
            <span style={cardLabel}>{c.label}</span>
            <h3 style={cardTitle}>{c.title}</h3>
            <p style={cardBody}>{c.body}</p>
          </div>
        ))}
      </div>

      <style>{`
        .vp-headline { font-size: clamp(36px, 4.5vw, 52px); }
        .vp-grid { grid-template-columns: repeat(3, 1fr); }
        .vp-card {
          transition: transform 180ms ease-out, box-shadow 180ms ease-out;
        }
        .vp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06);
        }
        @media (max-width: 900px) {
          .vp-headline { font-size: 36px !important; }
          .vp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--cream)',
  padding: '15px 24px',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  color: 'var(--text-primary-light)',
  margin: '0 auto 20px',
  maxWidth: 720,
};

const subhead: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 19,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.7,
  maxWidth: 560,
  margin: '0 auto 44px',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gap: 24,
  maxWidth: 1080,
  margin: '0 auto',
};

const card: React.CSSProperties = {
  background: 'var(--cream-deep)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 12,
  padding: 36,
  textAlign: 'left',
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
  margin: 0,
};

import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    headline: 'Strategy decided. Forgotten by execution.',
    body: 'Most campaigns ship with no traceable link back to the intent that created them.',
  },
  {
    headline: 'Messaging rebuilt from scratch every cycle.',
    body: 'There\u2019s no source of truth. So every brief rewrites the positioning.',
  },
  {
    headline: 'Performance data that goes nowhere.',
    body: 'Metrics live in dashboards. They don\u2019t feed back into strategy.',
  },
];

export default function TheCost() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="dark-mid">
      <div ref={ref} style={grid} className="cost-grid">
        {/* left column */}
        <div style={leftCol}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            WHAT MISALIGNMENT COSTS
          </div>

          <h2 style={{ ...headlineStyle, ...reveal(1) }}>
            Execution without alignment
            <br />
            is expensive.
          </h2>

          <div style={{ ...bodyWrap, ...reveal(2) }}>
            <p style={bodyPara}>
              Campaigns built without a shared strategic intent drift from the start.
            </p>
            <p style={bodyPara}>
              Messaging gets rewritten by every team member who touches it.
            </p>
            <p style={bodyPara}>
              Performance data accumulates in tools that have no connection back
              to why the campaign existed.
            </p>
          </div>

          <p style={{ ...punchline, ...reveal(3) }}>
            The cost isn't wasted spend. It's wasted cycles.
          </p>
        </div>

        {/* right column */}
        <div style={{ ...rightCol, ...reveal(4) }}>
          {cards.map((card) => (
            <div
              key={card.headline}
              className="cost-card"
              style={cardStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeft = '3px solid var(--orange)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeft = '3px solid transparent';
              }}
            >
              <p style={cardHeadline}>{card.headline}</p>
              <p style={cardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cost-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .cost-card {
          transition: border-left 180ms;
        }
        @media (max-width: 768px) {
          .cost-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

const grid: React.CSSProperties = {};

const leftCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 'clamp(32px, 4vw, 48px)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 24px',
};

const bodyWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
};

const bodyPara: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 18,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: 0,
};

const punchline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 18,
  fontWeight: 600,
  color: '#C8C6BE',
  margin: '32px 0 0',
};

const rightCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const cardStyle: React.CSSProperties = {
  background: 'var(--dark)',
  borderRadius: 10,
  padding: '28px 32px',
  borderLeft: '3px solid transparent',
};

const cardHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 17,
  fontWeight: 600,
  color: 'var(--white)',
  margin: '0 0 8px',
};

const cardBody: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 15,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.6,
  margin: 0,
};

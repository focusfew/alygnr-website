import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    label: 'FASTER DELIVERY',
    headline: 'Less setup. More strategy.',
    body: 'Structured onboarding, repeatable frameworks, and pre-built play sets mean you spend less time on setup and more time on strategy.',
  },
  {
    label: 'CONSISTENT QUALITY',
    headline: 'Output quality that does not depend on who is on the account.',
    body: 'Every engagement inherits the same GTM rigour. The system ensures consistency — not individual heroics.',
  },
  {
    label: 'COMPOUNDING VALUE',
    headline: 'What works once, works everywhere.',
    body: 'What works for one client informs the next. Your agency institutional knowledge compounds with every engagement.',
  },
] as const;

export default function AgenciesOutcomes() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="black" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper}>
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          THE OUTCOMES
        </div>

        <h2 style={{ ...headline, ...reveal(1) }} className="agencies-outcomes-headline">
          What changes when your agency runs GTM as a system.
        </h2>

        <div style={{ ...grid, ...reveal(2) }} className="agencies-outcomes-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                ...card,
                borderLeft: hovered === i ? '3px solid var(--orange)' : '3px solid transparent',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              }}
              className="agencies-outcome-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={cardLabel}>{c.label}</span>
              <h3 style={cardHeadline}>{c.headline}</h3>
              <p style={cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .agencies-outcomes-headline {
            font-size: 52px;
          }
          .agencies-outcomes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1100px;
            width: 100%;
          }
          .agencies-outcome-card {
            transition: border-color 180ms ease, transform 180ms ease;
          }
          @media (max-width: 900px) {
            .agencies-outcomes-grid {
              grid-template-columns: 1fr !important;
            }
            .agencies-outcomes-headline {
              font-size: 36px !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  marginBottom: 48,
};

const grid: React.CSSProperties = {};

const card: React.CSSProperties = {
  background: 'var(--dark-mid)',
  borderRadius: 12,
  padding: 40,
  textAlign: 'left',
};

const cardLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--orange)',
  display: 'block',
  marginBottom: 16,
};

const cardHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 12,
};

const cardBody: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.65,
  margin: 0,
};

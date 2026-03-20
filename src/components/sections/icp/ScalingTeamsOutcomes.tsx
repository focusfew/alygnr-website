import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    label: 'CONSISTENT MESSAGING',
    headline: 'One voice. Across every channel.',
    body: 'One Messaging Core. Inherited by every campaign, every asset, every brief. No drift. No reinterpretation.',
  },
  {
    label: 'COMPOUNDING EXECUTION',
    headline: 'Each campaign builds on the last.',
    body: 'Plays and assets reinforce each other across campaigns. The system carries forward what works.',
  },
  {
    label: 'PREDICTABLE PIPELINE',
    headline: 'Know what is working. Replicate it.',
    body: 'Performance maps back to strategic intent. You know what is working — and you can replicate it next quarter.',
  },
] as const;

export default function ScalingTeamsOutcomes() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="black" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper}>
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          THE OUTCOMES
        </div>

        <h2 style={{ ...headline, ...reveal(1) }} className="scaling-teams-outcomes-headline">
          What changes when your team executes as one system.
        </h2>

        <div style={{ ...grid, ...reveal(2) }} className="scaling-teams-outcomes-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                ...card,
                borderLeft: hovered === i ? '3px solid var(--orange)' : '3px solid transparent',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              }}
              className="scaling-teams-outcome-card"
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
          .scaling-teams-outcomes-headline {
            font-size: 52px;
          }
          .scaling-teams-outcomes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1100px;
            width: 100%;
          }
          .scaling-teams-outcome-card {
            transition: border-color 180ms ease, transform 180ms ease;
          }
          @media (max-width: 900px) {
            .scaling-teams-outcomes-grid {
              grid-template-columns: 1fr !important;
            }
            .scaling-teams-outcomes-headline {
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

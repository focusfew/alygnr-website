import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    label: 'CLEAR DIRECTION',
    headline: 'Every execution traces back to intent.',
    body: 'No campaign ships without a strategic anchor. Messaging, plays, and assets all inherit from the same source of truth.',
  },
  {
    label: 'CONSISTENT MESSAGING',
    headline: 'One narrative. Across every channel.',
    body: 'The Messaging Core governs what every asset says. Teams execute faster because the positioning is already decided.',
  },
  {
    label: 'COMPOUNDING INTELLIGENCE',
    headline: 'Each cycle makes the next one better.',
    body: "Performance feeds back into the system. The ALYGNR Score shows what's working. Optimization suggestions close the loop.",
  },
];

export default function WhatYouGet() {
  const { ref, reveal } = useScrollReveal();

  return (
    <SectionWrapper bg="black">
      <div ref={ref} style={wrapper}>
        {/* eyebrow */}
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          THE OUTCOMES
        </div>

        {/* headline */}
        <h2 style={{ ...headlineStyle, ...reveal(1) }}>
          Three things change when GTM
          <br />
          runs as a system.
        </h2>

        {/* cards */}
        <div className="wyg-grid" style={{ ...gridStyle, ...reveal(2) }}>
          {cards.map((card) => (
            <div
              key={card.label}
              className="wyg-card"
              style={cardStyle}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderLeft = '3px solid var(--orange)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderLeft = '3px solid transparent';
                el.style.transform = 'translateY(0)';
              }}
            >
              <p style={cardLabel}>{card.label}</p>
              <h3 style={cardHeadline}>{card.headline}</h3>
              <p style={cardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wyg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .wyg-card {
          transition: border-left 180ms, transform 180ms;
        }
        @media (max-width: 900px) {
          .wyg-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 1080,
  margin: '0 auto',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 52,
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 48px',
};

const gridStyle: React.CSSProperties = {
  width: '100%',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--dark-mid)',
  borderRadius: 12,
  padding: 40,
  textAlign: 'left',
  borderLeft: '3px solid transparent',
};

const cardLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--orange)',
  margin: '0 0 16px',
};

const cardHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--white)',
  margin: '0 0 12px',
  lineHeight: 1.3,
};

const cardBody: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.65,
  margin: 0,
};

import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    headline: 'Messaging that drifts.',
    body: `Every brief rewrites the positioning. There's no source of truth to inherit from.`,
  },
  {
    headline: 'Campaigns that reset.',
    body: 'Each cycle starts from zero. Nothing from last quarter informs this quarter.',
  },
  {
    headline: `Results you can't learn from.`,
    body: 'Performance data lives in five tools. None of it connects back to what you decided.',
  },
] as const;

export default function FoundersProblem() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="founders-problem-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">THE FOUNDER GTM TRAP</div>

          <h2 style={headline} className="founders-problem-headline">
            Fast execution.<br />No foundation.
          </h2>

          <p style={body}>
            You ship campaigns fast. But each one starts from scratch — new brief, rewritten
            messaging, disconnected from the last.
          </p>
          <p style={body}>
            Without a shared strategic foundation, every hire, every agency, every freelancer
            reinterprets your positioning.
          </p>
          <p style={body}>
            You're not lacking execution. You're lacking a system that makes execution compound.
          </p>

          <p style={punchline}>Speed without structure is just expensive chaos.</p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ ...cardCol, ...reveal(1) }}>
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                ...card,
                borderLeft: hovered === i ? '3px solid var(--orange)' : '3px solid transparent',
              }}
              className="founders-problem-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={cardHeadline}>{c.headline}</h3>
              <p style={cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .founders-problem-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
          }
          .founders-problem-headline {
            font-size: 48px;
          }
          .founders-problem-card {
            transition: border-color 180ms ease;
          }
          @media (max-width: 768px) {
            .founders-problem-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .founders-problem-headline {
              font-size: 36px !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.15,
  marginBottom: 28,
};

const body: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  marginBottom: 24,
};

const punchline: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  fontWeight: 600,
  color: '#C8C6BE',
  marginTop: 32,
};

const cardCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

const card: React.CSSProperties = {
  background: 'var(--dark)',
  borderRadius: 10,
  padding: '28px 32px',
};

const cardHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 17,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 8,
};

const cardBody: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.6,
};

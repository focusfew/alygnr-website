import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    headline: 'Onboarding that takes too long.',
    body: 'Every client engagement starts with weeks of discovery and positioning work that could be structured in days.',
  },
  {
    headline: 'Output quality that varies.',
    body: 'Without a shared framework, the quality of your GTM work depends on who is on the account — not the agency system.',
  },
  {
    headline: 'Intelligence that does not compound.',
    body: 'What worked for one client stays in that client folder. It does not inform your next pitch or your next engagement.',
  },
] as const;

export default function AgenciesProblem() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="agencies-problem-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">THE AGENCY GTM PROBLEM</div>

          <h2 style={headlineStyle} className="agencies-problem-headline">
            Great work.<br />No system behind it.
          </h2>

          <p style={body}>
            Every new client means a new brief format, a new positioning exercise, a new way
            of thinking about the GTM motion.
          </p>
          <p style={body}>
            Your best work stays locked inside individual engagements. It does not carry
            forward to the next client or the next quarter.
          </p>
          <p style={body}>
            You are delivering results. But you are doing it the hard way — rebuilding the
            foundation every single time.
          </p>

          <p style={punchline}>The agencies that scale are the ones that systematise strategy, not just execution.</p>
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
              className="agencies-problem-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={cardHeadline}>{c.headline}</h3>
              <p style={cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .agencies-problem-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
          }
          .agencies-problem-headline {
            font-size: 48px;
          }
          .agencies-problem-card {
            transition: border-color 180ms ease;
          }
          @media (max-width: 768px) {
            .agencies-problem-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .agencies-problem-headline {
              font-size: 36px !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {};

const headlineStyle: React.CSSProperties = {
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

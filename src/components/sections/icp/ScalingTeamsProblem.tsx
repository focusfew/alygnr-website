import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    headline: 'Strategy that does not govern.',
    body: 'The planning deck says one thing. The campaign brief says another. Nobody notices until the results come in.',
  },
  {
    headline: 'Messaging that nobody owns.',
    body: 'Every team member, agency, and freelancer writes their own version of the positioning.',
  },
  {
    headline: 'Cycles that do not compound.',
    body: 'Each quarter starts fresh. The lessons from last quarter live in a retrospective doc nobody reads.',
  },
] as const;

export default function ScalingTeamsProblem() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="scaling-teams-problem-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">THE SCALING GTM PROBLEM</div>

          <h2 style={headlineStyle} className="scaling-teams-problem-headline">
            More campaigns.<br />Less alignment.
          </h2>

          <p style={body}>
            The strategy gets set in planning. By the time it reaches execution, three people
            have reinterpreted it differently.
          </p>
          <p style={body}>
            As your team grows, so does the gap between what you intended and what actually ships.
          </p>
          <p style={body}>
            Performance data accumulates across tools. But it never feeds back into the next
            campaign brief.
          </p>

          <p style={punchline}>Growth without orchestration is just organised chaos at scale.</p>
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
              className="scaling-teams-problem-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={cardHeadline}>{c.headline}</h3>
              <p style={cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .scaling-teams-problem-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
          }
          .scaling-teams-problem-headline {
            font-size: 48px;
          }
          .scaling-teams-problem-card {
            transition: border-color 180ms ease;
          }
          @media (max-width: 768px) {
            .scaling-teams-problem-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .scaling-teams-problem-headline {
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

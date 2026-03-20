import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const cards = [
  {
    headline: 'Messaging that multiplies.',
    body: 'Every regional team, every agency, every market creates its own version. There is no governing source of truth.',
  },
  {
    headline: 'Governance that slows everything down.',
    body: 'Without structured orchestration, governance becomes a bottleneck rather than a system.',
  },
  {
    headline: 'Intelligence that goes nowhere.',
    body: 'Quarterly results arrive. Reviews happen. The insights do not change how the next campaign is briefed.',
  },
] as const;

export default function EnterpriseProblem() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="enterprise-problem-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">THE ENTERPRISE ALIGNMENT GAP</div>

          <h2 style={headlineStyle} className="enterprise-problem-headline">
            Strategy decided at the top.<br />Lost by the time it ships.
          </h2>

          <p style={body}>
            At enterprise scale, the distance between strategy and execution is not measured
            in days. It is measured in layers of reinterpretation.
          </p>
          <p style={body}>
            Every team, market, and business line runs its own version of the GTM motion. The
            message that reaches the buyer has been rewritten a dozen times.
          </p>
          <p style={body}>
            Performance data exists. But it is scattered, unstructured, and disconnected from
            the strategic decisions that created the campaigns.
          </p>

          <p style={punchline}>Alignment is not a meeting. It is a system.</p>
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
              className="enterprise-problem-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={cardHeadline}>{c.headline}</h3>
              <p style={cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          .enterprise-problem-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
          }
          .enterprise-problem-headline {
            font-size: 48px;
          }
          .enterprise-problem-card {
            transition: border-color 180ms ease;
          }
          @media (max-width: 768px) {
            .enterprise-problem-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .enterprise-problem-headline {
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

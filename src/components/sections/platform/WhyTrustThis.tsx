import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const frameworks = [
  {
    label: 'Buyer Forces',
    desc: 'Four buyer motivation archetypes that shape messaging, channel strategy, and play selection.',
  },
  {
    label: 'Blueprint Engine',
    desc: 'Deterministic logic that translates a Strategic Intent into a recommended funnel architecture and play set.',
  },
  {
    label: 'Messaging Core',
    desc: 'A single source of truth for positioning, value pillars, and proof blocks. Inherited by every asset.',
  },
  {
    label: 'ALYGNR Score',
    desc: "A usage-accuracy and readiness score that tells you where your GTM is aligned and where it's leaking.",
  },
];

export default function WhyTrustThis() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} style={grid} className="wtt-grid">
        {/* left column */}
        <div>
          <div className="eyebrow eyebrow-light" style={reveal(0)}>
            THE APPROACH
          </div>

          <h2 style={{ ...headlineStyle, ...reveal(1) }}>
            Built on proven GTM
            <br />
            frameworks. Not guesswork.
          </h2>

          <div style={{ ...bodyWrap, ...reveal(2) }}>
            <p style={bodyPara}>
              The frameworks embedded in ALYGNR were developed and tested across
              real GTM engagements with mid-market and enterprise B2B teams.
            </p>
            <p style={bodyPara}>
              The same frameworks that have structured go-to-market strategy for
              teams across industries are now embedded directly into the platform.
            </p>
            <p style={punchline}>
              They're not best practices borrowed from content marketing. They're
              operational frameworks proven in practice.
            </p>
          </div>
        </div>

        {/* right column */}
        <div style={{ ...pillsCol, ...reveal(3) }}>
          {frameworks.map((fw) => (
            <div key={fw.label} style={pillCard}>
              <p style={pillLabel}>{fw.label}</p>
              <p style={pillDesc}>{fw.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wtt-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 80px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .wtt-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

const grid: React.CSSProperties = {};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 48,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
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
  color: 'var(--text-secondary-light)',
  lineHeight: 1.7,
  margin: 0,
};

const punchline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 18,
  fontWeight: 600,
  color: 'var(--text-primary-light)',
  lineHeight: 1.7,
  margin: 0,
  paddingTop: 24,
};

const pillsCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const pillCard: React.CSSProperties = {
  background: 'var(--cream-deep)',
  borderRadius: 8,
  padding: '20px 24px',
};

const pillLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 16,
  fontWeight: 600,
  color: 'var(--text-primary-light)',
  margin: '0 0 4px',
};

const pillDesc: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 14,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.6,
  margin: 0,
};

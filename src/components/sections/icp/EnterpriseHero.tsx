import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function EnterpriseHero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="0">
      <div ref={ref} style={outer} className="enterprise-hero-outer">
        <div style={inner}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            FOR ENTERPRISE GTM
          </div>

          <h1 style={{ ...headline, ...reveal(1) }} className="enterprise-hero-headline">
            Strategic alignment at scale. Without the complexity.
          </h1>

          <p style={{ ...subhead, ...reveal(2) }}>
            Large teams, multiple markets, and high-stakes campaigns demand more than good
            intentions. ALYGNR gives you the governance layer that keeps every team, every
            market, and every message aligned to a single strategic intent.
          </p>

          <div style={reveal(3)}>
            <CTAButton href="#request" label="Request early access →" variant="primary" />
          </div>
        </div>

        <style>{`
          .enterprise-hero-headline {
            font-size: clamp(36px, 5vw, 60px);
          }
          @media (max-width: 768px) {
            .enterprise-hero-outer {
              align-items: flex-start !important;
              padding-top: 80px !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const outer: React.CSSProperties = {
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 80,
  paddingBottom: 80,
};

const inner: React.CSSProperties = {
  maxWidth: 800,
  margin: '0 auto',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  marginBottom: 24,
};

const subhead: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  marginBottom: 40,
};

import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function ScalingTeamsHero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="0">
      <div ref={ref} style={outer} className="scaling-teams-hero-outer">
        <div style={inner}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            FOR SCALING GTM TEAMS
          </div>

          <h1 style={{ ...headline, ...reveal(1) }} className="scaling-teams-hero-headline">
            Strategy set. Execution aligned. Pipeline predictable.
          </h1>

          <p style={{ ...subhead, ...reveal(2) }}>
            Your team is growing. Your GTM complexity is growing faster. ALYGNR gives every
            campaign a shared strategic foundation — so your team executes with consistency,
            not guesswork.
          </p>

          <div style={reveal(3)}>
            <CTAButton href="#request" label="Request early access →" variant="primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-request-modal')); }} />
          </div>
        </div>

        <style>{`
          .scaling-teams-hero-headline {
            font-size: clamp(36px, 5vw, 60px);
          }
          @media (max-width: 768px) {
            .scaling-teams-hero-outer {
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

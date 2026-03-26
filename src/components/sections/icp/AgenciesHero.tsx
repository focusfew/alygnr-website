import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function AgenciesHero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="0">
      <div ref={ref} style={outer} className="agencies-hero-outer">
        <div style={inner}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            FOR B2B AGENCIES
          </div>

          <h1 style={{ ...headline, ...reveal(1) }} className="agencies-hero-headline">
            Stop rebuilding from scratch. Start compounding.
          </h1>

          <p style={{ ...subhead, ...reveal(2) }}>
            Every client engagement should not start from zero. ALYGNR gives your agency a
            structured GTM system that works across every account — so you deliver faster,
            more consistently, and at higher margins.
          </p>

          <div style={reveal(3)}>
            <CTAButton href="#request" label="Request early access →" variant="primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-request-modal')); }} />
          </div>
        </div>

        <style>{`
          .agencies-hero-headline {
            font-size: clamp(36px, 5vw, 64px);
          }
          @media (max-width: 768px) {
            .agencies-hero-outer {
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

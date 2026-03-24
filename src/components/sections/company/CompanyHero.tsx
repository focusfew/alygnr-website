import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

export default function CompanyHero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="0">
      <div ref={ref} style={outer} className="company-hero-outer">
        <div style={inner}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            THE COMPANY
          </div>

          <h1 style={{ ...headline, ...reveal(1) }} className="company-hero-headline">
            GTM is broken.<br />We built the fix.
          </h1>

          <p style={{ ...subhead, ...reveal(2) }}>
            Most B2B marketing teams are executing without alignment. Strategy lives in decks.
            Messaging lives in someone&apos;s head. Execution happens in isolation. ALYGNR is
            the system that connects them.
          </p>
        </div>

        <style>{`
          .company-hero-headline {
            font-size: clamp(32px, 4vw, 52px);
          }
          @media (max-width: 768px) {
            .company-hero-outer {
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
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 80,
  paddingBottom: 80,
};

const inner: React.CSSProperties = {
  maxWidth: 760,
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
  fontSize: 20,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.8,
  maxWidth: 640,
  margin: '0 auto',
};

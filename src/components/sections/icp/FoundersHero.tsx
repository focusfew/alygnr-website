import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function FoundersHero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black">
      <div ref={ref} style={outer}>
        <div style={inner}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>
            FOR FOUNDER-LED TEAMS
          </div>

          <h1 style={{ ...headline, ...reveal(1) }} className="founders-hero-headline">
            GTM that moves as fast as you do.
          </h1>

          <p style={{ ...subhead, ...reveal(2) }}>
            You're the strategist, the brief-writer, and the executor. ALYGNR gives you
            the structure to make every campaign count — without slowing you down.
          </p>

          <div style={reveal(3)}>
            <CTAButton href="#early-access" label="Get early access →" variant="primary" />
          </div>
        </div>

        <style>{`
          .founders-hero-headline {
            font-size: clamp(36px, 5vw, 64px);
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

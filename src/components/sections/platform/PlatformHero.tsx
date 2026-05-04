import { useScrollReveal } from '../../../hooks/useScrollReveal';
import CTAButton from '../../ui/CTAButton';

export default function PlatformHero() {
  const { ref, reveal } = useScrollReveal();

  return (
    <section ref={ref} style={sectionStyle} className="platform-hero">
      <div style={containerStyle}>
        {/* eyebrow */}
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          THE PLATFORM
        </div>

        {/* headline */}
        <h1 style={{ ...headlineStyle, ...reveal(1) }} className="platform-hero-headline">
          The system that connects
          <br />
          strategy to pipeline.
        </h1>

        {/* subhead */}
        <p style={{ ...subheadStyle, ...reveal(2) }}>
          Most marketing systems manage execution. ALYGNR orchestrates it —
          from the strategic intent that starts every campaign to the compounding
          intelligence that makes the next one better.
        </p>

        {/* CTAs */}
        <div className="platform-hero-ctas" style={{ ...ctaRow, ...reveal(3) }}>
          <CTAButton href="/request-access" label="Request early access →" variant="primary" className="platform-cta-primary" />
          <CTAButton href="#how-it-works" label="How it works" variant="secondary" className="platform-cta-secondary" />
        </div>
      </div>

      <style>{`
        .platform-hero-headline {
          font-size: clamp(36px, 5vw, 60px);
        }
        .platform-hero-ctas {
          flex-direction: row;
        }
        .platform-cta-primary,
        .platform-cta-secondary {
          width: auto;
        }
        @media (max-width: 768px) {
          .platform-hero {
            align-items: flex-start !important;
            padding-top: 80px !important;
          }
          .platform-hero-headline {
            font-size: clamp(36px, 6vw, 52px) !important;
          }
          .platform-hero-ctas {
            flex-direction: column !important;
          }
          .platform-cta-primary,
          .platform-cta-secondary {
            width: 100% !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 24px',
};

const containerStyle: React.CSSProperties = {
  maxWidth: 860,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontWeight: 700,
  color: 'var(--white)',
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  margin: '0 0 24px',
};

const subheadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: '0 0 40px',
  maxWidth: 680,
};

const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
};

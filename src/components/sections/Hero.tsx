import { useScrollReveal } from '../../hooks/useScrollReveal';
import CTAButton from '../ui/CTAButton';

export default function Hero() {
  const { ref, reveal } = useScrollReveal();

  return (
    <section ref={ref} style={sectionStyle} className="hero-section">
      <div style={containerStyle} className="section-container">
        {/* 1 — eyebrow */}
        <div style={reveal(0)} className="eyebrow eyebrow-dark">
          THE GTM OPERATING SYSTEM
        </div>

        {/* 2 — headline */}
        <h1 style={{ ...headlineStyle, ...reveal(1) }} className="hero-headline">
          Turn strategic alignment
          <br />
          into predictable{' '}
          <span style={underlinedWord}>pipeline.</span>
        </h1>

        {/* 3 — subhead */}
        <div style={{ ...subheadWrap, ...reveal(2) }}>
          <p style={subheadProblem}>
            Most marketing teams execute in fragments. Strategy in decks.
            Messaging in someone's head. Campaigns disconnected from the original intent.
          </p>
          <p style={subheadSolution}>
            ALYGNR is the orchestration layer that connects them —
            so every execution reflects strategy.
          </p>
        </div>

        {/* 4 — CTAs */}
        <div className="hero-ctas" style={{ ...ctaRow, ...reveal(3) }}>
          <CTAButton href="/request-access" label="Request early access →" variant="primary" className="hero-cta-primary" />
          <CTAButton href="/platform" label="See how it works" variant="secondary" className="hero-cta-secondary" />
        </div>

        {/* 5 — trust line */}
        <p style={{ ...trustLine, ...reveal(4) }}>
          Built on proven GTM frameworks and consulting practice.
        </p>

      </div>

      <style>{`
        .hero-headline {
          font-size: clamp(52px, 7vw, 80px);
        }
        .hero-ctas {
          flex-direction: row;
        }
        .hero-cta-primary,
        .hero-cta-secondary {
          width: auto;
        }
        @media (max-width: 768px) {
          .hero-section {
            align-items: flex-start !important;
            padding-top: 80px !important;
          }
          .hero-headline {
            font-size: clamp(36px, 7vw, 52px) !important;
          }
          .hero-ctas {
            flex-direction: column !important;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
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
  display: 'flex',
  justifyContent: 'center',
  padding: '48px 0 32px',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

/* 2 — headline */
const headlineStyle: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  color: 'var(--white)',
  margin: '0 0 var(--heading-margin-bottom)',
};

const underlinedWord: React.CSSProperties = {
  textDecoration: 'underline',
  textDecorationColor: 'var(--orange)',
  textDecorationThickness: 2,
  textUnderlineOffset: 6,
};

/* 3 — subhead */
const subheadWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginBottom: 40,
  maxWidth: 680,
};

const subheadProblem: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 18,
  fontWeight: 400,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: 0,
  textAlign: 'center',
};

const subheadSolution: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 20,
  fontWeight: 500,
  color: '#D1D5DB',
  lineHeight: 1.7,
  margin: '20px 0 0',
  textAlign: 'center',
};

/* 4 — CTAs */
const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginBottom: 32,
};


/* 5 — trust */
const trustLine: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  textAlign: 'center',
  margin: 0,
};


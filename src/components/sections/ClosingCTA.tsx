import { useScrollReveal } from '../../hooks/useScrollReveal';
import CTAButton from '../ui/CTAButton';

export default function ClosingCTA() {
  const { ref, reveal } = useScrollReveal();

  return (
    <section ref={ref} style={section}>
      <div style={container}>
        <h2 style={{ ...headline, ...reveal(0) }} className="ccta-headline">
          One system.
          <br />
          Strategy to pipeline.
        </h2>

        <p style={{ ...subhead, ...reveal(1) }}>
          Request early access and see how ALYGNR connects strategy
          to execution.
        </p>

        <div style={{ ...ctaRow, ...reveal(2) }} className="ccta-ctas">
          <CTAButton href="#request" label="Request early access →" variant="primary" className="ccta-primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-request-modal')); }} />
          <CTAButton href="/platform" label="See how it works" variant="secondary" className="ccta-secondary" />
        </div>
      </div>

      <style>{`
        .ccta-headline { font-size: clamp(36px, 4.5vw, 52px); }
        .ccta-ctas { flex-direction: row; }
        @media (max-width: 768px) {
          .ccta-headline { font-size: 36px !important; }
          .ccta-ctas {
            flex-direction: column !important;
            width: 100%;
          }
          .ccta-primary,
          .ccta-secondary {
            width: 100% !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--black)',
  padding: 'var(--section-padding-standard)',
  textAlign: 'center',
};

const container: React.CSSProperties = {
  maxWidth: 720,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  color: 'var(--white)',
  margin: '0 0 24px',
};

const subhead: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: '0 0 40px',
};

const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  justifyContent: 'center',
};



import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function PlatformCTA() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="56px 24px">
      <div ref={ref} style={wrapper}>
        <h2 style={{ ...headlineStyle, ...reveal(0) }} className="platform-cta-headline">
          The system is ready.
          <br />
          Your GTM doesn't have to start from scratch.
        </h2>

        <p style={{ ...subheadStyle, ...reveal(1) }}>
          Request early access to see the full platform in a guided walkthrough.
        </p>

        <div style={reveal(2)}>
          <CTAButton
            href="https://app.alygnr.ai"
            label="Get started"
            variant="primary"
            className="platform-cta-btn"
          />
        </div>

        <p style={{ ...footnote, ...reveal(3) }}>
          No commitment. We'll reach out to schedule a walkthrough.
        </p>

        <Link to="/certification" className="platform-cert-link" style={{ ...certLink, ...reveal(4) }}>
          Built for teams who want to go deep →
        </Link>
      </div>

      <style>{`
        .platform-cta-btn {
          height: 56px !important;
          padding: 16px 36px !important;
          font-size: 16px !important;
        }
        .platform-cta-headline {
          font-size: clamp(36px, 4.5vw, 52px);
        }
        .platform-cert-link:hover {
          color: var(--white) !important;
        }
      `}</style>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 640,
  margin: '0 auto',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 24px',
};

const subheadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: '0 0 40px',
};

const footnote: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  margin: '20px 0 0',
};

const certLink: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  color: 'var(--text-secondary-dark)',
  textDecoration: 'none',
  marginBottom: 32,
  marginTop: 24,
  transition: 'color 180ms',
};

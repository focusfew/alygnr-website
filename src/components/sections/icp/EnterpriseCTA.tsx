import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function EnterpriseCTA() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="112px 24px">
      <div ref={ref} style={wrapper}>
        <h2 style={{ ...headline, ...reveal(0) }} className="enterprise-cta-headline">
          Enterprise GTM deserves<br />
          enterprise-grade orchestration.
        </h2>

        <p style={{ ...subhead, ...reveal(1) }}>
          Request early access to see how ALYGNR governs GTM at scale.
        </p>

        <div style={reveal(2)}>
          <CTAButton href="/request-access" label="Request early access →" variant="primary" />
        </div>

        <p style={{ ...footnote, ...reveal(3) }}>
          No commitment. We will reach out to schedule a guided walkthrough.
        </p>

        <style>{`
          .enterprise-cta-headline {
            font-size: 52px;
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  maxWidth: 720,
  margin: '0 auto',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.15,
  marginBottom: 24,
};

const subhead: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 19,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  marginBottom: 32,
};

const footnote: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  marginTop: 20,
};

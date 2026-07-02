import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import CTAButton from '../../ui/CTAButton';

export default function CompanyCTA() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="56px 24px">
      <div ref={ref} style={wrapper}>
        <h2 style={{ ...headline, ...reveal(0) }} className="company-cta-headline">
          We are building the GTM OS.<br />
          Come shape it with us.
        </h2>

        <p style={{ ...subhead, ...reveal(1) }}>
          Request early access and tell us about your GTM motion. We will reach out personally.
        </p>

        <div style={reveal(2)}>
          <CTAButton href="https://app.alygnr.ai" label="Get started" variant="primary" />
        </div>

        <p style={{ ...footnote, ...reveal(3) }}>
          No commitment. We will reach out to schedule a conversation.
        </p>

        <style>{`
          .company-cta-headline {
            font-size: clamp(32px, 4vw, 48px);
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  maxWidth: 600,
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

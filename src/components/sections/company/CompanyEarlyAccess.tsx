import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

export default function CompanyEarlyAccess() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper}>
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          WHERE WE ARE
        </div>

        <h2 style={{ ...headline, ...reveal(1) }} className="company-ea-headline">
          Early access. Built in the open.
        </h2>

        <p style={{ ...body, ...reveal(2) }}>
          ALYGNR is in early access. We are working directly with a small group of B2B
          marketing teams to refine the system before a wider launch.
        </p>
        <p style={{ ...body, marginBottom: 0, ...reveal(3) }}>
          If you are building or leading a GTM motion and want to help shape what this
          becomes, we want to hear from you.
        </p>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 'clamp(32px, 4vw, 48px)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.15,
  marginBottom: 28,
};

const body: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  marginBottom: 24,
};

import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

export default function CompanyStatement() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="80px 24px">
      <div ref={ref} style={wrapper}>
        <p style={{ ...statement, ...reveal(0) }} className="company-statement-text">
          Pipeline is not a marketing problem. It is an alignment problem. Solve alignment
          and pipeline follows.
        </p>

        <style>{`
          .company-statement-text {
            font-size: clamp(24px, 3.5vw, 40px);
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  maxWidth: 700,
  margin: '0 auto',
  textAlign: 'center',
};

const statement: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.3,
  margin: 0,
  borderLeft: '2px solid var(--orange)',
  paddingLeft: 32,
  textAlign: 'left',
};

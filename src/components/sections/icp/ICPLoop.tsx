import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import loopHorizontalSimple from '../../../assets/loop-horizontal-simple.png';

interface ICPLoopProps {
  eyebrow?: string;
  eyebrowClass?: string;
  headline?: string;
  subhead?: string;
}

export default function ICPLoop({
  eyebrow = 'THE SYSTEM',
  eyebrowClass = 'eyebrow-light',
  headline = 'One foundation. Every campaign inherits from it.',
  subhead = 'Set your strategic intent once. ALYGNR turns it into plays, assets, and intelligence — automatically.',
}: ICPLoopProps) {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} style={wrapper}>
        <div className={`eyebrow ${eyebrowClass}`} style={reveal(0)}>
          {eyebrow}
        </div>

        <h2 style={{ ...headlineStyle, ...reveal(1) }}>{headline}</h2>

        <p style={{ ...subheadStyle, ...reveal(2) }}>{subhead}</p>

        {/* loop diagram */}
        <div style={{ ...diagramWrap, ...reveal(3) }}>
          <img
            src={loopHorizontalSimple}
            alt="ALYGNR Operating Loop — six layers from Strategic Intent to Optimization"
            className="icp-loop-img"
            style={diagramImg}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .icp-loop-img {
            width: 100% !important;
          }
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
};

const diagramWrap: React.CSSProperties = {
  maxWidth: 900,
  width: '100%',
  marginTop: 56,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 52,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
};

const subheadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 19,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.7,
  margin: 0,
  maxWidth: 560,
};

const diagramImg: React.CSSProperties = {
  maxWidth: 900,
  width: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
};


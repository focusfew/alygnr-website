import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';
import loopHorizontalFull from '../../../assets/loop-horizontal-full.png';

export default function PlatformLoop() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} id="how-it-works" style={wrapper}>
        {/* eyebrow */}
        <div className="eyebrow eyebrow-light" style={reveal(0)}>
          THE OPERATING LOOP
        </div>

        {/* headline */}
        <h2 style={{ ...headlineStyle, ...reveal(1) }}>
          Six layers. One connected system.
        </h2>

        {/* subhead */}
        <p style={{ ...subheadStyle, ...reveal(2) }}>
          Every decision builds on the one before it. Every output feeds
          intelligence back into the system.
        </p>

        {/* loop diagram */}
        <div style={{ ...diagramWrap, ...reveal(3) }}>
          <img
            src={loopHorizontalFull}
            alt="ALYGNR Operating Loop — six layers from Strategic Intent to Optimization"
            className="platform-loop-img"
            style={diagramImg}
          />
          <p style={returnLabel}>The loop compounds with every cycle</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .platform-loop-img {
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
  maxWidth: 1000,
  width: '100%',
  marginTop: 56,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 52,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
};

const subheadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 19,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.7,
  margin: 0,
  maxWidth: 560,
};

const diagramImg: React.CSSProperties = {
  width: 1000,
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
};

const returnLabel: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 12,
  color: 'var(--text-muted-dark)',
  fontStyle: 'italic',
  textAlign: 'center',
  margin: '12px 0 0',
};

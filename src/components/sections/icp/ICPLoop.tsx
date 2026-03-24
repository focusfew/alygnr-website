import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const nodes = [
  { num: '01', label: 'Strategic Intent' },
  { num: '02', label: 'Blueprint' },
  { num: '03', label: 'GTM Plays' },
  { num: '04', label: 'Assets' },
  { num: '05', label: 'Insights' },
  { num: '06', label: 'Optimization' },
];

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
  const { ref, visible, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} style={wrapper}>
        <div className={`eyebrow ${eyebrowClass}`} style={reveal(0)}>
          {eyebrow}
        </div>

        <h2 style={{ ...headlineStyle, ...reveal(1) }}>{headline}</h2>

        <p style={{ ...subheadStyle, ...reveal(2) }}>{subhead}</p>

        {/* loop diagram */}
        <div style={{ ...diagramWrap, ...reveal(3) }} className="icp-loop-diagram-wrap">
          {/* desktop */}
          <div className="icp-loop-desktop">
            {/* nodes row with inline triangle arrows */}
            <div style={nodesRow}>
              {nodes.map((node, i) => (
                <>
                  <div key={node.num} style={nodeCol}>
                    <div style={pill}>
                      <span style={pillNum}>{node.num}</span>
                      <span style={pillLabel}>{node.label}</span>
                    </div>
                  </div>
                  {i < nodes.length - 1 && (
                    <div key={`arrow-${i}`} style={arrowCol}>
                      <svg width="12" height="20" viewBox="0 0 12 20" style={{ display: 'block' }}>
                        <path d="M0,0 L12,10 L0,20 Z" fill="var(--orange)" />
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* return arrow */}
            <svg
              className="icp-loop-return-svg"
              style={returnSvgStyle}
              viewBox="0 0 900 60"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="icp-arrowhead-right"
                  markerWidth="8"
                  markerHeight="6"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill="var(--orange)" />
                </marker>
              </defs>
              <path
                d="M75,0 C75,45 825,45 825,0"
                fill="none"
                stroke="var(--orange)"
                strokeWidth={1.5}
                markerEnd="url(#icp-arrowhead-right)"
                strokeDasharray={900}
                strokeDashoffset={visible ? 0 : 900}
                style={{
                  transition: 'stroke-dashoffset 1.2s ease-out 0.8s',
                }}
              />
            </svg>

            <p style={returnLabelStyle}>The loop compounds with every cycle</p>
          </div>

          {/* mobile */}
          <div className="icp-loop-mobile">
            {nodes.map((node, i) => (
              <div key={node.num}>
                <div style={mobilePillWrap}>
                  <div style={pill}>
                    <span style={pillNum}>{node.num}</span>
                    <span style={pillLabel}>{node.label}</span>
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    style={{ display: 'block', margin: '0 auto' }}
                  >
                    <defs>
                      <marker
                        id={`icp-arrow-down-${i}`}
                        markerWidth="8"
                        markerHeight="6"
                        refX="4"
                        refY="6"
                        orient="auto"
                      >
                        <path d="M0,0 L4,6 L8,0" fill="var(--orange)" />
                      </marker>
                    </defs>
                    <line
                      x1={12}
                      y1={2}
                      x2={12}
                      y2={26}
                      stroke="var(--orange)"
                      strokeWidth={1.5}
                      markerEnd={`url(#icp-arrow-down-${i})`}
                      strokeDasharray={24}
                      strokeDashoffset={visible ? 0 : 24}
                      style={{
                        transition: `stroke-dashoffset 0.6s ease-out ${0.1 * i}s`,
                      }}
                    />
                  </svg>
                )}
              </div>
            ))}

            {/* mobile return arrow */}
            <svg
              width="60"
              height="100%"
              viewBox="0 0 60 400"
              preserveAspectRatio="none"
              className="icp-loop-mobile-return"
            >
              <defs>
                <marker
                  id="icp-arrowhead-return-mobile"
                  markerWidth="8"
                  markerHeight="6"
                  refX="4"
                  refY="0"
                  orient="auto-start-reverse"
                >
                  <path d="M0,6 L4,0 L8,6" fill="var(--orange)" />
                </marker>
              </defs>
              <path
                d="M0,0 C50,0 50,400 0,400"
                fill="none"
                stroke="var(--orange)"
                strokeWidth={1.5}
                markerStart="url(#icp-arrowhead-return-mobile)"
                strokeDasharray={500}
                strokeDashoffset={visible ? 0 : 500}
                style={{
                  transition: 'stroke-dashoffset 1.2s ease-out 0.6s',
                }}
              />
            </svg>

            <p style={returnLabelStyle}>The loop compounds with every cycle</p>
          </div>
        </div>
      </div>

      <style>{`
        .icp-loop-desktop { display: block; }
        .icp-loop-mobile { display: none; }
        @media (max-width: 768px) {
          .icp-loop-desktop { display: none !important; }
          .icp-loop-mobile {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            position: relative;
          }
          .icp-loop-mobile-return {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 40px;
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

const nodesRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr',
  gap: 4,
  alignItems: 'center',
};

const nodeCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const pill: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'var(--dark-mid)',
  borderRadius: 100,
  padding: '12px 20px',
  whiteSpace: 'nowrap',
};

const pillNum: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 11,
  color: 'var(--orange)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const pillLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--white)',
};

const arrowCol: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const returnSvgStyle: React.CSSProperties = {
  width: '100%',
  height: 60,
  marginTop: 8,
};

const returnLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 12,
  color: 'var(--text-muted-dark)',
  fontStyle: 'italic',
  textAlign: 'center',
  margin: '12px 0 0',
};

const mobilePillWrap: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

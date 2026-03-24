import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const nodes = [
  {
    num: '01',
    label: 'Strategic Intent',
    desc: 'Define the objective, audience, offering, and buyer force. This is the anchor for everything that follows.',
  },
  {
    num: '02',
    label: 'Blueprint',
    desc: 'The system generates a recommended funnel architecture and GTM play set based on the intent.',
  },
  {
    num: '03',
    label: 'GTM Plays',
    desc: 'Structured execution motions — each targeting a funnel stage with a coordinated asset mix.',
  },
  {
    num: '04',
    label: 'Assets',
    desc: 'Channel-ready content generated within each play, inheriting all upstream context.',
  },
  {
    num: '05',
    label: 'Insights',
    desc: 'Performance mapped back to plays, messaging, and intent. Scored and structured.',
  },
  {
    num: '06',
    label: 'Optimization',
    desc: 'Intelligence from the current cycle feeds the next intent. The system compounds.',
  },
];

export default function PlatformLoop() {
  const { ref, visible, reveal } = useScrollReveal<HTMLDivElement>();

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
          Every layer inherits context from the one above it. Every output feeds
          intelligence back into the system.
        </p>

        {/* loop diagram */}
        <div style={{ ...diagramWrap, ...reveal(3) }} className="loop-diagram-wrap">
          {/* desktop diagram */}
          <div className="loop-desktop">
            {/* nodes row with inline triangle arrows */}
            <div style={nodesRow}>
              {nodes.map((node, i) => (
                <>
                  <div key={node.num} style={nodeCol}>
                    <div style={pill}>
                      <span style={pillNum}>{node.num}</span>
                      <span style={pillLabel}>{node.label}</span>
                    </div>
                    <p style={nodeDesc}>{node.desc}</p>
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
              className="loop-return-svg"
              style={returnSvgStyle}
              viewBox="0 0 900 60"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="arrowhead-right"
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
                markerEnd="url(#arrowhead-right)"
                strokeDasharray={900}
                strokeDashoffset={visible ? 0 : 900}
                style={{
                  transition: 'stroke-dashoffset 1.2s ease-out 0.8s',
                }}
              />
            </svg>

            <p style={returnLabel}>The loop compounds with every cycle</p>
          </div>

          {/* mobile diagram */}
          <div className="loop-mobile">
            {nodes.map((node, i) => (
              <div key={node.num}>
                <div style={mobilePillWrap}>
                  <div style={pill}>
                    <span style={pillNum}>{node.num}</span>
                    <span style={pillLabel}>{node.label}</span>
                  </div>
                </div>
                <p style={mobileDesc}>{node.desc}</p>
                {i < nodes.length - 1 && (
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    style={{ display: 'block', margin: '0 auto' }}
                  >
                    <defs>
                      <marker
                        id={`arrow-down-${i}`}
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
                      markerEnd={`url(#arrow-down-${i})`}
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
              className="loop-mobile-return"
            >
              <defs>
                <marker
                  id="arrowhead-return-mobile"
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
                markerStart="url(#arrowhead-return-mobile)"
                strokeDasharray={500}
                strokeDashoffset={visible ? 0 : 500}
                style={{
                  transition: 'stroke-dashoffset 1.2s ease-out 0.6s',
                }}
              />
            </svg>

            <p style={returnLabel}>The loop compounds with every cycle</p>
          </div>
        </div>
      </div>

      <style>{`
        .loop-desktop { display: block; }
        .loop-mobile { display: none; }
        @media (max-width: 768px) {
          .loop-desktop { display: none !important; }
          .loop-mobile {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            position: relative;
          }
          .loop-mobile-return {
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

/* ── layout ── */

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

/* ── headline / subhead ── */

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

/* ── desktop nodes ── */

const nodesRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr auto 1fr',
  gap: 4,
  alignItems: 'start',
};

const nodeCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
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

const nodeDesc: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 13,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: 160,
  textAlign: 'center',
};

/* ── desktop arrows ── */

const arrowCol: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 60,
};

const returnSvgStyle: React.CSSProperties = {
  width: '100%',
  height: 60,
  marginTop: 8,
};

const returnLabel: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 12,
  color: 'var(--text-muted-dark)',
  fontStyle: 'italic',
  textAlign: 'center',
  margin: '12px 0 0',
};

/* ── mobile nodes ── */

const mobilePillWrap: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

const mobileDesc: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 13,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.5,
  margin: '8px auto 8px',
  maxWidth: 280,
  textAlign: 'center',
};

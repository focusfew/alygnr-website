import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

export default function ProductInPractice() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream" padding="32px 24px 56px">
      <div ref={ref} style={wrapper}>
        {/* eyebrow */}
        <div className="eyebrow eyebrow-light" style={reveal(0)}>
          ALYGNR IN PRACTICE
        </div>

        {/* headline */}
        <h2 style={{ ...headlineStyle, ...reveal(1) }}>
          See the system at work.
        </h2>

        {/* subhead */}
        <p style={{ ...subheadStyle, ...reveal(2) }}>
          Three moments from the same intent — from setup to execution to
          intelligence.
        </p>

        {/* panels */}
        <div className="pip-grid" style={{ ...gridStyle, ...reveal(3) }}>
          {/* Panel 1 — Define the Intent */}
          <div style={card}>
            <p style={panelLabel}>DEFINE THE INTENT</p>
            <h3 style={panelHeadline}>Start with a clear direction.</h3>
            <p style={panelBody}>
              Set the objective, audience, offering, and buyer force. Every
              downstream decision inherits from here.
            </p>
            <div style={mockup}>
              <MockupRow label="BUSINESS OBJECTIVE" value="+25% pipeline in Q3" />
              <div style={divider} />
              <MockupRow label="PRIMARY ICP" value="CIO" />
              <div style={divider} />
              <MockupRow label="INDUSTRY" value="Financial Services" />
              <div style={divider} />
              <MockupRow label="STATUS" value="● Active" valueColor="var(--orange)" />
            </div>
          </div>

          {/* Panel 2 — Activate GTM Plays */}
          <div style={card}>
            <p style={panelLabel}>ACTIVATE GTM PLAYS</p>
            <h3 style={panelHeadline}>The system recommends the plays.</h3>
            <p style={panelBody}>
              ALYGNR generates a funnel-sequenced play set from your intent —
              each play targeting a specific stage with a coordinated asset mix.
            </p>
            <div style={mockup}>
              <p style={mockupHeader}>RECOMMENDED GTM PLAYS</p>
              <PlayRow name="Category POV Seeding" tag="Awareness" tagColor="var(--tag-awareness)" />
              <PlayRow name="Solution Brief Campaign" tag="Intent" tagColor="var(--tag-intent)" />
              <PlayRow name="Executive Thought Leadership" tag="Decision" tagColor="var(--tag-decision)" />
            </div>
          </div>

          {/* Panel 3 — Close the Loop */}
          <div style={card}>
            <p style={panelLabel}>CLOSE THE LOOP</p>
            <h3 style={panelHeadline}>Intelligence comes back to the system.</h3>
            <p style={panelBody}>
              Performance maps back to plays, messaging, and intent. The ALYGNR
              Score tells you exactly where your execution is strong and where
              it's leaking.
            </p>
            <div style={mockup}>
              <div style={{ textAlign: 'center' as const }}>
                <ScoreBlock label="ALYGNR SCORE" value={87} />
              </div>
              <div style={{ ...divider, margin: '16px 0' }} />
              <StageRow label="Awareness" color="var(--tag-awareness)" />
              <StageRow label="Intent" color="var(--tag-intent)" />
              <StageRow label="Decision" color="var(--tag-decision)" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .pip-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

/* ── sub-components ── */

function MockupRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div style={{ padding: '10px 0' }}>
      <p style={mockupLabel}>{label}</p>
      <p style={{ ...mockupValue, ...(valueColor ? { color: valueColor } : {}) }}>
        {value}
      </p>
    </div>
  );
}

function PlayRow({
  name,
  tag,
  tagColor,
}: {
  name: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div style={playRow}>
      <span style={playName}>{name}</span>
      <span style={{ ...tagPill, background: tagColor }}>{tag}</span>
    </div>
  );
}

function ScoreBlock({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ textAlign: 'center' as const, flex: 1 }}>
      <p style={scoreValue}>{value}</p>
      <p style={scoreLabel}>{label}</p>
    </div>
  );
}

function StageRow({ label, color }: { label: string; color: string }) {
  return (
    <div style={stageRow}>
      <span style={{ ...stageDot, background: color }} />
      <span style={stageLabel}>{label}</span>
      <span style={stageBar}>
        <span
          style={{
            display: 'block',
            height: '100%',
            borderRadius: 3,
            background: color,
            width: label === 'Awareness' ? '85%' : label === 'Intent' ? '68%' : '54%',
          }}
        />
      </span>
    </div>
  );
}

/* ── styles ── */

const wrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 24px',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 48,
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
  margin: '0 0 56px',
  maxWidth: 520,
};

const gridStyle: React.CSSProperties = {
  maxWidth: 1200,
  width: '100%',
};

const card: React.CSSProperties = {
  background: 'var(--white)',
  borderRadius: 12,
  border: '1px solid rgba(0,0,0,0.07)',
  padding: 28,
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  textAlign: 'left',
};

const panelLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary-light)',
  margin: '0 0 12px',
};

const panelHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 20,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  margin: '0 0 8px',
};

const panelBody: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 15,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.6,
  margin: '0 0 20px',
};

const mockup: React.CSSProperties = {
  background: 'var(--cream)',
  borderRadius: 8,
  padding: 20,
};

const mockupLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary-light)',
  margin: 0,
};

const mockupValue: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--text-primary-light)',
  margin: '4px 0 0',
};

const divider: React.CSSProperties = {
  height: 1,
  background: 'rgba(0,0,0,0.07)',
};

const mockupHeader: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary-light)',
  margin: '0 0 14px',
};

const playRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
};

const playName: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--text-primary-light)',
};

const tagPill: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.04em',
  color: 'var(--white)',
  borderRadius: 100,
  padding: '3px 10px',
};

const scoreValue: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 36,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  margin: 0,
  lineHeight: 1,
};

const scoreLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary-light)',
  margin: '6px 0 0',
};

const stageRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 0',
};

const stageDot: React.CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  flexShrink: 0,
};

const stageLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 13,
  color: 'var(--text-primary-light)',
  width: 72,
  flexShrink: 0,
};

const stageBar: React.CSSProperties = {
  flex: 1,
  height: 6,
  borderRadius: 3,
  background: 'rgba(0,0,0,0.06)',
  overflow: 'hidden',
};

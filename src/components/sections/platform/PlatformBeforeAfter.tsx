import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const rows = [
  {
    without: 'Nine tools, no orchestration layer.',
    with: 'One system. Every tool feeds into it.',
  },
  {
    without: 'Campaigns briefed from a slide deck.',
    with: 'Campaigns generated from a Strategic Intent.',
  },
  {
    without: 'Messaging rewritten every quarter.',
    with: 'Messaging Core governs every asset, every time.',
  },
  {
    without: 'Scores and dashboards that report the past.',
    with: 'ALYGNR Score that shows what to fix next.',
  },
  {
    without: 'GTM is a process.',
    with: 'GTM is a system.',
    punchline: true,
  },
];

export default function PlatformBeforeAfter() {
  const { ref, reveal } = useScrollReveal();

  return (
    <SectionWrapper bg="dark-mid">
      <div ref={ref} style={wrapper}>
        {/* headline */}
        <h2 style={{ ...headlineStyle, ...reveal(0) }}>
          <span style={{ color: 'var(--text-secondary-dark)' }}>Without ALYGNR.</span>
          <br />
          <span style={{ color: 'var(--white)' }}>With ALYGNR.</span>
        </h2>

        {/* table */}
        <div style={{ ...tableWrap, ...reveal(1) }} className="pba-table">
          {/* headers */}
          <div style={headerRow} className="pba-row">
            <div style={cellLeft}>
              <span style={headerLabel}>WITHOUT</span>
            </div>
            <div style={dividerCol} />
            <div style={cellRight}>
              <span style={{ ...headerLabel, color: 'var(--orange)' }}>WITH ALYGNR</span>
            </div>
          </div>

          {/* rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                ...dataRow,
                borderBottom:
                  i < rows.length - 1 ? '1px solid var(--border-dark)' : 'none',
              }}
              className="pba-row"
            >
              <div
                style={{
                  ...cellLeft,
                  ...(row.punchline ? punchlineLeft : {}),
                }}
              >
                {row.without}
              </div>
              <div style={dividerCol} />
              <div
                style={{
                  ...cellRight,
                  ...(row.punchline ? punchlineRight : {}),
                }}
              >
                {!row.punchline && <span style={orangeDot} />}
                {row.with}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pba-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
        }
        @media (max-width: 640px) {
          .pba-table {
            max-width: 100% !important;
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

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 52,
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 48px',
};

const tableWrap: React.CSSProperties = {
  maxWidth: 900,
  width: '100%',
  borderTop: '1px solid var(--border-dark)',
};

const headerRow: React.CSSProperties = {
  borderBottom: '1px solid var(--border-dark)',
};

const dataRow: React.CSSProperties = {};

const cellLeft: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.6,
  padding: '18px 24px 18px 0',
  textAlign: 'left',
};

const cellRight: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 16,
  color: 'var(--white)',
  lineHeight: 1.6,
  padding: '18px 0 18px 24px',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const dividerCol: React.CSSProperties = {
  width: 1,
  background: 'var(--border-dark)',
};

const headerLabel: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted-dark)',
};

const orangeDot: React.CSSProperties = {
  display: 'inline-block',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: 'var(--orange)',
  flexShrink: 0,
};

const punchlineLeft: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  fontStyle: 'italic',
  padding: '28px 24px 28px 0',
};

const punchlineRight: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: 'var(--orange)',
  padding: '28px 0 28px 24px',
};

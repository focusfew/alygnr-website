import OperatingLoop from '../diagrams/OperatingLoop';

export default function SystemLoop() {
  return (
    <section style={{ background: 'var(--cream)', padding: '48px 0' }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: '58fr 42fr',
        gap: 48,
        alignItems: 'flex-start',
      }}>
        {/* ── left column ── */}
        <div>
          {/* eyebrow */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginBottom: 24,
          }}>
            <span style={{
              display: 'inline-block',
              width: 2,
              height: 16,
              backgroundColor: 'var(--orange)',
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'var(--orange)',
              lineHeight: '16px',
            }}>HOW ALYGNR WORKS</span>
          </div>

          {/* headline */}
          <div style={{
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary-light)',
            marginBottom: 32,
          }}>
            One system.<br />
            Every layer connected.
          </div>

          {/* body lines */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            marginBottom: 32,
          }}>
            <p style={bodyLine}>Strategic Intent drives the Blueprint.</p>
            <p style={bodyLine}>The Blueprint generates GTM Plays.</p>
            <p style={bodyLine}>Plays produce Assets.</p>
            <p style={bodyLine}>Assets generate performance data.</p>
            <p style={bodyLine}>Data produces Insights.</p>
            <p style={bodyLine}>Insights improve the next Intent.</p>
          </div>

          {/* payoff line 1 */}
          <div style={{
            fontSize: 17,
            fontWeight: 700,
            color: 'var(--text-primary-light)',
            lineHeight: 1.4,
            marginBottom: 6,
          }}>
            Nothing works in isolation.
          </div>

          {/* payoff line 2 */}
          <div style={{
            fontSize: 17,
            fontWeight: 700,
            color: 'var(--text-primary-light)',
            lineHeight: 1.4,
          }}>
            Everything compounds.
          </div>
        </div>

        {/* ── right column ── */}
        <div style={{ marginTop: 44 }}>
          <OperatingLoop />
        </div>
      </div>
    </section>
  );
}

const bodyLine: React.CSSProperties = {
  fontSize: 16,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.6,
  margin: 0,
};

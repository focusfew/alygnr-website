import loopVertical from '../../assets/loop-vertical2.png';

export default function SystemLoop() {
  return (
    <section style={{ background: 'var(--cream)', padding: '48px 0' }}>
      <div className="system-loop-grid" style={{
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
          <div className="eyebrow eyebrow-light" style={{ marginBottom: 24 }}>
            HOW ALYGNR WORKS
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
        <div className="system-loop-img-col" style={{ marginTop: 44 }}>
          <img
            src={loopVertical}
            alt="ALYGNR Operating Loop"
            style={{ width: 480, maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .system-loop-grid {
            grid-template-columns: 1fr !important;
            padding: 0 16px !important;
            gap: 32px !important;
          }
          .system-loop-img-col {
            order: -1 !important;
            margin-top: 0 !important;
          }
          .system-loop-img-col img {
            width: 300px !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}

const bodyLine: React.CSSProperties = {
  fontSize: 16,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.6,
  margin: 0,
};

import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const pills = [
  {
    label: 'Per-client workspaces',
    desc: 'Each client gets their own Messaging Core, intent history, and asset library. Fully isolated, fully structured.',
  },
  {
    label: 'Shared frameworks',
    desc: 'Your agency GTM methodology is embedded into the system. Apply it consistently across every engagement without re-explaining it.',
  },
  {
    label: 'Faster onboarding',
    desc: 'Structured intake means you go from client briefing to first campaign plays in days, not weeks.',
  },
  {
    label: 'Traceable output',
    desc: 'Every asset links to the intent that created it. Client reviews become straightforward. Scope creep becomes visible.',
  },
] as const;

export default function AgenciesMultiClient() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="agencies-multiclient-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">BUILT FOR AGENCIES</div>

          <h2 style={headline} className="agencies-multiclient-headline">
            Manage strategy across every client.<br />From one system.
          </h2>

          <p style={body}>
            ALYGNR agency mode gives you a separate workspace for each client — with its own
            Messaging Core, its own intents, its own plays and assets.
          </p>
          <p style={body}>
            Your agency GTM frameworks are embedded once and applied across every engagement.
            You stop rebuilding the wheel on every new account.
          </p>
          <p style={body}>
            Client reporting becomes structural: every output traces back to a Strategic Intent,
            making it straightforward to show clients what you have built and why.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ ...pillCol, ...reveal(1) }}>
          {pills.map((p, i) => (
            <div key={i} style={pillCard}>
              <div style={pillLabel}>{p.label}</div>
              <div style={pillDesc}>{p.desc}</div>
            </div>
          ))}
        </div>

        <style>{`
          .agencies-multiclient-grid {
            display: grid;
            grid-template-columns: 55fr 45fr;
            gap: 80px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: center;
          }
          .agencies-multiclient-headline {
            font-size: 48px;
          }
          @media (max-width: 768px) {
            .agencies-multiclient-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .agencies-multiclient-headline {
              font-size: 36px !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
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

const pillCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const pillCard: React.CSSProperties = {
  background: 'var(--dark)',
  borderRadius: 8,
  padding: '20px 24px',
};

const pillLabel: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 16,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 6,
};

const pillDesc: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.6,
};

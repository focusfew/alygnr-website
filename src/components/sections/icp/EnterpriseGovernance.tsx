import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

const pills = [
  {
    label: 'Role-based access',
    desc: 'Company Admin, Reviewer, and Executor roles with configurable permissions per business line.',
  },
  {
    label: 'Approval workflows',
    desc: 'Assets and plays move through structured review before they reach execution. Nothing ships without sign-off.',
  },
  {
    label: 'Full traceability',
    desc: 'Every output links back to the Intent, Blueprint, and Messaging Core that created it. Complete audit trail.',
  },
  {
    label: 'ALYGNR Score',
    desc: 'A single alignment and readiness score across your GTM motion. Leadership visibility without dashboard overload.',
  },
] as const;

export default function EnterpriseGovernance() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="dark-mid" padding="var(--section-padding-standard)">
      <div ref={ref} style={wrapper} className="enterprise-governance-grid">
        {/* LEFT COLUMN */}
        <div style={reveal(0)}>
          <div className="eyebrow eyebrow-dark">BUILT FOR ENTERPRISE</div>

          <h2 style={headline} className="enterprise-governance-headline">
            Governance that enables.<br />Not governance that blocks.
          </h2>

          <p style={body}>
            ALYGNR role-based access model lets you control who configures strategy, who
            executes against it, and who reviews before anything ships.
          </p>
          <p style={body}>
            Every asset, play, and campaign is traceable back to the Strategic Intent that
            created it. Audit trails are built in, not bolted on.
          </p>
          <p style={body}>
            The ALYGNR Score gives leadership a single number that reflects execution accuracy
            across the entire GTM motion — so you are never flying blind.
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
          .enterprise-governance-grid {
            display: grid;
            grid-template-columns: 55fr 45fr;
            gap: 80px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: center;
          }
          .enterprise-governance-headline {
            font-size: 48px;
          }
          @media (max-width: 768px) {
            .enterprise-governance-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .enterprise-governance-headline {
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

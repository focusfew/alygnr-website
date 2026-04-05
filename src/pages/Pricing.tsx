import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import SectionWrapper from '../components/layout/SectionWrapper';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ───────── data ───────── */

type CellType = 'check' | 'dash' | 'val';

interface FeatureRow {
  label: string;
  tooltip?: string;
  cells: [CellType, string][];
}

interface Section {
  title: string;
  rows: FeatureRow[];
}

const sections: Section[] = [
  {
    title: 'Core Orchestration',
    rows: [
      {
        label: 'Active Strategic Intents',
        tooltip:
          'How many marketing initiatives ALYGNR is actively orchestrating for you at once. When one wraps up, archive it and start the next — there\u2019s no monthly limit, just a cap on parallel activity.',
        cells: [
          ['val', '1'],
          ['val', '3'],
          ['val', 'Unlimited'],
          ['val', 'Unlimited'],
        ],
      },
      {
        label: 'GTM Plays per Intent',
        tooltip:
          'The individual execution activities within a campaign — a LinkedIn content push, an email sequence, a paid ads run. Each play has its own content, messaging, and channel focus.',
        cells: [
          ['val', 'Up to 6'],
          ['val', 'Up to 15'],
          ['val', 'Unlimited'],
          ['val', 'Unlimited'],
        ],
      },
      {
        label: 'Messaging Foundation',
        tooltip:
          'Your company\u2019s strategic context — positioning, value propositions, target customers, and communication guidelines. ALYGNR uses this to make sure everything it creates stays consistent and on-brand.',
        cells: [
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Blueprint Generation',
        tooltip:
          'Based on your campaign goal, ALYGNR recommends a structured marketing plan — which plays to run, in what sequence, and what content each one needs. You review and adjust before execution begins.',
        cells: [
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
    ],
  },
  {
    title: 'Execution',
    rows: [
      {
        label: 'Asset Generation',
        cells: [
          ['val', 'Unlimited'],
          ['val', 'Unlimited'],
          ['val', 'Unlimited'],
          ['val', 'Unlimited'],
        ],
      },
      {
        label: 'First-class Asset Types',
        tooltip:
          'The 8 content formats ALYGNR generates with full editing, variant, and approval support: LinkedIn posts, email sequences, sales outreach, landing page copy, one-pagers, case studies, competitor comparisons, and LinkedIn ads.',
        cells: [
          ['val', 'All 8'],
          ['val', 'All 8'],
          ['val', 'All 8'],
          ['val', 'All 8'],
        ],
      },
      {
        label: 'Assisted Publishing',
        tooltip:
          'Packages your approved content with labels, metadata, and a publishing checklist — organised and ready to push to LinkedIn, your CRM, or your website.',
        cells: [
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
    ],
  },
  {
    title: 'Intelligence',
    rows: [
      {
        label: 'ALYGNR Score',
        tooltip:
          'A 0–100 health score for your marketing setup — measuring whether your campaigns are well-structured, consistently executed, and covering the right stages of the buyer journey.',
        cells: [
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Full Insights Cockpit',
        tooltip:
          'A live view of where your marketing has gaps — broken down by funnel stage, with a prioritised list of issues and suggested fixes. Moves you from "something feels off" to knowing exactly what to address.',
        cells: [
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Fix Flows & Optimisation',
        tooltip:
          'Actionable fixes surfaced directly from your Insights — generate missing content, patch coverage gaps, resolve inconsistencies. Each fix is a specific action, not a recommendation to think about.',
        cells: [
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Marketing Performance Analytics',
        tooltip:
          'Upload a simple data export from LinkedIn, Google, or your email tool, and ALYGNR connects the dots — showing you which content and campaigns are actually driving results, and which aren\u2019t pulling their weight.',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
    ],
  },
  {
    title: 'Governance',
    rows: [
      {
        label: 'Approval Workflows',
        tooltip:
          'A structured review process for content before it goes live. Assign reviewers, track sign-off status, and keep a clear record of what was approved, by whom, and when.',
        cells: [
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Activity Log',
        tooltip:
          'A complete history of everything that\u2019s happened in your account — edits, approvals, generations, and publishes. Useful for team visibility and keeping track of what changed.',
        cells: [
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Role-based Access Control',
        tooltip:
          'Set permissions per team member — who can configure the account, who can create campaigns, and who can only review and approve content.',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'SSO / SAML',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
        ],
      },
    ],
  },
  {
    title: 'Support & Onboarding',
    rows: [
      {
        label: 'Strategy Configuration Call',
        cells: [
          ['dash', '—'],
          ['val', '45–60 min'],
          ['val', '45–60 min'],
          ['val', '45–60 min'],
        ],
      },
      {
        label: 'Onboarding & Training Call',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Priority Support',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
          ['check', '✓'],
        ],
      },
      {
        label: 'Dedicated Customer Success',
        cells: [
          ['dash', '—'],
          ['dash', '—'],
          ['dash', '—'],
          ['check', '✓'],
        ],
      },
    ],
  },
];

const agencyFeaturesLeft = [
  'Multi-client workspace — separate, isolated environments per client',
  'Client-level Messaging Foundation and ICP configuration',
  'Client reporting and exportable performance summaries',
  'Custom user count across client environments',
];

const agencyFeaturesRight = [
  'B2B marketing agencies managing 3+ client GTM programmes',
  'Fractional CMO and GTM advisory practices',
  'Growth consultancies running account-based programmes',
  'Teams that need portfolio-level visibility across accounts',
];

/* ───────── helpers ───────── */

function openModal() {
  window.dispatchEvent(new CustomEvent('open-request-modal'));
}

function InfoTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span
      style={tooltipWrap}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span style={infoIcon}>i</span>
      {show && (
        <span style={tooltipBox}>
          {text}
          <span style={tooltipArrow} />
        </span>
      )}
    </span>
  );
}

/* ───────── component ───────── */

export default function Pricing() {
  const { ref: heroRef, reveal: heroReveal } = useScrollReveal<HTMLDivElement>();
  const { ref: tableRef, reveal: tableReveal } = useScrollReveal<HTMLDivElement>();
  const { ref: agencyRef, reveal: agencyReveal } = useScrollReveal<HTMLDivElement>();

  const feaCol = 1; // Team column index (0-based among the 4 tier columns)

  return (
    <PageWrapper>
      <Nav activePage="pricing" />

      {/* ── Hero (cream bg) ── */}
      <SectionWrapper bg="cream" padding="80px 24px 64px">
        <div ref={heroRef} style={{ maxWidth: 980, margin: '0 auto' }}>
          <div className="eyebrow eyebrow-light" style={heroReveal(0)}>
            PRICING
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-base)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--text-primary-light)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
              ...heroReveal(1),
            }}
          >
            Straightforward pricing.
            <br />
            Strategic value.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 17,
              color: 'var(--text-secondary-light)',
              lineHeight: 1.65,
              maxWidth: 540,
              margin: 0,
              ...heroReveal(2),
            }}
          >
            Every plan includes the full orchestration loop — Messaging Foundation,
            Blueprint, GTM Plays, and Assets. Tiers unlock team depth, intelligence,
            and governance.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Pricing table (dark bg) ── */}
      <SectionWrapper bg="black" padding="64px 24px 0">
        <div ref={tableRef} style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid var(--border-dark)', ...tableReveal(0) }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...thBase, ...colLabel }}>Features</th>
                  {/* Founder */}
                  <th style={{ ...thBase, ...tierHead }}>
                    <span style={badgeFP}>Founding Partner</span>
                    <span style={tierName}>Founder</span>
                    <span style={tierUsers}>1–2 users</span>
                  </th>
                  {/* Team (featured) */}
                  <th style={{ ...thBase, ...tierHead, ...feaBorder, borderTop: '2px solid #2F6FEB', background: 'rgba(47,111,235,0.06)' }}>
                    <span style={badgePop}>Most popular</span>
                    <span style={tierName}>Team</span>
                    <span style={tierUsers}>Up to 5 users</span>
                  </th>
                  {/* Scale */}
                  <th style={{ ...thBase, ...tierHead }}>
                    <span style={badgeFP}>Founding Partner</span>
                    <span style={tierName}>Scale</span>
                    <span style={tierUsers}>Up to 10 users</span>
                  </th>
                  {/* Enterprise */}
                  <th style={{ ...thBase, ...tierHead }}>
                    <span style={{ ...tierName, marginTop: 23 }}>Enterprise</span>
                    <span style={tierUsers}>Custom users</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sections.map((sec) => (
                  <SectionGroup key={sec.title} section={sec} feaCol={feaCol} />
                ))}

                {/* CTA row */}
                <tr>
                  <td style={{ ...tdBase, ...ctaTd }} />
                  <td style={{ ...tdBase, ...ctaTd }}>
                    <button style={btnPrimary} onClick={openModal}>Apply for Access</button>
                  </td>
                  <td style={{ ...tdBase, ...ctaTd, ...feaBorder, borderBottom: '2px solid #2F6FEB' }}>
                    <button style={btnPrimary} onClick={openModal}>Apply for Access</button>
                  </td>
                  <td style={{ ...tdBase, ...ctaTd }}>
                    <button style={btnGhost} onClick={openModal}>Talk to Us</button>
                  </td>
                  <td style={{ ...tdBase, ...ctaTd }}>
                    <button style={btnGhost} onClick={openModal}>Talk to Us</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Agency section ── */}
      <SectionWrapper bg="black" padding="56px 24px 0">
        <div ref={agencyRef} style={{ maxWidth: 980, margin: '0 auto', ...agencyReveal(0) }}>
          <p style={sectionLabel}>For Agencies</p>
          <h2 style={agencyTitle}>Built for teams running multiple clients.</h2>
          <p style={agencyDesc}>
            Agency mode gives you a dedicated multi-client workspace — separate
            environments per client, all managed from one place. Everything in Scale,
            plus the tools to run GTM at portfolio scale.
          </p>
          <div style={agencyCard} className="pricing-agency-card">
            <div>
              <p style={agencyColTitle}>Everything in Scale, plus</p>
              {agencyFeaturesLeft.map((f) => (
                <div key={f} style={agencyFeature}>
                  <span style={agencyCheck}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={agencyColTitle}>Designed for</p>
              {agencyFeaturesRight.map((f) => (
                <div key={f} style={agencyFeature}>
                  <span style={agencyCheck}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={agencyCtaRow}>
              <span style={agencyCtaNote}>
                Agency pricing is custom. Contact us to discuss your client portfolio
                and team structure.
              </span>
              <button style={btnAgency} onClick={openModal}>
                Talk to Us →
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Footer note ── */}
      <SectionWrapper bg="black" padding="40px 24px 64px">
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <p style={footerNote}>
            Founding Partner pricing is available for early cohort members — limited
            spots. All pricing is discussed during onboarding. Plans include a 14-day
            trial with full platform access.
            <br />
            ALYGNR is a GTM Intelligence Operating System. Not a content tool, not a
            campaign manager — a strategic orchestration layer that turns alignment
            into predictable pipeline.
          </p>
        </div>
      </SectionWrapper>

      <Footer />
      <RequestAccessModal />

      <style>{`
        @media (max-width: 768px) {
          .pricing-agency-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageWrapper>
  );
}

/* ── section group sub-component ── */

function SectionGroup({ section, feaCol }: { section: Section; feaCol: number }) {
  return (
    <>
      <tr>
        <td colSpan={5} style={secRowTd}>{section.title}</td>
      </tr>
      {section.rows.map((row) => (
        <tr key={row.label}>
          <td style={{ ...tdBase, ...featCol }}>
            {row.label}
            {row.tooltip && <InfoTooltip text={row.tooltip} />}
          </td>
          {row.cells.map(([type, value], i) => {
            const isFea = i === feaCol;
            const cellStyle: React.CSSProperties = {
              ...tdBase,
              textAlign: 'center',
              ...(isFea ? feaBorder : {}),
              ...(type === 'check'
                ? { color: '#4ADE80', fontSize: 14 }
                : type === 'dash'
                  ? { color: '#4E545F', fontSize: 13 }
                  : {
                      color:
                        row.label === 'Strategy Configuration Call' && i > 0
                          ? '#8A8F9A'
                          : '#EDEEEF',
                      fontSize: row.label === 'Strategy Configuration Call' && i > 0 ? 11 : 12,
                    }),
            };
            return (
              <td key={i} style={cellStyle}>
                {value}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}

/* ───────── styles ───────── */

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: 660,
  fontSize: 13,
  fontFamily: 'var(--font-tight)',
};

const thBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.07)',
  padding: '10px 14px',
  verticalAlign: 'middle',
  lineHeight: 1.4,
};

const tdBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.07)',
  padding: '10px 14px',
  verticalAlign: 'middle',
  lineHeight: 1.4,
};

const colLabel: React.CSSProperties = {
  textAlign: 'left',
  fontWeight: 400,
  fontSize: 11,
  color: '#4E545F',
  background: '#0D1018',
};

const tierHead: React.CSSProperties = {
  textAlign: 'center',
  verticalAlign: 'top',
  padding: '18px 12px',
  background: '#0D1018',
};

const tierName: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  color: '#EDEEEF',
  display: 'block',
  marginBottom: 3,
};

const tierUsers: React.CSSProperties = {
  fontSize: 11,
  color: '#4E545F',
  display: 'block',
};

const feaBorder: React.CSSProperties = {
  borderLeft: '2px solid #2F6FEB',
  borderRight: '2px solid #2F6FEB',
};

const badgeFP: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 10,
  fontWeight: 500,
  padding: '3px 9px',
  borderRadius: 99,
  marginBottom: 8,
  background: 'rgba(74,222,128,0.1)',
  color: '#4ADE80',
};

const badgePop: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 10,
  fontWeight: 500,
  padding: '3px 9px',
  borderRadius: 99,
  marginBottom: 8,
  background: 'rgba(47,111,235,0.15)',
  color: '#7AABFF',
};

const featCol: React.CSSProperties = {
  color: '#8A8F9A',
  fontSize: 13,
  minWidth: 200,
};

const secRowTd: React.CSSProperties = {
  background: '#131620',
  fontSize: 10,
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  color: '#4E545F',
  fontWeight: 500,
  padding: '7px 14px',
  border: '1px solid rgba(255,255,255,0.07)',
};

const ctaTd: React.CSSProperties = {
  padding: '12px 10px',
  background: '#0D1018',
};

const btnPrimary: React.CSSProperties = {
  background: '#EDEEEF',
  color: '#07090E',
  border: 'none',
  padding: '9px 0',
  borderRadius: 8,
  fontSize: 12,
  fontWeight: 500,
  cursor: 'pointer',
  width: '100%',
  fontFamily: 'var(--font-tight)',
  transition: 'opacity 0.15s',
};

const btnGhost: React.CSSProperties = {
  background: 'transparent',
  color: '#8A8F9A',
  border: '1px solid rgba(255,255,255,0.13)',
  padding: '9px 0',
  borderRadius: 8,
  fontSize: 12,
  cursor: 'pointer',
  width: '100%',
  fontFamily: 'var(--font-tight)',
  transition: 'border-color 0.15s, color 0.15s',
};

/* Tooltip */
const tooltipWrap: React.CSSProperties = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  marginLeft: 5,
};

const infoIcon: React.CSSProperties = {
  width: 13,
  height: 13,
  borderRadius: '50%',
  border: '1px solid #4E545F',
  color: '#4E545F',
  fontSize: 8,
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'default',
  userSelect: 'none',
  flexShrink: 0,
};

const tooltipBox: React.CSSProperties = {
  position: 'absolute',
  bottom: 'calc(100% + 8px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 240,
  background: '#1C2030',
  color: '#C8CDD6',
  fontSize: 12,
  lineHeight: 1.6,
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.13)',
  zIndex: 200,
  pointerEvents: 'none',
  whiteSpace: 'normal',
  textAlign: 'left',
  fontWeight: 400,
};

const tooltipArrow: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  borderWidth: 5,
  borderStyle: 'solid',
  borderColor: '#1C2030 transparent transparent transparent',
};

/* Agency */
const sectionLabel: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#4E545F',
  fontWeight: 500,
  marginBottom: 8,
  fontFamily: 'var(--font-tight)',
};

const agencyTitle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 400,
  letterSpacing: '-0.015em',
  color: '#EDEEEF',
  marginBottom: 8,
  fontFamily: 'var(--font-base)',
  lineHeight: 1.15,
};

const agencyDesc: React.CSSProperties = {
  fontSize: 14,
  color: '#8A8F9A',
  lineHeight: 1.65,
  maxWidth: 520,
  marginBottom: 24,
  fontFamily: 'var(--font-tight)',
};

const agencyCard: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 12,
  padding: 28,
  background: '#0D1018',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px 48px',
};

const agencyColTitle: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#4E545F',
  fontWeight: 500,
  marginBottom: 14,
  fontFamily: 'var(--font-tight)',
};

const agencyFeature: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  marginBottom: 11,
  fontSize: 13,
  color: '#8A8F9A',
  lineHeight: 1.5,
  fontFamily: 'var(--font-tight)',
};

const agencyCheck: React.CSSProperties = {
  color: '#4ADE80',
  fontSize: 13,
  flexShrink: 0,
  marginTop: 1,
};

const agencyCtaRow: React.CSSProperties = {
  gridColumn: '1 / -1',
  borderTop: '1px solid rgba(255,255,255,0.07)',
  paddingTop: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
};

const agencyCtaNote: React.CSSProperties = {
  fontSize: 12,
  color: '#4E545F',
  lineHeight: 1.5,
  fontFamily: 'var(--font-tight)',
};

const btnAgency: React.CSSProperties = {
  background: 'transparent',
  color: '#EDEEEF',
  border: '1px solid rgba(255,255,255,0.13)',
  padding: '9px 20px',
  borderRadius: 8,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  fontFamily: 'var(--font-tight)',
  whiteSpace: 'nowrap',
  transition: 'border-color 0.15s',
};

const footerNote: React.CSSProperties = {
  fontSize: 12,
  color: '#4E545F',
  lineHeight: 1.8,
  borderTop: '1px solid rgba(255,255,255,0.07)',
  paddingTop: 28,
  fontFamily: 'var(--font-tight)',
};

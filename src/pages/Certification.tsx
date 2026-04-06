import { useState } from 'react';
import emailjs from 'emailjs-com';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import SectionWrapper from '../components/layout/SectionWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

/* ─── SECTION 1 — Hero ─── */
function Hero() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} style={heroOuter}>
        <div style={heroInner}>
          <div className="eyebrow eyebrow-light" style={reveal(0)}>
            ALYGNR CERTIFICATION PROGRAMME
          </div>
          <h1 style={{ ...heroHeadline, ...reveal(1) }} className="cert-hero-headline">
            Become the person who makes GTM work.
          </h1>
          <p style={{ ...heroSubhead, ...reveal(2) }}>
            For mid-level marketers who want to go from executing tasks to owning strategy.
          </p>
        </div>

        <style>{`
          .cert-hero-headline {
            font-size: clamp(36px, 5vw, 56px);
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

const heroOuter: React.CSSProperties = {
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 80,
  paddingBottom: 80,
};

const heroInner: React.CSSProperties = {
  maxWidth: 800,
  margin: '0 auto',
  textAlign: 'center',
};

const heroHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  lineHeight: 1.1,
  marginBottom: 24,
};

const heroSubhead: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 19,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.7,
  maxWidth: 560,
  margin: '0 auto',
};

/* ─── SECTION 2 — Tier Cards ─── */
const tiers = [
  {
    name: 'Practitioner',
    description:
      'You can operate ALYGNR end to end — from setting up your Messaging Foundation to generating and reviewing a full set of GTM plays and assets.',
  },
  {
    name: 'Orchestrator',
    description:
      'You can run a full GTM strategy loop independently — setting intent, configuring the Blueprint, managing plays across the funnel, and reading the Insights cockpit.',
  },
  {
    name: 'Architect',
    description:
      'You can lead GTM transformation — building the internal case for strategic change, designing the system for a team or organisation, and governing execution at scale.',
  },
];

function TierCards() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black">
      <div ref={ref} style={tiersWrapper}>
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          THE PROGRAMME
        </div>
        <h2 style={{ ...tiersHeadline, ...reveal(1) }}>Three levels. One clear path.</h2>

        <div style={cardsRow} className="cert-cards-row">
          {tiers.map((t, i) => (
            <div key={t.name} className="cert-card" style={reveal(i + 2)}>
              <p style={tierName}>{t.name}</p>
              <p style={tierDesc}>{t.description}</p>
              <span style={badge}>Enrolment opening soon</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-cards-row {
          display: flex;
          gap: 24px;
        }
        .cert-card {
          background: var(--dark-mid);
          border-radius: 12px;
          padding: 36px;
          flex: 1;
          border-left: 3px solid transparent;
          transition: border-color 180ms, transform 180ms;
        }
        .cert-card:hover {
          border-left-color: var(--orange);
          transform: translateY(-4px);
        }
        @media (max-width: 768px) {
          .cert-cards-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

const tiersWrapper: React.CSSProperties = {
  maxWidth: 1080,
  margin: '0 auto',
  textAlign: 'center',
  padding: '80px 24px',
};

const tiersHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 40,
  fontWeight: 700,
  color: 'var(--white)',
  lineHeight: 1.1,
  marginBottom: 48,
};

const cardsRow: React.CSSProperties = {
  display: 'flex',
  gap: 24,
};

const tierName: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--white)',
  margin: '0 0 12px',
  textAlign: 'left',
};

const tierDesc: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: '0 0 20px',
  textAlign: 'left',
};

const badge: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 11,
  fontFamily: 'var(--font-base)',
  background: 'rgba(232,82,26,0.12)',
  color: 'var(--orange)',
  borderRadius: 99,
  padding: '4px 12px',
};

/* ─── SECTION 3 — Waitlist Form ─── */
function WaitlistForm() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', company: '', job_title: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSend = () => {
    if (!form.name || !form.email) return;
    setStatus('sending');
    emailjs
      .send('service_mqp5d4j', 'template_bqsn64l', { ...form }, 'JSIwJ881RXhuumHG_')
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <SectionWrapper bg="cream">
      <div ref={ref} style={formSection}>
        <div className="eyebrow eyebrow-light" style={reveal(0)}>
          JOIN THE WAITLIST
        </div>
        <h2 style={{ ...formHeadline, ...reveal(1) }}>
          Be first to know when enrolment opens.
        </h2>

        {status === 'success' ? (
          <p style={{ ...successMsg, ...reveal(2) }}>
            You are on the list. We will reach out when enrolment opens.
          </p>
        ) : (
          <div style={{ ...formCard, ...reveal(2) }}>
            {(['name', 'email', 'company', 'job_title'] as const).map((field) => {
              const labels: Record<string, string> = {
                name: 'First Name',
                email: 'Work Email',
                company: 'Company',
                job_title: 'Job Title',
              };
              return (
                <div key={field}>
                  <label style={labelStyle}>{labels[field]}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    style={inputStyle}
                    className="cert-input"
                  />
                </div>
              );
            })}

            <button
              onClick={handleSend}
              disabled={status === 'sending'}
              style={submitBtn}
              className="cert-submit"
            >
              {status === 'sending' ? 'Sending...' : 'Join the waitlist'}
            </button>

            {status === 'error' && (
              <p style={errorMsg}>Something went wrong. Please try again.</p>
            )}

            <p style={footnote}>We will reach out when enrolment opens. No spam.</p>
          </div>
        )}
      </div>

      <style>{`
        .cert-input:focus {
          border-color: var(--orange) !important;
          outline: none;
        }
        .cert-submit:hover {
          opacity: 0.85;
        }
      `}</style>
    </SectionWrapper>
  );
}

const formSection: React.CSSProperties = {
  maxWidth: 800,
  margin: '0 auto',
  textAlign: 'center',
  padding: '80px 24px',
};

const formHeadline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 36,
  fontWeight: 700,
  color: 'var(--text-primary-light)',
  lineHeight: 1.1,
  marginBottom: 40,
};

const formCard: React.CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 12,
  padding: 48,
  maxWidth: 520,
  margin: '0 auto',
  textAlign: 'left',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-base)',
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--text-secondary-light)',
  marginBottom: 4,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  background: '#F7F7F5',
  border: '1px solid rgba(0,0,0,0.12)',
  borderRadius: 8,
  padding: '12px 16px',
  color: 'var(--text-primary-light)',
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  marginBottom: 20,
};

const submitBtn: React.CSSProperties = {
  width: '100%',
  background: 'var(--black)',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  padding: 14,
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  fontWeight: 500,
  cursor: 'pointer',
};

const successMsg: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--text-primary-light)',
  textAlign: 'center',
};

const errorMsg: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  color: 'var(--orange)',
  textAlign: 'center',
  marginTop: 12,
};

const footnote: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 13,
  color: 'var(--text-secondary-light)',
  textAlign: 'center',
  marginTop: 16,
  marginBottom: 0,
};

/* ─── PAGE ─── */
export default function Certification() {
  return (
    <PageWrapper>
      <Nav />
      <Hero />
      <TierCards />
      <WaitlistForm />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}

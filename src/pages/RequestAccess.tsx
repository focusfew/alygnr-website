import { useState } from 'react';
import emailjs from 'emailjs-com';
import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';

const SERVICE_ID = 'service_mqp5d4j';
const TEMPLATE_ID = 'template_4536fzf';
const PUBLIC_KEY = 'JSIwJ881RXhuumHG_';

export default function RequestAccess() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, company, email }, PUBLIC_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageWrapper>
      <SEO
        title="Request Early Access"
        description="Request early access to ALYGNR. We review every request personally. You'll hear from us within 48 hours."
        canonical="/request-access"
      />
      <Nav />

      <section style={sectionStyle}>
        <div className="section-container ra-container">
          {/* left column */}
          <div style={leftCol}>
            <div className="eyebrow eyebrow-dark">EARLY ACCESS</div>
            <h1 style={headingStyle} className="ra-heading">
              Request early access.
            </h1>
            <p style={bodyStyle}>
              We review every request personally. You'll hear from us within 48 hours.
            </p>
          </div>

          {/* right column */}
          <div style={rightCol}>
            {status === 'success' ? (
              <p style={successText}>
                We have your request. Expect to hear from us within 48 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  className="ra-input"
                />

                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={inputStyle}
                  className="ra-input"
                />

                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  className="ra-input"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cta-primary"
                  style={submitBtnStyle}
                >
                  {status === 'sending' ? 'Sending...' : 'Send request →'}
                </button>

                {status === 'error' && (
                  <p style={errorText}>Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .ra-container {
          display: flex;
          align-items: center;
          gap: 96px;
        }
        .ra-heading {
          font-size: clamp(36px, 4.5vw, 56px);
        }
        .ra-input:focus {
          border-color: var(--orange) !important;
          outline: none;
        }
        @media (max-width: 768px) {
          .ra-container {
            flex-direction: column !important;
            gap: 48px !important;
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
        }
      `}</style>
    </PageWrapper>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  minHeight: 'calc(100vh - 64px)',
  display: 'flex',
  alignItems: 'center',
  padding: '64px 0',
};

const leftCol: React.CSSProperties = {
  flex: 1,
};

const rightCol: React.CSSProperties = {
  flex: '0 0 420px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'var(--white)',
  margin: '0 0 24px',
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 18,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.7,
  margin: 0,
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-base)',
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--text-secondary-dark)',
  marginBottom: 4,
};

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
  background: 'var(--dark)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  padding: '12px 16px',
  color: 'var(--white)',
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  marginBottom: 20,
};

const submitBtnStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none',
};

const successText: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--white)',
  lineHeight: 1.6,
};

const errorText: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  color: 'var(--orange)',
  textAlign: 'center',
  marginTop: 16,
};

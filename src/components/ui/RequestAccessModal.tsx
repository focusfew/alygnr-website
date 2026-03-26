import { useState, useEffect, useCallback } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_mqp5d4j';
const TEMPLATE_ID = 'template_4536fzf';
const PUBLIC_KEY = 'JSIwJ881RXhuumHG_';

export default function RequestAccessModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const openModal = useCallback(() => {
    setOpen(true);
    setStatus('idle');
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setName('');
    setCompany('');
    setEmail('');
    setStatus('idle');
  }, []);

  useEffect(() => {
    window.addEventListener('open-request-modal', openModal);
    return () => window.removeEventListener('open-request-modal', openModal);
  }, [openModal]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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

  if (!open) return null;

  return (
    <div style={overlay} onClick={closeModal}>
      <div
        style={card}
        className="request-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={closeModal} style={closeBtn} aria-label="Close">
          &times;
        </button>

        {status === 'success' ? (
          <p style={successText}>Thank you! We will be in touch soon.</p>
        ) : (
          <>
            <h2 style={headlineStyle}>Request early access</h2>
            <p style={subheadStyle}>
              Tell us about your GTM motion. We will reach out personally.
            </p>

            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                className="request-modal-input"
              />

              <label style={labelStyle}>Company</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={inputStyle}
                className="request-modal-input"
              />

              <label style={labelStyle}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="request-modal-input"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="cta-primary"
                style={submitBtn}
              >
                {status === 'sending' ? 'Sending...' : 'Send request →'}
              </button>

              {status === 'error' && (
                <p style={errorText}>Something went wrong. Please try again.</p>
              )}
            </form>
          </>
        )}
      </div>

      <style>{`
        .request-modal-input:focus {
          border-color: var(--orange) !important;
          outline: none;
        }
        @media (max-width: 480px) {
          .request-modal-card {
            width: calc(100% - 32px) !important;
            margin: 16px !important;
            padding: 32px !important;
            max-height: 90vh;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.7)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const card: React.CSSProperties = {
  position: 'relative',
  background: 'var(--black)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: 48,
  maxWidth: 480,
  width: '100%',
};

const closeBtn: React.CSSProperties = {
  position: 'absolute',
  top: 16,
  right: 16,
  background: 'transparent',
  border: 'none',
  color: 'var(--white)',
  fontSize: 24,
  cursor: 'pointer',
  lineHeight: 1,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 28,
  fontWeight: 700,
  color: 'var(--white)',
  marginBottom: 8,
};

const subheadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  color: 'var(--text-secondary-dark)',
  marginBottom: 32,
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

const submitBtn: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none',
};

const successText: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--white)',
  textAlign: 'center',
  padding: '40px 0',
};

const errorText: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  color: 'var(--orange)',
  textAlign: 'center',
  marginTop: 16,
};

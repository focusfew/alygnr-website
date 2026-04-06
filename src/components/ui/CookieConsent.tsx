import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    window.dispatchEvent(new CustomEvent('cookie_consent_accepted'));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--black)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary-dark)',
          maxWidth: '640px',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        We use cookies to understand how you use our site and improve your experience. See our{' '}
        <Link to="/privacy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
        .
      </p>

      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: 'var(--orange)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            color: 'var(--text-secondary-dark)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '10px 20px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
        >
          Decline
        </button>
      </div>
    </div>
  );
}

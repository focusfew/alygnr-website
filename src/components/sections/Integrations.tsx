const logos = [
  'Google Analytics',
  'Google Ads',
  'HubSpot',
  'LinkedIn Ads',
  'LinkedIn',
] as const;

export default function Integrations() {
  return (
    <section style={section}>
      <div className="eyebrow eyebrow-light" style={{ justifyContent: 'center' }}>
        WORKS WITH THE GTM STACK YOU ALREADY USE
      </div>
      <div style={strip} className="int-strip">
        {logos.map((name) => (
          <span key={name} style={logo} className="int-logo">
            {name}
          </span>
        ))}
      </div>

      <style>{`
        .int-logo {
          opacity: 0.55;
          transition: opacity 180ms, color 180ms;
        }
        .int-logo:hover {
          opacity: 1;
          color: var(--text-primary-light) !important;
        }
        @media (max-width: 640px) {
          .int-strip {
            flex-wrap: wrap !important;
            gap: 20px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--cream)',
  padding: '64px 24px',
  textAlign: 'center',
};

const strip: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 48,
  flexWrap: 'nowrap',
};

const logo: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--text-secondary-light)',
  whiteSpace: 'nowrap',
  cursor: 'default',
};

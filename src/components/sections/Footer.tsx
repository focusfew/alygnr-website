export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footer}>
      <div style={inner} className="footer-inner">
        {/* left — logo + tagline */}
        <div style={leftCol}>
          <a href="/" style={logoLink}>
            <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: 20 }}>/</span>
            <span style={{ color: 'var(--text-primary-dark)', fontWeight: 600, fontSize: 16, letterSpacing: '0.08em' }}>
              ALYGNR
            </span>
          </a>
          <p style={tagline}>GTM Intelligence Operating System</p>
        </div>

        {/* centre — nav columns */}
        <div style={navCols} className="footer-nav">
          <div>
            <p style={colHeader}>Platform</p>
            <a href="#how" style={navLink}>How it works</a>
            <a href="#integrations" style={navLink}>Integrations</a>
          </div>
          <div>
            <p style={colHeader}>Use cases</p>
            <a href="#mid-sized" style={navLink}>Mid-sized teams</a>
            <a href="#enterprise" style={navLink}>Enterprise teams</a>
            <a href="#agencies" style={navLink}>Agencies</a>
          </div>
          <div>
            <p style={colHeader}>Company</p>
            <a href="#about" style={navLink}>About</a>
            <a href="#contact" style={navLink}>Contact</a>
          </div>
          <div>
            <p style={colHeader}>Legal</p>
            <a href="#privacy" style={navLink}>Privacy</a>
            <a href="#terms" style={navLink}>Terms</a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div style={bottomBar}>
        <p style={copyright}>&copy; {year} ALYGNR. All rights reserved.</p>
      </div>

      <style>{`
        .footer-inner {
          flex-direction: row;
          align-items: start;
          justify-content: space-between;
        }
        .footer-nav {
          flex-direction: row;
        }
        .footer-nav a:hover {
          color: var(--text-primary-dark) !important;
        }
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .footer-nav {
            flex-direction: column !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}

const footer: React.CSSProperties = {
  background: 'var(--black)',
  padding: '64px 24px 0',
  borderTop: '1px solid var(--border-dark)',
};

const inner: React.CSSProperties = {
  maxWidth: 1080,
  margin: '0 auto',
  display: 'flex',
  gap: 80,
  paddingBottom: 48,
};

const leftCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const logoLink: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
};

const tagline: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  margin: 0,
};

const navCols: React.CSSProperties = {
  display: 'flex',
  gap: 64,
};

const colHeader: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted-dark)',
  fontWeight: 600,
  margin: '0 0 16px',
};

const navLink: React.CSSProperties = {
  display: 'block',
  fontSize: 14,
  color: 'var(--text-secondary-dark)',
  textDecoration: 'none',
  marginBottom: 10,
  transition: 'color 180ms',
};

const bottomBar: React.CSSProperties = {
  maxWidth: 1080,
  margin: '0 auto',
  borderTop: '1px solid var(--border-dark)',
  padding: '24px 0',
};

const copyright: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-muted-dark)',
  margin: 0,
};

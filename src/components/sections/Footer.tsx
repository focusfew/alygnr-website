import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo4.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footer}>
      <div style={inner} className="footer-inner">
        {/* left — logo + tagline */}
        <div style={leftCol}>
          <Link to="/" style={logoLink}>
            <img src={logoSrc} alt="ALYGNR" style={{ height: 15, width: 'auto' }} />
          </Link>
          <p style={tagline}>The GTM Operating System that builds predictable pipeline.</p>
        </div>

        {/* centre — nav columns */}
        <div style={navCols} className="footer-nav">
          <div>
            <p style={colHeader}>Platform</p>
            <Link to="/platform" style={navLink}>How it works</Link>
            <a href="/#integrations" style={navLink}>Integrations</a>
          </div>
          <div>
            <p style={colHeader}>ALYGNR for</p>
            <Link to="/founders" style={navLink}>Founder-led teams</Link>
            <Link to="/scaling-teams" style={navLink}>Scaling GTM Teams</Link>
            <Link to="/enterprise" style={navLink}>Enterprise GTM</Link>
            <Link to="/agencies" style={navLink}>Agencies</Link>
          </div>
          <div>
            <p style={colHeader}>Company</p>
            <a href="#about" style={navLink}>About</a>
            <a href="#contact" style={navLink}>Contact</a>
          </div>
          <div>
            <p style={colHeader}>Legal</p>
            <Link to="/privacy" style={navLink}>Privacy</Link>
            <Link to="/terms" style={navLink}>Terms</Link>
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

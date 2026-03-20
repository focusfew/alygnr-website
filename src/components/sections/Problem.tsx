import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Problem() {
  const { ref: sectionRef, reveal } = useScrollReveal();

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div className="section-container" style={container}>
        {/* 1 — eyebrow */}
        <div className="eyebrow eyebrow-light" style={{ ...reveal(0), justifyContent: 'center' }}>
          THE COST OF FRAGMENTED GTM
        </div>

        {/* 2 — headline */}
        <h2 style={{ ...headlineStyle, ...reveal(1) }} className="problem-headline">
          Fast execution.
          <br />
          Wrong direction.
        </h2>

        {/* 3 — body */}
        <div style={{ ...bodyWrap, ...reveal(2) }}>
          <p style={bodyText}>
            Strategy gets set in a planning meeting. By the time campaigns
            ship, three teams have reinterpreted it differently.
          </p>
          <p style={bodyText}>
            Messaging drifts. Channels work in isolation. Performance data
            lives in five tools with no connection back to intent.
          </p>
          <p style={closingText}>
            You move fast. But not together.
          </p>
        </div>
      </div>

      <style>{`
        .problem-headline { font-size: clamp(36px, 4.5vw, 52px); }
      `}</style>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--cream)',
  padding: '48px 0 16px',
};

const container: React.CSSProperties = {
  textAlign: 'center',
};

const headlineStyle: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  color: 'var(--black)',
  margin: '0 0 var(--heading-margin-bottom)',
};

const bodyWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 600,
  margin: '0 auto',
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 18,
  color: 'var(--text-secondary-light)',
  lineHeight: 1.75,
  margin: 0,
};

const closingText: React.CSSProperties = {
  fontFamily: "var(--font-tight)",
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--text-primary-light)',
  lineHeight: 1.7,
  margin: 0,
};

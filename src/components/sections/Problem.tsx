import { useEffect, useRef, useState } from 'react';

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (i: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
  });

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
  fontFamily: "'Inter', sans-serif",
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: '#0A0A0A',
  margin: '0 0 32px',
};

const bodyWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  maxWidth: 600,
  margin: '0 auto',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 18,
  color: '#64748B',
  lineHeight: 1.75,
  margin: 0,
};

const closingText: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 22,
  fontWeight: 600,
  color: '#0F0F0E',
  lineHeight: 1.7,
  margin: 0,
};

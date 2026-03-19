import { useEffect, useRef, useState } from 'react';

const quotes = [
  {
    text: 'We had a product, a good set of customers, and a market to go after. What we were missing was a shared foundation for how to talk about it \u2013 one that the whole team could execute from. Once we had that, the briefing was faster, messaging started getting aligned, we stopped re-examining every quarter, and we had a much more predictable base for GTM.',
    name: 'Tarun Malaviya',
    title: 'Founder & Chief Executive Officer',
    company: 'Mithi',
  },
  {
    text: 'The frameworks changed how we approached buyer conversations. Better strategy upstream and a structured way to think about who we were talking to made everything downstream easier — including the pipeline.',
    name: 'Anubhav Dwivedi',
    title: 'Founder & CEO',
    company: 'The Machine Intelligence Company',
  },
] as const;

export default function Trust() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reveal = (i: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.5s ease-out ${i * 150}ms, transform 0.5s ease-out ${i * 150}ms`,
  });

  return (
    <section ref={ref} style={section}>
      <div style={grid} className="trust-grid">
        {quotes.map((q, i) => (
          <div key={q.name} style={{ ...card, ...reveal(i) }}>
            {/* decorative quote mark */}
            <span style={decorQuote}>&ldquo;</span>

            <p style={quoteText}>&ldquo;{q.text}&rdquo;</p>

            <div style={divider} />

            <div>
              <p style={attrName}>{q.name}</p>
              <p style={attrTitle}>{q.title}, {q.company}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .trust-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--black)',
  padding: '40px 24px',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gap: 24,
  maxWidth: 1000,
  margin: '0 auto',
};

const card: React.CSSProperties = {
  background: 'var(--dark)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 12,
  padding: 48,
  position: 'relative',
  overflow: 'hidden',
};

const decorQuote: React.CSSProperties = {
  position: 'absolute',
  top: 16,
  left: 24,
  fontSize: 96,
  lineHeight: 1,
  color: 'var(--orange)',
  opacity: 0.15,
  fontFamily: 'Georgia, serif',
  pointerEvents: 'none',
  userSelect: 'none',
};

const quoteText: React.CSSProperties = {
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 18,
  fontStyle: 'italic',
  color: 'var(--text-primary-dark)',
  lineHeight: 1.6,
  margin: 0,
  position: 'relative',
};

const divider: React.CSSProperties = {
  height: 1,
  background: 'var(--border-dark)',
  margin: '32px 0',
};

const attrName: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: '#fff',
  margin: '0 0 4px',
};

const attrTitle: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--text-secondary-dark)',
  margin: 0,
};

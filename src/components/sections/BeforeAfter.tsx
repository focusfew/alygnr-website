import { useEffect, useRef, useState } from 'react';

const rows: { left: string; right: string }[] = [
  {
    left: 'Strategy set in planning. Gone by execution.',
    right: 'Every campaign traces back to a defined strategic intent.',
  },
  {
    left: 'Messaging rewritten by whoever briefs the campaign.',
    right: 'One messaging core. Inherited by every play and asset.',
  },
  {
    left: 'Each campaign starts from scratch.',
    right: 'Plays compound. Each cycle starts from what worked before.',
  },
  {
    left: 'Performance data scattered across tools.',
    right: 'Insights mapped back to plays, messaging, and intent.',
  },
  {
    left: 'Alignment is a meeting.',
    right: 'Alignment is a score.',
  },
];

export default function BeforeAfter() {
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
    transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
  });

  return (
    <section ref={ref} style={section}>
      <div style={container}>
        {/* eyebrow */}
        <div className="eyebrow eyebrow-dark" style={{ ...reveal(0), justifyContent: 'center' }}>
          THE DIFFERENCE
        </div>

        {/* headline */}
        <h2 style={{ ...headline, ...reveal(1) }} className="ba-headline">
          What changes when GTM runs as a system.
        </h2>

        {/* table */}
        <div style={{ ...tableWrap, ...reveal(2) }} className="ba-table">
          {/* header row */}
          <div style={headerRow} className="ba-row">
            <div style={headerCellLeft}>WITHOUT ALYGNR</div>
            <div style={headerCellRight}>WITH ALYGNR</div>
          </div>

          {/* data rows */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            const rowBg = 'var(--black)';
            const cellPad = '14px 28px';
            const rightSize = 16;
            const rightWeight = isLast ? 600 : 400;
            const leftSize = 16;
            const leftWeight = isLast ? 600 : 400;

            return (
              <div
                key={i}
                className="ba-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  background: rowBg,
                }}
              >
                {/* left cell */}
                <div
                  style={{
                    padding: cellPad,
                    fontSize: leftSize,
                    fontWeight: leftWeight,
                    color: 'var(--text-secondary-dark)',
                    lineHeight: 1.6,
                    borderRight: '1px solid rgba(255,255,255,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {row.left}
                </div>

                {/* right cell */}
                <div
                  style={{
                    padding: cellPad,
                    fontSize: rightSize,
                    fontWeight: rightWeight,
                    color: 'var(--white)',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'start',
                    gap: 10,
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span style={orangeDot} />
                  <span>{row.right}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ba-headline { font-size: clamp(36px, 4.5vw, 52px); }
        .ba-row { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .ba-headline { font-size: 36px !important; }
          .ba-row { grid-template-columns: 1fr !important; }
          .ba-row > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--black)',
  padding: 'var(--section-padding-standard)',
};

const container: React.CSSProperties = {
  maxWidth: 880,
  margin: '0 auto',
  textAlign: 'center',
};

const headline: React.CSSProperties = {
  fontFamily: "var(--font-base)",
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'var(--white)',
  margin: '0 0 40px',
};

const tableWrap: React.CSSProperties = {
  borderRadius: 12,
  overflow: 'hidden',
  textAlign: 'left',
  border: '1px solid rgba(255,255,255,0.06)',
};

const headerRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  background: 'var(--dark)',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
};

const headerCellBase: React.CSSProperties = {
  padding: '16px 28px',
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 600,
};

const headerCellLeft: React.CSSProperties = {
  ...headerCellBase,
  color: 'var(--text-muted-dark)',
  borderRight: '1px solid rgba(255,255,255,0.07)',
};

const headerCellRight: React.CSSProperties = {
  ...headerCellBase,
  color: 'var(--orange)',
};

const orangeDot: React.CSSProperties = {
  display: 'inline-block',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: 'var(--orange)',
  flexShrink: 0,
  marginTop: 9,
};

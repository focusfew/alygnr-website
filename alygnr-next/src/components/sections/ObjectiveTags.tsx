'use client';

import { useRef, useState } from 'react';

type Objective = { name: string; description: string };

const objectives: Objective[] = [
  { name: 'Product Launch', description: 'Go to market with a campaign as strong as your product.' },
  { name: 'Market Entry', description: 'Launch in a new market with a campaign built for it.' },
  { name: 'Pipeline Generation', description: 'Run campaigns that consistently generate qualified pipeline.' },
  { name: 'Retention and Adoption', description: "Keep customers engaged long after they've signed." },
  { name: 'Expansion and Upsell', description: 'Grow revenue from the customers you already have.' },
  { name: 'Competitive Displacement', description: "Win more of the market that's already looking for a better option." },
  { name: 'Category Creation', description: 'Define the category before anyone else does.' },
  { name: 'Feature Launch', description: 'Give every feature launch the full campaign it deserves.' },
];

const rows = [objectives.slice(0, 4), objectives.slice(4, 8)];

export default function ObjectiveTags() {
  const [active, setActive] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActive(name);
  };

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setActive(null), 100);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
          {row.map((obj) => {
            const isActive = active === obj.name;
            return (
              <div
                key={obj.name}
                className="relative"
                onMouseEnter={() => show(obj.name)}
                onMouseLeave={scheduleHide}
              >
                <button
                  type="button"
                  className={`cursor-pointer rounded-[8px] border px-5 py-[10px] text-[15px] transition-all duration-150 ${
                    isActive
                      ? 'border-[#EC6427]/30 bg-[#EC6427]/[0.08] text-white'
                      : 'border-white/[0.08] bg-[#23272F] text-[#B4B4B4]'
                  }`}
                >
                  + {obj.name}
                </button>

                {/* Hover card */}
                <div
                  className={`absolute left-1/2 top-full z-20 -translate-x-1/2 pt-2 transition-all duration-150 ${
                    isActive ? '' : 'pointer-events-none'
                  }`}
                >
                  <div
                    className={`w-max min-w-[280px] max-w-[360px] rounded-[12px] border border-white/[0.12] bg-[#23272F] px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-150 ${
                      isActive
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-1 opacity-0'
                    }`}
                  >
                    <p className="mb-2 text-[15px] font-bold text-white">{obj.name}</p>
                    <p className="text-[15px] font-normal text-[#B4B4B4]">{obj.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

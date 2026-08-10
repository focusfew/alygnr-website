'use client';

import { useEffect, useRef, useState } from 'react';

type Objective = { name: string; desc: string };

const objectives: Objective[] = [
  { name: 'Product Launch', desc: 'Go to market with a campaign as strong as your product.' },
  { name: 'Market Entry', desc: 'Launch in a new market with a campaign built for it.' },
  { name: 'Pipeline Generation', desc: 'Run campaigns that consistently generate qualified pipeline.' },
  { name: 'Retention and Adoption', desc: "Keep customers engaged long after they've signed." },
  { name: 'Expansion and Upsell', desc: 'Grow revenue from the customers you already have.' },
  { name: 'Competitive Displacement', desc: "Win more of the market that's already looking for a better option." },
  { name: 'Category Creation', desc: 'Define the category before anyone else does.' },
  { name: 'Feature Launch', desc: 'Give every feature launch the full campaign it deserves.' },
];

const rows = [objectives.slice(0, 4), objectives.slice(4, 8)];

export default function ObjectiveTags() {
  const [active, setActive] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

  const show = (name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActive(name);
  };

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setActive(null), 100);
  };

  const toggle = (name: string) => {
    setActive((current) => (current === name ? null : name));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-start justify-center gap-3">
          {row.map((obj) => {
            const isActive = active === obj.name;
            return (
              <div
                key={obj.name}
                onMouseEnter={isTouch ? undefined : () => show(obj.name)}
                onMouseLeave={isTouch ? undefined : scheduleHide}
                onClick={isTouch ? () => toggle(obj.name) : undefined}
                className={`cursor-pointer bg-[#23272F] transition-all duration-200 ${
                  isActive
                    ? 'min-w-[280px] whitespace-normal rounded-[12px] border border-[#EC6427]/35 px-5 py-4 text-center'
                    : 'whitespace-nowrap rounded-[8px] border border-white/[0.08] px-5 py-[10px] text-[15px] text-[#B4B4B4]'
                }`}
              >
                <div className={`flex items-center ${isActive ? 'justify-center' : ''}`}>
                  <span
                    className={`mr-2 inline-block transition-transform duration-200 ${
                      isActive ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                  <span className={isActive ? 'text-[15px] font-bold text-white' : 'text-[15px]'}>
                    {obj.name}
                  </span>
                </div>
                {isActive && (
                  <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#B4B4B4]">
                    {obj.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

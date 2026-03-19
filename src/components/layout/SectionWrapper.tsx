import type { ReactNode } from 'react';

type BgColor = 'black' | 'dark' | 'dark-mid' | 'cream' | 'cream-deep';

interface SectionWrapperProps {
  bg: BgColor;
  padding?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  bg,
  padding = '112px 0',
  children,
}: SectionWrapperProps) {
  return (
    <section
      style={{
        backgroundColor: `var(--${bg})`,
        padding,
      }}
    >
      {children}
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — ALYGNR',
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#13171D] p-6 text-center">
      {/* Decorative 404 (stays in flow, not absolutely positioned) */}
      <p className="pointer-events-none relative select-none text-[120px] font-bold leading-none tracking-[-0.05em] text-white/[0.04] md:text-[180px]">
        404
      </p>

      {/* Heading — overlaps the 404 via negative margin */}
      <h1 className="-mt-[52px] text-[24px] font-bold tracking-[-0.025em] text-white md:-mt-[80px] md:text-[32px]">
        This page doesn&apos;t exist.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-[16px] leading-[1.6] text-[#B4B4B4]">
        But your next campaign brief does.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-10 inline-flex rounded-[8px] border-[1.5px] border-white/30 bg-transparent px-7 py-3 text-[14px] font-medium text-white transition-colors duration-150 hover:border-[#EC6427] hover:text-[#EC6427]"
      >
        Back to ALYGNR
      </Link>
    </section>
  );
}

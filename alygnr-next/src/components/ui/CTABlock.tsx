import Link from 'next/link';

const APP_URL = 'https://app.alygnr.ai';

type CTABlockProps = {
  variant: 'dark' | 'light';
  heading: string;
  subheading?: string;
};

export default function CTABlock({ variant, heading, subheading }: CTABlockProps) {
  if (variant === 'dark') {
    return (
      <section className="bg-[#13171D] px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <h2 className="max-w-[720px] text-3xl font-bold text-white md:text-4xl">{heading}</h2>
          {subheading && (
            <p className="mt-4 max-w-[560px] text-[16px] text-[#B4B4B4]">{subheading}</p>
          )}
          <div className="mt-8">
            <Link
              href="/product"
              className="inline-flex rounded-[8px] border-[1.5px] border-white px-6 py-4 text-[15px] text-white transition-colors duration-150 hover:border-[#EC6427] hover:text-[#EC6427]"
            >
              Explore ALYGNR
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[710px] rounded-[24px] bg-white px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto flex flex-col items-center text-center">
            <h2 className="max-w-[720px] text-3xl font-bold text-[#13171D] md:text-4xl">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 max-w-[560px] text-[16px] text-[#13171D]/70">{subheading}</p>
            )}
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#EC6427] px-7 py-3 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#d4551f]"
              >
                Try ALYGNR
              </a>
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-[8px] border-[1.5px] border-[#13171D]/30 bg-transparent px-7 py-3 text-[15px] font-medium text-[#13171D] transition-colors duration-150 hover:border-[#13171D]"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CTAButtonProps {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({ href, label, variant, className = '' }: CTAButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        className={`cta-primary ${className}`.trim()}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`btn-secondary ${className}`.trim()}
      style={{ height: 52, color: 'var(--white)' }}
    >
      {label}
    </a>
  );
}

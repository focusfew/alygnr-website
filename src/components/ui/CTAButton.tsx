interface CTAButtonProps {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function CTAButton({ href, label, variant, className = '', onClick }: CTAButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        className={`cta-primary ${className}`.trim()}
        onClick={onClick}
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
      onClick={onClick}
    >
      {label}
    </a>
  );
}

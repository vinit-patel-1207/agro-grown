import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  // Deep forest bg + white text = WCAG-safe (~9:1). Lime reserved for accents.
  primary:
    'bg-forest text-white shadow-soft hover:bg-forest-dark hover:shadow-lift focus-visible:outline-forest',
  secondary:
    'bg-lime text-forest-dark shadow-soft hover:bg-lime-dark focus-visible:outline-forest',
  outline:
    'border border-moss/40 text-forest hover:border-forest focus-visible:outline-forest',
  ghost: 'text-forest hover:bg-mist focus-visible:outline-forest',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<'button'>, keyof CommonProps> & { to?: undefined; href?: undefined };
type ButtonAsLink = CommonProps & { to: string } & Omit<
    ComponentProps<typeof Link>,
    'to' | keyof CommonProps
  >;
type ButtonAsAnchor = CommonProps & { href: string } & Omit<
    ComponentProps<'a'>,
    'href' | keyof CommonProps
  >;

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('to' in props && props.to !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

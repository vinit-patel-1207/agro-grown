import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import Container from './Container';
import Reveal from './Reveal';

type Tone = 'cream' | 'white' | 'mist' | 'forest';

const toneClass: Record<Tone, string> = {
  cream: 'bg-cream',
  white: 'bg-white',
  mist: 'bg-mist',
  forest: 'bg-forest text-white',
};

export function Section({
  children,
  tone = 'cream',
  id,
  className,
  container = true,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  container?: boolean;
}) {
  return (
    <section id={id} className={cn('py-8 sm:py-12 lg:py-16', toneClass[tone], className)}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
            invert ? 'text-lime' : 'text-moss'
          )}
        >
          <span className={cn('h-px w-6', invert ? 'bg-lime' : 'bg-moss')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 text-3xl sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]',
          invert && 'text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', invert ? 'text-white/75' : 'text-ink-soft')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

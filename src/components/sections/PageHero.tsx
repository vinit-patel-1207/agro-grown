import type { ReactNode } from 'react';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import { LeafMark } from '../ui/Decor';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-forest-dark via-forest to-moss-dark pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="leaf-texture absolute inset-0 opacity-40" aria-hidden="true" />
      <LeafMark className="pointer-events-none absolute -right-16 top-10 h-80 w-80 text-lime/10" />
      <LeafMark className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 text-white/5" />
      <Container className="relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            <span className="h-px w-6 bg-lime" />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

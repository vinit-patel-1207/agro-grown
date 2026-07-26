import type { Milestone } from '../../data/content';
import { RevealItem, RevealGroup } from '../ui/Reveal';
import { cn } from '../../lib/cn';

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <RevealGroup className="relative mx-auto max-w-3xl" stagger={0.12}>
      {/* Central spine */}
      <span
        className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-moss/25 sm:left-1/2"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {items.map((m, i) => {
          const right = i % 2 === 1;
          return (
            <RevealItem key={m.title} direction={right ? 'left' : 'right'}>
              <li className="relative pl-12 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0">
                {/* Node */}
                <span
                  className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-lime ring-4 ring-cream sm:left-1/2"
                  aria-hidden="true"
                />
                <div
                  className={cn(
                    'sm:col-span-1',
                    right ? 'sm:col-start-2 sm:pl-10' : 'sm:pr-10 sm:text-right'
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
                    {m.year}
                  </span>
                  <h3 className="mt-1.5 text-xl">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.description}</p>
                </div>
              </li>
            </RevealItem>
          );
        })}
      </ol>
    </RevealGroup>
  );
}

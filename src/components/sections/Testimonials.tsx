import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/content';
import { cn } from '../../lib/cn';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count]
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => window.clearInterval(id);
  }, [count, reduce]);

  const t = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative min-h-[16rem] overflow-hidden rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-12">
        <Quote className="absolute right-8 top-8 h-12 w-12 text-mist" aria-hidden="true" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xl leading-relaxed text-forest sm:text-2xl">
              “{t.quote}”
            </p>
            <footer className="mt-6">
              <div className="font-semibold text-ink">{t.name}</div>
              <div className="text-sm text-ink-soft">{t.role}</div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-forest shadow-soft ring-1 ring-black/5 transition-colors hover:bg-mist"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                i === index ? 'w-6 bg-forest' : 'w-2.5 bg-moss/30 hover:bg-moss/60'
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-forest shadow-soft ring-1 ring-black/5 transition-colors hover:bg-mist"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { stats } from '../../data/content';
import Container from '../ui/Container';
import { RevealGroup, RevealItem } from '../ui/Reveal';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-forest py-14 text-white" aria-label="Agro Grown by the numbers">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-lime sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

// Curated product shots from /public/products for the hero.
const slides = [
  { src: '/products/Multani-mitti.png', alt: 'Multani Mitti (Fuller’s Earth) herbal powder' },
  { src: '/products/Amla-powder.png', alt: 'Amla (Indian Gooseberry) powder' },
  { src: '/products/Ashwagandha-powder.png', alt: 'Ashwagandha root powder' },
  { src: '/products/Aloe-vara-powder.png', alt: 'Aloe Vera powder' },
  { src: '/products/Beet-root-powder.png', alt: 'Spray-dried beetroot powder' },
  { src: '/products/Carrot-powder.png', alt: 'Spray-dried carrot powder' },
];

export default function HeroCarousel({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return; // no auto-advance when reduced motion is requested
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 3800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-4xl shadow-lift ring-1 ring-white/15',
        className
      )}
    >
      <div className="relative aspect-square w-full">
        <AnimatePresence>
          <motion.img
            key={i}
            src={slides[i].src}
            alt={slides[i].alt}
            width={720}
            height={720}
            fetchPriority="high"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduce ? 0 : 0.8, ease: 'easeInOut' },
              scale: { duration: reduce ? 0 : 4.2, ease: 'easeOut' }, // slow zoom-out across the slide
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show product image ${n + 1} of ${slides.length}`}
            aria-current={n === i}
            className={cn(
              'h-2 rounded-full transition-all',
              n === i ? 'w-6 bg-lime' : 'w-2 bg-white/50 hover:bg-white/80'
            )}
          />
        ))}
      </div>
    </div>
  );
}

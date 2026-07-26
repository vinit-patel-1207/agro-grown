import { type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade';

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
  scale: { scale: 0.94 },
  fade: {},
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  amount?: number;
}

/**
 * Scroll-reveal wrapper. Uses transform + opacity only (GPU-friendly),
 * animates once on enter, and fully respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — children reveal in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

const itemOffset: Record<Direction, { x?: number; y?: number; scale?: number }> = offset;

/** Item to use inside RevealGroup. */
export function RevealItem({
  children,
  direction = 'up',
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : itemOffset[direction];
  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

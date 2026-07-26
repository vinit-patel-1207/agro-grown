import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10', className)}>{children}</div>;
}

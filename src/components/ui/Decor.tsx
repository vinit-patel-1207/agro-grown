import { cn } from '../../lib/cn';

/** Decorative sprout mark echoing the logo — brand motif for backgrounds. */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <path
        d="M50 88C50 60 50 46 50 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M50 42C50 24 62 10 84 8 84 30 72 44 50 46"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M50 52C50 38 41 27 24 26 24 43 33 53 50 55"
        fill="currentColor"
        opacity="0.65"
      />
      <path
        d="M50 60C50 48 60 39 76 39 76 53 66 62 50 63"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M50 88c-6-6-14-8-22-7m22 7c6-6 14-8 22-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/** Official WhatsApp glyph (brand icon, single path). */
export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.454h.005c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.483-8.46" />
    </svg>
  );
}

/** Soft organic blob using brand greens — purely decorative background accent. */
export function Blob({
  className,
  tone = 'mist',
}: {
  className?: string;
  tone?: 'mist' | 'lime' | 'moss' | 'forest';
}) {
  const fill: Record<string, string> = {
    mist: 'text-mist',
    lime: 'text-lime/25',
    moss: 'text-moss/20',
    forest: 'text-forest/10',
  };
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn('pointer-events-none absolute', fill[tone], className)}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M42.7,-64.3C56.9,-56.6,70.9,-46.7,76.8,-33.4C82.7,-20.1,80.5,-3.4,75.3,11.3C70.1,26,61.9,38.7,50.9,49.5C39.9,60.3,26.1,69.2,10.4,73.9C-5.3,78.6,-22.9,79.1,-37.8,72.4C-52.7,65.7,-64.9,51.8,-71.7,36C-78.5,20.2,-79.9,2.5,-75.8,-13.3C-71.7,-29.1,-62.1,-43,-49.4,-51.3C-36.7,-59.6,-20.9,-62.3,-4.6,-56.1C11.7,-49.9,23.4,-34.8,42.7,-64.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

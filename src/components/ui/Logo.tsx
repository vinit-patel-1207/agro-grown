import { Link } from 'react-router-dom';
import { company } from '../../data/site';
import { cn } from '../../lib/cn';

/**
 * Brand lockup: the real Agro Grown logo in a clean white chip (so it reads on
 * any background) paired with the wordmark. `tone` switches the wordmark colour
 * for use over dark/transparent heroes.
 */
export default function Logo({
  tone = 'dark',
  className,
}: {
  tone?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span className="grid h-16 w-16 place-items-center mt-2 mb-1">
        {/* Pre-cropped leaf mark (tight bbox, transparent). White variant for
            dark heroes (tone=light), green for light backgrounds. */}
        <img
          src={tone === 'light' ? '/logo-white.png' : '/logo.png'}
          alt=""
          className="h-14 w-14 object-contain"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

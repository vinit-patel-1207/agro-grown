import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On route change: jump to top and move focus to <main> so keyboard and
 * screen-reader users land on the new page content (WCAG focus-on-route-change).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Deep-link to an in-page anchor (e.g. /products#skin-care).
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Defer so the lazy page has mounted before we scroll to it.
        const id = window.setTimeout(
          () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          80
        );
        return () => window.clearTimeout(id);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const main = document.getElementById('main');
    // Defer so focus lands after the new page paints.
    const id = window.setTimeout(() => main?.focus({ preventScroll: true }), 40);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);

  return null;
}

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav } from '../../data/site';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { cn } from '../../lib/cn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  // Blur-on-scroll
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Escape closes overlay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const solid = scrolled || mobileOpen;
  const tone: 'light' | 'dark' = solid ? 'dark' : 'light';

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'border-b border-black/5 bg-cream/85 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo tone={tone} />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => navLinkClass(isActive, tone)}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <Underline active={isActive} tone={tone} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant={solid ? 'primary' : 'secondary'} size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className={cn(
            'grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden',
            solid ? 'text-forest hover:bg-mist' : 'text-white hover:bg-white/10'
          )}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
    </header>

      {/* Mobile menu — full-screen scrim + right drawer.
          Kept OUTSIDE <header> so the scrim escapes the header stacking
          context and dims the whole screen, navbar included. */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden">
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-90 bg-black/70"
            />
            <motion.div
              initial={{ x: reduce ? 0 : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-100 flex h-dvh w-[min(20rem,85vw)] flex-col bg-cream shadow-lift"
            >
              <div className="flex h-18 shrink-0 items-center justify-end px-5">
                {/* <Logo tone="dark" compact /> */}
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full text-forest hover:bg-mist"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 pb-8">
                <nav aria-label="Mobile" className="flex flex-col">
                  {nav.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'border-b border-black/5 py-4 text-lg font-semibold',
                          isActive ? 'text-forest' : 'text-ink'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <Button to="/contact" className="mt-6 w-full" size="lg">
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function navLinkClass(isActive: boolean, tone: 'light' | 'dark') {
  return cn(
    'group relative px-3.5 py-2 text-sm font-semibold transition-colors',
    tone === 'dark'
      ? isActive
        ? 'text-forest'
        : 'text-ink hover:text-forest'
      : isActive
        ? 'text-white'
        : 'text-white/85 hover:text-white'
  );
}

function Underline({ active, tone }: { active: boolean; tone: 'light' | 'dark' }) {
  return (
    <span
      className={cn(
        'absolute inset-x-3.5 bottom-1 h-0.5 origin-left rounded-full transition-transform duration-300',
        tone === 'dark' ? 'bg-forest' : 'bg-lime',
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      )}
    />
  );
}

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { company, fullAddress, nav, socials, whatsappLink } from '../../data/site';
import { categories } from '../../data/products';
import Container from '../ui/Container';
import { LeafMark } from '../ui/Decor';

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
};

/** WhatsApp brand glyph (lucide dropped brand icons). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <LeafMark className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-lime/10" />

      <Container className="relative py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src="/logo-white.png"
              alt=""
              className="h-24 w-24 object-contain"
              aria-hidden="true"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A premium herbal ingredient manufacturer and trusted contract-manufacturing partner —
              botanical purity, scientific processing and export-grade quality.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full text-forest-dark bg-white ring-1 ring-white/15 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : s.label}
                  </a>
                );
              })}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full text-forest ring-1 ring-white/15 transition-colors bg-white hover:bg-white/20 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/70 transition-colors hover:text-lime">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Products</FooterHeading>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/products#${c.slug}`}
                    className="text-white/70 transition-colors hover:text-lime"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <span>{fullAddress}</span>
              </li>
              <li>
                <a href={company.phoneHref} className="flex gap-3 hover:text-lime">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="flex gap-3 hover:text-lime">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>GSTIN: {company.gstin}</p>
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{children}</h3>
  );
}

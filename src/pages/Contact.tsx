import { MapPin, Phone, Mail, Clock, MessageCircle, Globe2, Package } from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { Section, SectionHeader } from '../components/ui/Section';
import ContactForm from '../components/forms/ContactForm';
import { company, fullAddress, whatsappLink, SITE_URL } from '../data/site';
import { cn } from '../lib/cn';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  image: `${SITE_URL}/logo.jpg`,
  url: SITE_URL,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Fr 09:30-18:30, Sa 09:30-14:00',
};

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Agro Grown for herbal ingredient enquiries, bulk orders, export and private-label manufacturing. Call, email or WhatsApp our Ahmedabad team."
        path="/contact"
        jsonLd={localBusinessJsonLd}
      />

      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let’s talk about your{' '}
            <span className="italic text-lime">herbal product</span>
          </>
        }
        subtitle="Samples, specifications, bulk pricing or a private-label project — tell us what you need and our team will respond within one business day."
      />

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl">Reach us directly</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Prefer to talk? Use any channel below — we’re happy to help with formulation,
                sampling and export questions.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <InfoRow icon={MapPin} label="Visit / ship to">
                {fullAddress}
              </InfoRow>
              <InfoRow icon={Phone} label="Call us" href={company.phoneHref}>
                {company.phone}
              </InfoRow>
              <InfoRow icon={Mail} label="Email us" href={company.emailHref}>
                {company.email}
              </InfoRow>
              <InfoRow icon={Clock} label="Business hours">
                <ul className="space-y-0.5">
                  {company.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-ink-soft">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
            </div>

            <div className="mt-6 rounded-2xl bg-forest p-6 text-white shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime text-forest-dark">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-white/70">Fastest way to reach us</div>
                </div>
              </div>
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-4 w-full"
              >
                Message us now
                <MessageCircle className="h-4 w-4" />
              </Button>
              <p className="mt-3 text-center text-xs text-white/50">GSTIN: {company.gstin}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <div className="mb-5">
                <h2 className="text-2xl">Send an enquiry</h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Choose your enquiry type — general, bulk order, export or private label — and the
                  form adapts to what we need.
                </p>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Export + bulk highlight */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <Highlight
            icon={Globe2}
            title="Export enquiries"
            body="Shipping outside India? We prepare export documentation and understand the regulatory requirements of global markets. Select “Export enquiry” in the form and include your destination country and volume."
          />
          <Highlight
            icon={Package}
            title="Bulk orders"
            body="Need ingredients at scale — or a repeat supply contract? Choose “Bulk order”, tell us your estimated monthly volume and format, and we’ll return pricing and lead times."
          />
        </div>
      </Section>

      {/* Map */}
      <section aria-label="Our location on the map" className="bg-cream pb-16">
        <Container>
          <SectionHeader
            eyebrow="Find us"
            title="Our manufacturing base in Ahmedabad"
          />
          <div className="mt-10 overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/5">
            <iframe
              title={`Map showing ${company.name} location in Kathwada, Ahmedabad`}
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-90 w-full border-0 sm:h-110"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const body = <div className="mt-0.5 text-sm text-ink">{children}</div>;
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-forest">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wide text-moss">{label}</div>
        {href ? (
          <a href={href} className="mt-0.5 block text-sm font-medium text-forest hover:text-moss">
            {children}
          </a>
        ) : (
          body
        )}
      </div>
    </div>
  );
}

function Highlight({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Globe2;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <Reveal className="h-full">
      <div className={cn('flex h-full gap-4 rounded-3xl bg-mist p-8')}>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-white">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Leaf,
  Sparkles,
  FlaskConical,
} from 'lucide-react';
import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { Section, SectionHeader } from '../components/ui/Section';
import { LeafMark, Blob } from '../components/ui/Decor';
import { CategoryCard, ProductCard, FeatureCard } from '../components/sections/Cards';
import HeroCarousel from '../components/sections/HeroCarousel';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import FaqAccordion from '../components/sections/FaqAccordion';
import CtaSection from '../components/sections/CtaSection';
import { categories, featuredProducts } from '../data/products';
import { whyChoose, applications, processSteps, faqs } from '../data/content';
import { whatsappLink, organizationJsonLd } from '../data/site';
import { tintThumb } from '../lib/tints';
import { cn } from '../lib/cn';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Seo
        title="Agro Grown — Premium Herbal Ingredient Manufacturer | Nourished by Nature"
        description="Agro Grown manufactures premium herbal powders, botanical extracts, essential & cold-pressed oils, Ayurvedic formulations and superfoods — with contract manufacturing, private-label and custom packaging for global brands."
        path="/"
        jsonLd={[organizationJsonLd, faqJsonLd]}
      />

      <Hero />
      <CompanyIntro />
      <ProductGallery />
      <FeaturedCategories />
      <WhyAgroGrown />
      <Applications />
      <Process />
      <Stats />
      <TestimonialsSection />
      <CtaSection />
      <Faq />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-forest-dark via-forest to-moss-dark pb-8 pt-28 text-white sm:pt-28 lg:pb-12">
      <div className="leaf-texture absolute inset-0 opacity-40" aria-hidden="true" />
      <LeafMark className="pointer-events-none absolute -right-24 top-10 h-104 w-104 text-lime/10" />
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-lime ring-1 ring-white/15">
              <Leaf className="h-3.5 w-3.5" />
              Herbal Ingredient Manufacturer
            </span>

            {/* Mobile: carousel sits right under the eyebrow line */}
            <HeroCarousel className="mt-6 w-full max-w-md lg:hidden" />

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Premium herbal ingredients,{' '}
              <span className="italic text-lime">nourished by nature</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              From botanical extracts and cold-pressed oils to Ayurvedic formulations and superfoods —
              Agro Grown is your trusted partner for contract manufacturing, private label and
              export-grade herbal supply.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" variant="secondary" size="lg">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:border-white"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to us
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {['Plant-based & clean-label', 'Export documentation', 'Any volume, small to large'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-lime" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Reveal>

          {/* Hero visual — desktop only; mobile carousel lives under the eyebrow above */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-md lg:order-1 lg:block lg:max-w-md"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────── Company introduction ─────────────────── */
const companyValues = [
  { label: 'Purity', blurb: 'No harsh chemicals', tint: 'forest', icon: Sparkles },
  { label: 'Nature', blurb: 'Plant-based inputs', tint: 'lime', icon: Leaf },
  { label: 'Science', blurb: 'Standardized extracts', tint: 'moss', icon: FlaskConical },
  { label: 'Trust', blurb: 'Export-grade quality', tint: 'forest', icon: ShieldCheck },
] as const;

function CompanyIntro() {
  return (
    <Section tone="cream">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right" className="relative">
          <Blob className="-left-10 -top-10 h-56 w-56" tone="mist" />
          <div className="relative grid grid-cols-2 gap-4">
            {companyValues.map((v, i) => (
              <div
                key={v.label}
                className={cn(
                  'group relative flex aspect-square flex-col justify-between overflow-hidden rounded-3xl p-5 text-white shadow-soft ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-lift',
                  tintThumb[v.tint],
                  i % 2 === 1 && 'translate-y-6'
                )}
              >
                {/* depth: corner glow, brand leaf, bottom shade */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                <LeafMark className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 text-white/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div className="relative">
                  <span className="font-display text-xl font-semibold">{v.label}</span>
                  <span className="mt-2 block h-0.5 w-8 rounded-full bg-lime/80 transition-all duration-300 group-hover:w-12" />
                  <p className="mt-1.5 text-xs text-white/75">{v.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div>
          <SectionHeader
            align="left"
            eyebrow="Who we are"
            title="Rooted in nature, refined by science"
            description="Agro Grown began as a herbal-ingredients manufacturing brand, built on a simple belief — the power of nature. Today we serve global brands with plant-based, environment-friendly ingredients across wellness, cosmetics and personal care."
          />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
            <p>
              We use only carefully selected natural and organic inputs — herbs, plant extracts and
              essential oils — chosen for their specific benefits and free from harsh chemicals and
              artificial fragrance. Every ingredient is processed to work in harmony with the body’s
              natural processes.
            </p>
          </div>
          <RevealGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.06}>
            {['Plant-based formulations', 'Standardized extracts', 'Traceable sourcing', 'Global compliance'].map(
              (item) => (
                <RevealItem key={item}>
                  <div className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-soft ring-1 ring-black/5">
                    <Check className="h-4 w-4 shrink-0 text-lime" />
                    {item}
                  </div>
                </RevealItem>
              )
            )}
          </RevealGroup>
          <div className="mt-8">
            <Button to="/about" variant="ghost">
              More about Agro Grown
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────── Featured categories ─────────────────── */
function FeaturedCategories() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="What we make"
        title="A complete herbal ingredient portfolio"
        description="Explore our ingredient families — grouped so you can find the right botanical for your formulation, fast."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {categories.slice(0, 6).map((c) => (
          <RevealItem key={c.slug} className="h-full">
            <CategoryCard category={c} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10 text-center">
        <Button to="/products" variant="primary">
          View all 12 categories
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ─────────────────── Why Agro Grown ─────────────────── */
function WhyAgroGrown() {
  return (
    <Section tone="cream">
      <SectionHeader
        eyebrow="Why Agro Grown"
        title="A partner brands trust"
        description="Three reasons customers choose us — and the quality mindset behind every batch."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
        {whyChoose.map((w) => (
          <RevealItem key={w.title} className="h-full">
            <FeatureCard icon={w.icon} title={w.title} description={w.description} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ─────────────────── Product applications ─────────────────── */
function Applications() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Where they’re used"
        title="Product applications"
        description="Our ingredients power products across the wellness and personal-care spectrum."
      />
      <RevealGroup className="mt-10 flex flex-wrap justify-center gap-3" stagger={0.04}>
        {applications.map((a) => (
          <RevealItem key={a}>
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-forest">
              <Leaf className="h-4 w-4 text-moss" />
              {a}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ─────────────────── Manufacturing process ─────────────────── */
function Process() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="From farm to formula"
        title="Our manufacturing process"
        description="Six controlled stages that turn traceable botanicals into consistent, export-ready ingredients."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {processSteps.map((s, i) => (
          <RevealItem key={s.title} className="h-full">
            <div className="group relative h-full rounded-2xl bg-cream p-6 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="absolute right-5 top-4 font-display text-5xl font-bold text-mist transition-colors group-hover:text-lime/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-forest text-white">
                <s.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="relative mt-4 text-lg">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ─────────────────── Product gallery ─────────────────── */
function ProductGallery() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Featured ingredients"
        title="A taste of the catalogue"
        description="A selection of our most-requested botanicals — every one available across multiple formats."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
        {featuredProducts.map((p) => (
          <RevealItem key={p.slug} className="h-full">
            <ProductCard product={p} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10 text-center">
        <Button to="/products" variant="primary">
          Explore all products
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ─────────────────── Testimonials ─────────────────── */
function TestimonialsSection() {
  return (
    <Section tone="mist">
      <SectionHeader
        eyebrow="In their words"
        title="What our partners say"
      />
      <div className="mt-12">
        <Testimonials />
      </div>
    </Section>
  );
}

/* ─────────────────── FAQ ─────────────────── */
function Faq() {
  return (
    <Section tone="cream">
      <SectionHeader
        eyebrow="Good to know"
        title="Frequently asked questions"
        description="Everything you need before starting an enquiry. Still curious? Our team is a message away."
      />
      <div className="mt-12">
        <FaqAccordion items={faqs} />
      </div>
    </Section>
  );
}

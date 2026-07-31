import { Target, Eye, Factory, ShieldCheck, Warehouse, Globe2, Recycle, Quote } from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { Section, SectionHeader } from '../components/ui/Section';
import { FeatureCard } from '../components/sections/Cards';
import Timeline from '../components/sections/Timeline';
import Stats from '../components/sections/Stats';
import { LeafMark, Blob } from '../components/ui/Decor';
import { whyChoose, timeline, founder } from '../data/content';
import { cn } from '../lib/cn';

const pillars = [
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    description:
      'Full-format production — powders, extracts, capsules, tablets, oils, teas and syrups — engineered for repeatable, specification-led quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Clean sourcing, in-process checks and batch documentation. Ingredients free from harsh chemicals and artificial fragrance, tested against defined specifications.',
  },
  {
    icon: Warehouse,
    title: 'Infrastructure',
    description:
      'A dedicated manufacturing facility in Ahmedabad’s Kathwada industrial estate, built to serve orders from boutique to bulk export scale.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Agro Grown is a premium herbal ingredient manufacturer rooted in nature and refined by science — offering contract manufacturing, private label and export-grade botanical supply worldwide."
        path="/about"
      />

      <PageHero
        eyebrow="About Agro Grown"
        title={
          <>
            Nourished by nature,
            <br />
            <span className="italic text-lime">trusted by the world</span>
          </>
        }
        subtitle="We are a herbal-ingredients manufacturer that grew into a full contract-manufacturing partner — helping brands create plant-based products with purity, science and care."
      />

      {/* Story */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="relative">
            <Blob className="-right-8 -top-8 h-56 w-56" tone="mist" />
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-forest via-forest to-moss-dark p-10 text-white shadow-lift">
              <LeafMark className="absolute -right-8 -top-8 h-48 w-48 text-lime/10" />
              <Quote className="h-10 w-10 text-lime" />
              <p className="relative mt-4 font-display text-2xl leading-relaxed">
                “We believe in the power of nature — and strive to use only the best natural and
                organic ingredients in everything we make.”
              </p>
              <p className="mt-6 text-sm text-white/70">— The Agro Grown philosophy</p>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Our story"
              title="From herbal ingredients to a global partner"
              description="Agro Grown started as a herbal-ingredients manufacturing brand and eventually entered the cosmetic industry to promote plant-based, environment-friendly formulations."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                Our range spans skincare, hair care, body care and baby care — crafted with herbs,
                plant extracts and essential oils that work in harmony with the body’s natural
                processes. Each ingredient is chosen for a specific benefit, whether soothing,
                moisturising, anti-inflammatory or anti-aging.
              </p>
              <p>
                Today we combine that founding respect for nature with modern manufacturing and a
                working understanding of global markets — helping brands of every size bring
                trustworthy herbal products to shelf.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section tone="mist">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-4">
            <figure className="mx-auto max-w-xs lg:mx-0">
              {/* ponytail: Founder.png ships with a studio backdrop, not a cutout — so it
                  gets a rounded frame. Framed, the grey reads as a studio portrait instead
                  of a stray rectangle on the section tone. Swap in a transparent PNG and
                  this wrapper can go. aspect-4/5 reserves the space (no CLS). */}
              <div className="relative">
                {/* Brand-gradient panel, tilted and offset behind the frame, so the
                    portrait's neutral studio grey sits on brand colour. */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -rotate-3 rounded-3xl bg-linear-to-br from-forest via-moss to-lime/70"
                />
                <LeafMark className="absolute -right-5 -top-5 z-10 h-20 w-20 text-lime" />
                <div className="relative overflow-hidden rounded-2xl shadow-lift ring-1 ring-white/40">
                  <img
                    src={founder.photo}
                    alt={`${founder.name}, ${founder.role} of Agro Grown`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/5 w-full object-cover"
                  />
                  {/* Pulls the grey backdrop toward forest so it reads brand-tinted. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest/30 via-transparent to-transparent"
                  />
                </div>
              </div>
              <figcaption className="mt-8 text-center lg:text-left">
                <span className="block font-display text-xl text-forest">{founder.name}</span>
                <span className="mt-1 block text-sm text-ink-soft">{founder.role}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-8">
            <SectionHeader
              align="left"
              eyebrow="Leadership"
              title="A word from our founder"
              description="The people behind the plants — and the standard we hold ourselves to on every batch."
            />
            <figure className="mt-6 border-l-2 border-lime pl-5">
              <blockquote className="font-display text-xl leading-relaxed text-forest">
                “{founder.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-ink-soft">
                — {founder.name}, {founder.role}
              </figcaption>
            </figure>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
              {founder.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="h-full rounded-3xl bg-mist p-8 shadow-soft sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest text-white">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                To make pure, plant-based herbal ingredients accessible to brands worldwide —
                manufactured responsibly, documented thoroughly and delivered at any volume, so our
                partners can create products that genuinely make a difference.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="h-full rounded-3xl bg-forest p-8 text-white shadow-soft sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-lime text-forest-dark">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl text-white">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                To be the world’s most trusted herbal-ingredient manufacturing partner — where
                nature and science meet to set the standard for purity, quality and sustainable
                botanical supply.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Excellence pillars */}
      <Section tone="cream">
        <SectionHeader
          eyebrow="How we operate"
          title="Manufacturing built on three pillars"
          description="Excellence in process, uncompromising quality assurance, and infrastructure that scales with you."
        />
        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.08}>
          {pillars.map((p) => (
            <RevealItem key={p.title} className="h-full">
              <FeatureCard icon={p.icon} title={p.title} description={p.description} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Stats />

      {/* Export + Sustainability */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoBlock
            icon={Globe2}
            tone="forest"
            title="Global export capability"
            body="We understand the regulatory requirements of global markets and prepare the documentation your product needs to travel — from bulk ingredients to fully branded, packaged goods, shipped worldwide."
            points={['Export documentation', 'Regulatory understanding', 'Volume flexibility']}
          />
          <InfoBlock
            icon={Recycle}
            tone="lime"
            title="Sustainability"
            body="Plant-based and environment-friendly by principle — from responsible sourcing to packaging choices — because products that are good for people should be good for the planet too."
            points={['Plant-based inputs', 'Responsible sourcing', 'Eco-conscious packaging']}
          />
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="mist">
        <SectionHeader
          eyebrow="Why choose us"
          title="Reasons brands stay with Agro Grown"
        />
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {whyChoose.map((w) => (
            <RevealItem key={w.title} className="h-full">
              <FeatureCard icon={w.icon} title={w.title} description={w.description} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Timeline */}
      <Section tone="cream">
        <SectionHeader
          eyebrow="Our journey"
          title="Growing, one root at a time"
          description="From a founding belief in nature to a trusted global manufacturing partner."
        />
        <div className="mt-14">
          <Timeline items={timeline} />
        </div>
      </Section>

      {/* Team philosophy */}
      <Section tone="white">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            <span className="h-px w-6 bg-moss" /> Our philosophy
          </span>
          <p className="mt-6 font-display text-2xl leading-relaxed text-forest sm:text-3xl">
            We take pride in our commitment to quality, and aim to partner with brands that want to
            make a difference — treating every ingredient, and every client, with the same care
            nature intended.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  body,
  points,
  tone,
}: {
  icon: typeof Globe2;
  title: string;
  body: string;
  points: string[];
  tone: 'forest' | 'lime';
}) {
  const dark = tone === 'forest';
  return (
    <Reveal className="h-full">
      <div
        className={cn(
          'flex h-full flex-col rounded-3xl p-8 shadow-soft sm:p-10',
          dark ? 'bg-forest text-white' : 'bg-mist'
        )}
      >
        <span
          className={cn(
            'grid h-12 w-12 place-items-center rounded-xl',
            dark ? 'bg-lime text-forest-dark' : 'bg-forest text-white'
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <h2 className={cn('mt-5 text-2xl', dark && 'text-white')}>{title}</h2>
        <p className={cn('mt-3 text-sm leading-relaxed', dark ? 'text-white/75' : 'text-ink-soft')}>
          {body}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {points.map((p) => (
            <li
              key={p}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-semibold',
                dark ? 'bg-white/10 text-white' : 'bg-white text-forest'
              )}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
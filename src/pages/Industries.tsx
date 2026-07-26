import { Link } from 'react-router-dom';
import { ArrowRight, Check, Layers } from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { LeafMark } from '../components/ui/Decor';
import { industries } from '../data/industries';
import { tintThumb } from '../lib/tints';
import { cn } from '../lib/cn';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries"
        description="Agro Grown serves nutraceuticals, pharmaceuticals, Ayurveda, cosmetics, personal care, food & beverage, herbal tea, health supplements, organic foods and export & wholesale with premium herbal ingredients."
        path="/industries"
      />

      <PageHero
        eyebrow="Industries we serve"
        title={
          <>
            Herbal ingredients for{' '}
            <span className="italic text-lime">every application</span>
          </>
        }
        subtitle="From nutraceuticals and pharma to cosmetics, food & beverage and export — we tailor botanicals, formats and documentation to each industry’s needs."
      />
      <Section tone="cream">
        <SectionHeader
          eyebrow="Ten sectors, one partner"
          title="Where our ingredients go to work"
          description="Each industry has its own requirements — actives, formats, documentation and compliance. Here’s how we support them."
        />

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2" stagger={0.06}>
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <RevealItem key={ind.slug} className="h-full">
                <article
                  id={ind.slug}
                  className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:flex-row"
                >
                  {/* Visual rail */}
                  <div
                    className={cn(
                      'relative flex shrink-0 items-center justify-center p-8 sm:w-40',
                      tintThumb[ind.tint]
                    )}
                  >
                    <LeafMark className="absolute -right-4 -top-4 h-28 w-28 text-white/10" />
                    <Icon className="relative h-12 w-12 text-white" strokeWidth={1.4} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ind.summary}</p>

                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-moss">
                        <Layers className="h-3.5 w-3.5" />
                        Applications
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {ind.applications.map((a) => (
                          <span
                            key={a}
                            className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-moss-dark"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {ind.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-ink">
                          <Check className="h-4 w-4 shrink-0 text-lime" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-moss"
                    >
                      Discuss your {ind.name.toLowerCase()} application
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>
    </>
  );
}

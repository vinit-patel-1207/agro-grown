import { useMemo, useState } from 'react';
import { ArrowRight, PackageSearch, Search, X } from 'lucide-react';
import { WhatsappIcon } from '../components/ui/Decor';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { CatalogueCard } from '../components/sections/Cards';
import { categories, products } from '../data/products';
import { catalogue } from '../data/catalogue';
import { SITE_URL, productWhatsappLink } from '../data/site';
import { tintIconWrap } from '../lib/tints';
import { cn } from '../lib/cn';

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agro Grown herbal ingredient catalogue',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: `${SITE_URL}/products#${p.category}`,
  })),
};

export default function Products() {
  const [active, setActive] = useState<string>('all');
  const [query, setQuery] = useState('');
  // Category slugs whose full text list is expanded on mobile (desktop always shows all).
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();

  const visible = useMemo(() => {
    const matchItem = (it: { name: string; botanical?: string }) =>
      !q || `${it.name} ${it.botanical ?? ''}`.toLowerCase().includes(q);

    return categories
      .filter((c) => active === 'all' || c.slug === active)
      .map((category) => {
        const list = (catalogue[category.slug] ?? []).filter(matchItem);
        // Photo-having items fill the 4 image cards first; the rest list as text.
        const imaged = list.filter((it) => it.image);
        const plain = list.filter((it) => !it.image);
        const cards = [...imaged, ...plain].slice(0, 4);
        const cardSet = new Set(cards);
        const rest = list.filter((it) => !cardSet.has(it));
        return { category, list, cards, rest };
      })
      .filter(({ list }) => !q || list.length > 0);
  }, [active, q]);

  return (
    <>
      <Seo
        title="Products"
        description="Browse Agro Grown's herbal ingredient catalogue — powders, extracts, hair & skin care actives, superfoods, teas, essential and cold-pressed oils, spray-dried powders and dietary supplements."
        path="/products"
        jsonLd={productListJsonLd}
      />

      <PageHero
        eyebrow="Our catalogue"
        title={
          <>
            Herbal ingredients,{' '}
            <span className="italic text-lime">organised for you</span>
          </>
        }
        subtitle="Twelve ingredient families spanning powders, extracts, oils, teas and supplements. Explore a category and request samples, specifications or a quote."
      />

      {/* Sticky filter: search + category pills */}
      <div
        className="top-18 z-30 border-b border-black/5 bg-cream/85 py-6 backdrop-blur-xl"
      >
        <Container>
          <div className="flex flex-col gap-3">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-moss" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products or botanical names…"
                aria-label="Search products"
                className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-10 text-sm text-forest outline-none placeholder:text-ink-soft/70 focus:border-forest focus:ring-2 focus:ring-forest/20"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-ink-soft hover:bg-mist hover:text-forest"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[{ slug: 'all', name: 'All' }, ...categories].map((c) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => setActive(c.slug)}
                    aria-pressed={active === c.slug}
                    className={cn(
                      'inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ring-1 transition-colors',
                      active === c.slug
                        ? 'bg-forest text-white ring-forest'
                        : 'bg-white text-forest ring-black/5 hover:bg-forest hover:text-white'
                    )}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      {/* Filtered category sections */}
      {visible.map(({ category, list, cards, rest }, idx) => {
        const Icon = category.icon;
        return (
          <section
            key={category.slug}
            id={category.slug}
            className={cn('scroll-mt-32 py-8 sm:py-12', idx % 2 === 0 ? 'bg-cream' : 'bg-white')}
          >
            <Container>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'grid h-12 w-12 shrink-0 place-items-center rounded-xl',
                        tintIconWrap[category.tint]
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h2 className="text-2xl sm:text-3xl">{category.name}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{category.blurb}</p>
                  {!q && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {category.examples.map((e) => (
                        <span
                          key={e}
                          className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-moss-dark"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <Button to="/contact" variant="outline" size="sm" className="shrink-0">
                  Enquire
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {cards.length > 0 && (
                <RevealGroup
                  className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
                  stagger={0.06}
                >
                  {cards.map((p) => (
                    <RevealItem key={p.name} className="h-full">
                      <CatalogueCard item={p} category={category} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              )}

              {rest.length > 0 && (
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-moss-dark">
                    Full range · {list.length} products
                  </p>
                  <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((p, i) => (
                      <li
                        key={p.name}
                        className={cn(
                          'items-center justify-between gap-3 border-b border-black/5 py-2 last:border-0',
                          // Mobile: hide rows past the first 10 until expanded. Desktop (sm+) always shows all.
                          !expanded.has(category.slug) && i >= 10 ? 'hidden sm:flex' : 'flex'
                        )}
                      >
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-forest">{p.name}</span>
                          {p.botanical && (
                            <span className="text-xs italic text-ink-soft">{p.botanical}</span>
                          )}
                        </span>
                        <a
                          href={productWhatsappLink(p.name, p.botanical)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Enquire about ${p.name} on WhatsApp`}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-white transition-transform hover:scale-110"
                        >
                          <WhatsappIcon className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  {rest.length > 10 && !expanded.has(category.slug) && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((prev) => new Set(prev).add(category.slug))
                      }
                      className="mt-4 w-full rounded-full border border-forest/20 bg-white py-2.5 text-sm font-semibold text-forest hover:bg-forest hover:text-white sm:hidden"
                    >
                      View {rest.length - 10} more
                    </button>
                  )}
                </div>
              )}

              {!q && list.length === 0 && (
                <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-moss/30 bg-white/60 p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <PackageSearch className="h-6 w-6 text-moss" />
                    <p className="text-sm text-ink-soft">
                      More {category.name.toLowerCase()} available on request — tell us what you need
                      and we’ll source or manufacture it.
                    </p>
                  </div>
                  <Button to="/contact" variant="primary" size="sm">
                    Request this range
                  </Button>
                </div>
              )}
            </Container>
          </section>
        );
      })}

      {visible.length === 0 && (
        <section className="py-20">
          <Container>
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
              <PackageSearch className="h-8 w-8 text-moss" />
              <p className="text-ink-soft">
                No products match “<span className="font-semibold text-forest">{query}</span>”.
              </p>
              <Button onClick={() => setQuery('')} variant="outline" size="sm">
                Clear search
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

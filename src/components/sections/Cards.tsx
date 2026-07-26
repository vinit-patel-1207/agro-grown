import { Link } from 'react-router-dom';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import type { Category, Product } from '../../data/products';
import type { CatalogueItem } from '../../data/catalogue';
import { productWhatsappLink } from '../../data/site';
import { tintThumb, tintChip, tintIconWrap } from '../../lib/tints';
import { LeafMark, WhatsappIcon } from '../ui/Decor';
import { cn } from '../../lib/cn';

/* ── Visual thumbnail: real photo when available, else branded gradient tile ── */
function ProductThumb({ product }: { product: Product }) {
  if (product.photo) {
    return (
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.photo}
          alt={`${product.name} — ${product.botanical}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  const Icon = product.icon;
  return (
    <div className={cn('relative aspect-4/3 overflow-hidden', tintThumb[product.tint])}>
      <LeafMark className="absolute -right-6 -top-6 h-40 w-40 text-white/10 transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 grid place-items-center">
        <Icon className="h-14 w-14 text-white/90" strokeWidth={1.4} />
      </div>
      <span className="absolute bottom-3 left-4 font-display text-sm italic text-white/80">
        {product.botanical}
      </span>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <ProductThumb product={product} />
      <div className="flex flex-1 flex-col p-6">
        <span className={cn('w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold', tintChip[product.tint])}>
          {product.categoryName}
        </span>
        <h3 className="mt-3 text-xl">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{product.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.forms.map((f) => (
            <span
              key={f}
              className="rounded-md bg-mist px-2 py-0.5 text-[11px] font-medium text-moss-dark"
            >
              {f}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-moss"
        >
          Explore more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}

/* ── Compact catalogue card: real photo when available, else branded tile ── */
export function CatalogueCard({
  item,
  category,
}: {
  item: CatalogueItem;
  category: Category;
}) {
  const Icon = category.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {item.image ? (
        <div className="relative aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.botanical ? `${item.name} — ${item.botanical}` : item.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={cn('relative aspect-square overflow-hidden', tintThumb[category.tint])}>
          <LeafMark className="absolute -right-5 -top-5 h-28 w-28 text-white/10 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 grid place-items-center">
            <Icon className="h-12 w-12 text-white/90" strokeWidth={1.4} />
          </div>
        </div>
      )}
      <div className="flex flex-1 items-center justify-between gap-2 p-4">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-forest">{item.name}</h3>
          {item.botanical && (
            <p className="mt-1 text-xs italic leading-snug text-ink-soft">{item.botanical}</p>
          )}
        </div>
        <a
          href={productWhatsappLink(item.name, item.botanical)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${item.name} on WhatsApp`}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest-dark text-white transition-transform hover:scale-110"
        >
          <WhatsappIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <Link
      to={`/products#${category.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <span
        className={cn(
          'grid h-14 w-14 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105',
          tintIconWrap[category.tint]
        )}
      >
        <Icon className="h-7 w-7" strokeWidth={1.6} />
      </span>
      <h3 className="mt-5 text-xl">{category.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{category.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.examples.slice(0, 4).map((e) => (
          <span key={e} className="rounded-md bg-mist px-2 py-0.5 text-[11px] font-medium text-moss-dark">
            {e}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
        Explore & enquire
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-forest transition-colors group-hover:bg-forest group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}

import type { Tint } from '../data/products';

// Brand-only gradient/treatment presets so cards get tasteful variety
// while staying strictly within the Agro Grown green palette.
export const tintThumb: Record<Tint, string> = {
  forest: 'bg-gradient-to-br from-forest via-forest-dark to-moss-dark',
  moss: 'bg-gradient-to-br from-moss via-moss-dark to-forest',
  lime: 'bg-gradient-to-br from-lime via-moss to-forest',
};

export const tintChip: Record<Tint, string> = {
  forest: 'bg-mist text-forest',
  moss: 'bg-mist text-moss-dark',
  lime: 'bg-forest/5 text-forest',
};

export const tintIconWrap: Record<Tint, string> = {
  forest: 'bg-mist text-forest',
  moss: 'bg-mist text-moss-dark',
  lime: 'bg-lime/15 text-moss-dark',
};

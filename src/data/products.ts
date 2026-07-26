import type { LucideIcon } from 'lucide-react';
import {
  Leaf,
  Sparkles,
  HeartPulse,
  Wind,
  Droplets,
  Flower2,
  Apple,
  Pill,
  Wheat,
  Sprout,
  CupSoda,
} from 'lucide-react';
import { PRODUCT_PHOTO_MULTANI } from './site';

export type Tint = 'lime' | 'moss' | 'forest';

export interface Category {
  slug: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
  tint: Tint;
  examples: string[];
}

export interface Product {
  slug: string;
  name: string;
  botanical: string;
  category: string; // category slug
  categoryName: string;
  description: string;
  forms: string[];
  benefits: string[];
  icon: LucideIcon;
  tint: Tint;
  featured?: boolean;
  photo?: string; // real photography, when available
}

export const categories: Category[] = [
  {
    slug: 'hair-care',
    name: 'Hair Care Ingredients',
    blurb:
      'Traditional botanicals for shampoos, masks and oils — cleansing, strengthening and scalp-nourishing actives sourced for cosmetic-grade performance.',
    icon: Sparkles,
    tint: 'moss',
    examples: ['Bhringraj', 'Shikakai', 'Reetha', 'Hibiscus', 'Henna'],
  },
  {
    slug: 'skin-care',
    name: 'Skin Care Ingredients',
    blurb:
      'Soothing, brightening and purifying actives — clays, powders and extracts formulated to work in harmony with the skin’s natural processes.',
    icon: Flower2,
    tint: 'lime',
    examples: ['Multani Mitti', 'Neem', 'Sandalwood', 'Rose', 'Turmeric'],
  },
  {
    slug: 'health-care',
    name: 'Health Care Ingredients',
    blurb:
      'Clinically valued herbs and standardized extracts supporting immunity, digestion, metabolic and cognitive wellness.',
    icon: HeartPulse,
    tint: 'forest',
    examples: ['Turmeric / Curcumin', 'Brahmi', 'Giloy', 'Tulsi'],
  },
  {
    slug: 'superfoods-supplements',
    name: 'Superfoods & Supplements',
    blurb:
      'Nutrient-dense greens and adaptogens delivered as powders, capsules and tablets for modern dietary supplement brands.',
    icon: Sprout,
    tint: 'lime',
    examples: ['Spirulina', 'Moringa', 'Wheatgrass', 'Ashwagandha'],
  },
  {
    slug: 'herbal-tea',
    name: 'Herbal Tea Ingredients',
    blurb:
      'Tea-cut herbs and wellness infusion blends — Kapha, Pitta, Vata and functional blends for immunity, digestion, sleep and detox.',
    icon: CupSoda,
    tint: 'moss',
    examples: ['Tulsi', 'Chamomile', 'Lemongrass', 'Hibiscus'],
  },
  {
    slug: 'natural-herbs',
    name: 'Natural Herbs',
    blurb:
      'Whole and cut dried herbs, roots and botanicals — traceable, cleaned and graded for bulk supply to processors and formulators.',
    icon: Leaf,
    tint: 'forest',
    examples: ['Ashwagandha root', 'Licorice', 'Ginger', 'Fennel'],
  },
  {
    slug: 'spray-dried',
    name: 'Spray-Dried Fruits & Vegetables',
    blurb:
      'Spray-dried fruit and vegetable powders with excellent solubility and preserved actives — ideal for beverages, blends and functional foods.',
    icon: Apple,
    tint: 'lime',
    examples: ['Amla', 'Beetroot', 'Spinach', 'Pomegranate'],
  },
  {
    slug: 'dietary-supplements',
    name: 'Dietary Supplements',
    blurb:
      'Finished-format supplements — capsules, tablets/caplets and blends — manufactured to your specification under private label.',
    icon: Pill,
    tint: 'moss',
    examples: ['Triphala', 'Multivitamin blends', 'Immunity blends'],
  },
  {
    slug: 'essential-oils',
    name: 'Essential Oils',
    blurb:
      'Steam-distilled aromatic oils of consistent chemotype and purity for aromatherapy, cosmetics and wellness applications.',
    icon: Wind,
    tint: 'forest',
    examples: ['Peppermint', 'Eucalyptus', 'Lemongrass', 'Tea Tree'],
  },
  {
    slug: 'cold-pressed-oils',
    name: 'Cold Pressed Oils',
    blurb:
      'Mechanically cold-pressed carrier and edible oils that retain natural nutrients — no heat, no solvents, full traceability.',
    icon: Droplets,
    tint: 'lime',
    examples: ['Castor', 'Coconut', 'Sesame', 'Groundnut'],
  },
  {
    slug: 'farming-inputs',
    name: 'Farming Inputs',
    blurb:
      'Botanical and organic farming inputs supporting sustainable, residue-free cultivation across our sourcing network.',
    icon: Wheat,
    tint: 'moss',
    examples: ['Bio-stimulants', 'Neem inputs', 'Organic nutrients'],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

export const products: Product[] = [
  {
    slug: 'ashwagandha-root-extract',
    name: 'Ashwagandha Root Extract',
    botanical: 'Withania somnifera',
    category: 'superfoods-supplements',
    categoryName: 'Superfoods & Supplements',
    description:
      'Standardized root extract (2.5–5% withanolides) prized as an adaptogen for stress resilience, stamina and restful sleep.',
    forms: ['Powder', 'Extract', 'Capsule', 'Tablet'],
    benefits: ['Adaptogenic', 'Stress support', 'Standardized'],
    icon: Sprout,
    tint: 'forest',
    featured: true,
    photo: '/products/Ashwagandha-powder.png',
  },
  {
    slug: 'multani-mitti',
    name: 'Multani Mitti',
    botanical: "Fuller's Earth (Bentonite Clay)",
    category: 'skin-care',
    categoryName: 'Skin Care Ingredients',
    description:
      'Natural bentonite clay powder for deep cleansing and skin purification — a cosmetic-grade staple for masks and cleansers.',
    forms: ['Powder'],
    benefits: ['Deep cleansing', 'Oil control', 'Cosmetic grade'],
    icon: Flower2,
    tint: 'lime',
    featured: true,
    photo: PRODUCT_PHOTO_MULTANI,
  },
  {
    slug: 'amla-powder',
    name: 'Amla Powder',
    botanical: 'Emblica officinalis',
    category: 'health-care',
    categoryName: 'Health Care Ingredients',
    description:
      'Vitamin-C rich Indian gooseberry powder supporting immunity, digestion and hair health — a versatile multi-application botanical.',
    forms: ['Powder', 'Extract', 'Spray-dried'],
    benefits: ['Vitamin C', 'Immunity', 'Antioxidant'],
    icon: Leaf,
    tint: 'forest',
    featured: true,
    photo: '/products/Amla-powder.png',
  },
  {
    slug: 'aloe-vera-powder',
    name: 'Aloe Vera Powder',
    botanical: 'Aloe barbadensis',
    category: 'skin-care',
    categoryName: 'Skin Care Ingredients',
    description:
      'Soothing spray-dried aloe leaf powder for skincare, hair and wellness formulations — hydrating and calming with a clean, natural profile.',
    forms: ['Powder', 'Gel Powder'],
    benefits: ['Soothing', 'Hydrating', 'Cosmetic grade'],
    icon: Flower2,
    tint: 'lime',
    featured: true,
    photo: '/products/Aloe-vara-powder.png',
  },
  {
    slug: 'bhringraj-powder',
    name: 'Bhringraj Powder',
    botanical: 'Eclipta alba',
    category: 'hair-care',
    categoryName: 'Hair Care Ingredients',
    description:
      'The classic “king of hair” herb, valued in oils and masks to strengthen roots, support growth and soothe the scalp.',
    forms: ['Powder', 'Extract'],
    benefits: ['Hair strength', 'Scalp care'],
    icon: Sparkles,
    tint: 'moss',
  },
  {
    slug: 'brahmi-extract',
    name: 'Brahmi Extract',
    botanical: 'Bacopa monnieri',
    category: 'health-care',
    categoryName: 'Health Care Ingredients',
    description:
      'Standardized bacoside extract traditionally used to support memory, focus and cognitive wellness.',
    forms: ['Powder', 'Extract', 'Capsule'],
    benefits: ['Cognitive support', 'Standardized'],
    icon: HeartPulse,
    tint: 'forest',
  },
  {
    slug: 'neem-powder',
    name: 'Neem Powder',
    botanical: 'Azadirachta indica',
    category: 'skin-care',
    categoryName: 'Skin Care Ingredients',
    description:
      'Purifying neem leaf powder for skincare and personal-care formulations, valued for its clarifying properties.',
    forms: ['Powder', 'Extract'],
    benefits: ['Purifying', 'Clarifying'],
    icon: Flower2,
    tint: 'moss',
  },
  {
    slug: 'shikakai-powder',
    name: 'Shikakai Powder',
    botanical: 'Acacia concinna',
    category: 'hair-care',
    categoryName: 'Hair Care Ingredients',
    description:
      'Gentle natural surfactant traditionally used as a cleansing base for herbal shampoos and hair washes.',
    forms: ['Powder'],
    benefits: ['Natural cleanser', 'Gentle'],
    icon: Sparkles,
    tint: 'lime',
  },
  {
    slug: 'spirulina-powder',
    name: 'Spirulina Powder',
    botanical: 'Arthrospira platensis',
    category: 'superfoods-supplements',
    categoryName: 'Superfoods & Supplements',
    description:
      'Protein-rich blue-green algae, a complete plant protein and antioxidant source for premium superfood products.',
    forms: ['Powder', 'Tablet'],
    benefits: ['Complete protein', 'Antioxidant', 'Vegan'],
    icon: Sprout,
    tint: 'forest',
  },
  {
    slug: 'tulsi-tea-cut',
    name: 'Tulsi (Holy Basil) Tea Cut',
    botanical: 'Ocimum sanctum',
    category: 'herbal-tea',
    categoryName: 'Herbal Tea Ingredients',
    description:
      'Aromatic tea-cut holy basil for immunity and calming infusion blends across our Kapha, Pitta and Vata range.',
    forms: ['Tea Cut', 'Powder'],
    benefits: ['Immunity', 'Calming', 'Aromatic'],
    icon: CupSoda,
    tint: 'moss',
  },
  {
    slug: 'cold-pressed-castor-oil',
    name: 'Cold-Pressed Castor Oil',
    botanical: 'Ricinus communis',
    category: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    description:
      'Mechanically cold-pressed castor oil retaining natural nutrients — a versatile carrier for hair, skin and cosmetic use.',
    forms: ['Oil'],
    benefits: ['Cold pressed', 'Carrier oil', 'No solvents'],
    icon: Droplets,
    tint: 'lime',
  },
  {
    slug: 'peppermint-essential-oil',
    name: 'Peppermint Essential Oil',
    botanical: 'Mentha piperita',
    category: 'essential-oils',
    categoryName: 'Essential Oils',
    description:
      'Steam-distilled peppermint oil of consistent menthol content for aromatherapy, wellness and cosmetic formulations.',
    forms: ['Essential Oil'],
    benefits: ['Steam distilled', 'Consistent chemotype'],
    icon: Wind,
    tint: 'forest',
  },
  {
    slug: 'spray-dried-amla',
    name: 'Spray-Dried Amla Fruit Powder',
    botanical: 'Emblica officinalis',
    category: 'spray-dried',
    categoryName: 'Spray-Dried Fruits & Vegetables',
    description:
      'Highly soluble spray-dried amla fruit powder that preserves natural vitamin C for beverages and functional foods.',
    forms: ['Spray-dried'],
    benefits: ['High solubility', 'Vitamin C', 'Beverage-ready'],
    icon: Apple,
    tint: 'lime',
  },
];

export const featuredProducts = products.filter((p) => p.featured);

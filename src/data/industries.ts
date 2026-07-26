import type { LucideIcon } from 'lucide-react';
import {
  Pill,
  Stethoscope,
  Leaf,
  Sparkles,
  Hand,
  UtensilsCrossed,
  CupSoda,
  HeartPulse,
  Wheat,
  Globe2,
} from 'lucide-react';
import type { Tint } from './products';

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  tint: Tint;
  summary: string;
  applications: string[];
  benefits: string[];
}

export const industries: Industry[] = [
  {
    slug: 'nutraceuticals',
    name: 'Nutraceuticals',
    icon: Pill,
    tint: 'forest',
    summary:
      'Standardized extracts and superfood actives formulated into capsules, tablets and powders that meet global label claims.',
    applications: ['Capsules & tablets', 'Functional powders', 'Standardized extracts'],
    benefits: ['Consistent actives', 'Documented specifications', 'Scalable batches'],
  },
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    icon: Stethoscope,
    tint: 'moss',
    summary:
      'Botanical raw materials and Ayurvedic actives produced under strict quality systems for pharmaceutical and OTC applications.',
    applications: ['Herbal APIs', 'Ayurvedic syrups', 'Tablets / caplets'],
    benefits: ['Quality-controlled', 'Traceable sourcing', 'Regulatory-ready docs'],
  },
  {
    slug: 'ayurveda',
    name: 'Ayurveda',
    icon: Leaf,
    tint: 'lime',
    summary:
      'Authentic single herbs and classical formulations — powders, syrups, tea blends and Dosha-specific infusions.',
    applications: ['Classical formulations', 'Churna / powders', 'Kapha·Pitta·Vata blends'],
    benefits: ['Authentic botanicals', 'Tradition + testing', 'Custom formulation'],
  },
  {
    slug: 'cosmetics',
    name: 'Cosmetics',
    icon: Sparkles,
    tint: 'forest',
    summary:
      'Cosmetic-grade herbal actives, clays and extracts for skincare, hair care and colour cosmetics — clean and plant-based.',
    applications: ['Skincare actives', 'Hair care botanicals', 'Clays & masks'],
    benefits: ['Cosmetic grade', 'Clean-label', 'Plant-based'],
  },
  {
    slug: 'personal-care',
    name: 'Personal Care',
    icon: Hand,
    tint: 'moss',
    summary:
      'Gentle, natural ingredients for body, baby and daily-care ranges free from harsh chemicals and artificial fragrance.',
    applications: ['Body care', 'Baby care', 'Natural cleansers'],
    benefits: ['Free from harsh chemicals', 'Skin-friendly', 'Sustainable'],
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    icon: UtensilsCrossed,
    tint: 'lime',
    summary:
      'Spray-dried fruit and vegetable powders, superfoods and natural extracts for functional foods and beverages.',
    applications: ['Functional beverages', 'Bakery & blends', 'Spray-dried powders'],
    benefits: ['High solubility', 'Clean flavour', 'Nutrient retention'],
  },
  {
    slug: 'herbal-tea',
    name: 'Herbal Tea',
    icon: CupSoda,
    tint: 'forest',
    summary:
      'Tea-cut herbs and wellness infusion blends targeting immunity, digestion, sleep, detox and women’s wellness.',
    applications: ['Infusion blends', 'Single-herb tea cuts', 'Wellness ranges'],
    benefits: ['Aroma-graded', 'Functional blends', 'Private label'],
  },
  {
    slug: 'health-supplements',
    name: 'Health Supplements',
    icon: HeartPulse,
    tint: 'moss',
    summary:
      'End-to-end dietary supplement manufacturing across capsules, tablets, powders and syrups under your brand.',
    applications: ['Immunity blends', 'Adaptogen formulas', 'Daily wellness'],
    benefits: ['Finished formats', 'Custom dosage', 'Private label'],
  },
  {
    slug: 'organic-foods',
    name: 'Organic Foods',
    icon: Wheat,
    tint: 'lime',
    summary:
      'Residue-conscious, sustainably sourced botanicals and superfoods for certified organic and clean-label brands.',
    applications: ['Organic superfoods', 'Clean-label blends', 'Bulk botanicals'],
    benefits: ['Sustainable sourcing', 'Residue-conscious', 'Traceable'],
  },
  {
    slug: 'export-wholesale',
    name: 'Export & Wholesale',
    icon: Globe2,
    tint: 'forest',
    summary:
      'Bulk herbal ingredients supplied worldwide with documentation and regulatory understanding of global markets.',
    applications: ['Bulk ingredients', 'Contract manufacturing', 'Global distribution'],
    benefits: ['Export documentation', 'Volume flexibility', 'Global compliance'],
  },
];

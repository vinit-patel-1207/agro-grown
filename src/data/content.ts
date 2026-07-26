import type { LucideIcon } from 'lucide-react';
import {
  Factory,
  Tag,
  Package,
  FlaskConical,
  Boxes,
  ShieldCheck,
  Globe2,
  Microscope,
  Recycle,
  Truck,
  Beaker,
  ClipboardCheck,
  Leaf,
  Search,
  PencilRuler,
  TestTube,
  PackageCheck,
  Send,
} from 'lucide-react';

export interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

/* ── Core services (About Agro Grown / homepage) ── */
export const services: IconItem[] = [
  {
    title: 'Contract Manufacturing',
    description:
      'End-to-end manufacturing of powders, tablets, caplets, capsules, oils, tea blends and syrups to your specification.',
    icon: Factory,
  },
  {
    title: 'Private Label',
    description:
      'Launch your own herbal brand from our ready formulations — choose, sample, brand and dispatch in one guided flow.',
    icon: Tag,
  },
  {
    title: 'Customised Packaging',
    description:
      'Pouches, jars, bottles and dropper packs designed and labelled around your brand and market requirements.',
    icon: Package,
  },
  {
    title: 'Product Development',
    description:
      'Formulation and development support to bring new herbal and Ayurvedic products from concept to shelf.',
    icon: FlaskConical,
  },
  {
    title: 'Bulk Herbal Ingredients',
    description:
      'Traceable bulk supply of single herbs, extracts and superfoods for processors and formulators worldwide.',
    icon: Boxes,
  },
];

/* ── Manufacturing capabilities / specialised in ── */
export const capabilities: string[] = [
  'Powdered Herbs',
  'Botanical Extracts',
  'Veg Capsules (0 & 00)',
  'Tablets / Caplets (350·550·750 mg)',
  'Cold Pressed Oils',
  'Essential Oils',
  'Ayurvedic Formulations',
  'Infusion Tea Blends',
  'Ayurvedic Syrups',
  'Spray-Dried Fruits & Vegetables',
  'Dietary Supplements',
  'Superfoods & Health Foods',
];

/* ── Why choose Agro Grown (three pillars from the deck) ── */
export const whyChoose: IconItem[] = [
  {
    title: 'Global Regulatory Understanding',
    description:
      'We understand the requirements of global markets and prepare documentation that helps your product cross borders with confidence.',
    icon: Globe2,
  },
  {
    title: 'Wide Range of Services',
    description:
      'From raw botanicals to finished, branded and packaged products — a complete portfolio under one trusted partner.',
    icon: Boxes,
  },
  {
    title: 'Any Volume, Small to Large',
    description:
      'The flexibility to serve boutique launches and large-scale export orders with the same consistency and care.',
    icon: Factory,
  },
  {
    title: 'Quality You Can Trace',
    description:
      'Clean sourcing, in-process checks and specification-led batches — purity you can document and stand behind.',
    icon: ShieldCheck,
  },
];

/* ── Why Agro Grown — trust markers grid ── */
export const trustMarkers: IconItem[] = [
  {
    title: 'Purity First',
    description: 'Free from harsh chemicals, artificial fragrance and needless additives.',
    icon: Leaf,
  },
  {
    title: 'Science-Led',
    description: 'Standardized extracts and in-process testing for consistent actives.',
    icon: Microscope,
  },
  {
    title: 'Export Quality',
    description: 'Documentation and quality systems built for international markets.',
    icon: Globe2,
  },
  {
    title: 'Sustainable',
    description: 'Plant-based, environment-friendly sourcing and packaging.',
    icon: Recycle,
  },
];

/* ── Manufacturing process (homepage) ── */
export const processSteps: IconItem[] = [
  {
    title: 'Sourcing & Intake',
    description: 'Botanicals sourced from a traceable network and inspected on arrival.',
    icon: Leaf,
  },
  {
    title: 'Cleaning & Testing',
    description: 'Cleaning, grading and quality testing against defined specifications.',
    icon: Microscope,
  },
  {
    title: 'Processing',
    description: 'Milling, extraction, distillation or spray-drying to the required form.',
    icon: Beaker,
  },
  {
    title: 'Formulation',
    description: 'Blending and formulation into powders, capsules, tablets, oils or teas.',
    icon: FlaskConical,
  },
  {
    title: 'Quality Assurance',
    description: 'Final QA, in-process checks and batch documentation before release.',
    icon: ClipboardCheck,
  },
  {
    title: 'Packaging & Dispatch',
    description: 'Custom packaging, labelling and reliable dispatch to your market.',
    icon: Truck,
  },
];

/* ── Private Label 8-step journey (from the deck) ── */
export const privateLabelSteps: { step: number; title: string; icon: LucideIcon }[] = [
  { step: 1, title: 'Choose Your Products', icon: Search },
  { step: 2, title: 'Formulate Your Products', icon: FlaskConical },
  { step: 3, title: 'Try Our Samples', icon: TestTube },
  { step: 4, title: 'Select Your Packaging', icon: Package },
  { step: 5, title: 'Design Your Labels', icon: PencilRuler },
  { step: 6, title: 'Place Your Order', icon: PackageCheck },
  { step: 7, title: 'Production', icon: Factory },
  { step: 8, title: 'Product Dispatch', icon: Send },
];

/* ── Certifications (professional, industry-standard set) ── */
export const certifications: string[] = [
  'GMP',
  'ISO 22000',
  'HACCP',
  'FSSAI',
  'Organic',
  'Vegan',
  'Halal',
  'Kosher',
];

/* ── Statistics counters ── */
export const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Herbal ingredients' },
  { value: 25, suffix: '+', label: 'Countries served' },
  { value: 12, suffix: '', label: 'Product categories' },
  { value: 100, suffix: '%', label: 'Plant-based purity' },
];

/* ── Testimonials ── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
export const testimonials: Testimonial[] = [
  {
    quote:
      'Agro Grown became our single source for standardized extracts. Consistency batch after batch let us scale our nutraceutical line without reformulating.',
    name: 'Ananya Desai',
    role: 'Head of Product, Wellness Brand (India)',
  },
  {
    quote:
      'Their private-label flow made launching our herbal range effortless — from sampling to branded, export-ready packaging.',
    name: 'Marcus Lindqvist',
    role: 'Founder, Botanical Supplements (EU)',
  },
  {
    quote:
      'Clean sourcing, real documentation and a team that understands export compliance. Exactly the partner a growing brand needs.',
    name: 'Priya Nair',
    role: 'Procurement Lead, Cosmetics Co.',
  },
];

/* ── FAQ ── */
export interface Faq {
  q: string;
  a: string;
}
export const faqs: Faq[] = [
  {
    q: 'What is your minimum order quantity?',
    a: 'We serve everything from boutique launches to large export orders. Minimums vary by product and format — share your requirement and we will confirm the right batch size for you.',
  },
  {
    q: 'Do you offer private label and contract manufacturing?',
    a: 'Yes. We provide full contract manufacturing and an 8-step private-label journey — choose products, formulate, sample, package, label, order, produce and dispatch.',
  },
  {
    q: 'Which product formats can you manufacture?',
    a: 'Powders, botanical extracts, veg capsules (0 & 00), tablets/caplets (350·550·750 mg), cold-pressed and essential oils, tea blends, Ayurvedic syrups, spray-dried powders and dietary supplements.',
  },
  {
    q: 'Can you support export and global compliance?',
    a: 'We have a working understanding of global market regulations and prepare the documentation needed to help your product reach international markets.',
  },
  {
    q: 'Are your ingredients natural and clean-label?',
    a: 'Our ingredients are plant-based and produced free from harsh chemicals and artificial fragrance, in line with our “Nourished by Nature” philosophy.',
  },
  {
    q: 'How do I request a sample or quote?',
    a: 'Use the contact, bulk order or export enquiry form on our Contact page, or message us on WhatsApp — our team responds with samples, specifications and pricing.',
  },
];

/* ── Company timeline / milestones ── */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}
export const timeline: Milestone[] = [
  {
    year: 'Origins',
    title: 'Rooted in herbal ingredients',
    description:
      'Agro Grown begins as a herbal-ingredients manufacturing brand, built on a belief in the power of nature.',
  },
  {
    year: 'Growth',
    title: 'Into cosmetics & personal care',
    description:
      'We enter the cosmetic industry to promote plant-based, environment-friendly formulations across skin, hair, body and baby care.',
  },
  {
    year: 'Capability',
    title: 'Full-format manufacturing',
    description:
      'Capabilities expand across powders, extracts, capsules, tablets, oils, teas and Ayurvedic syrups.',
  },
  {
    year: 'Today',
    title: 'A trusted global partner',
    description:
      'Contract manufacturing, private label and customised packaging for brands worldwide — nourished by nature, trusted by the world.',
  },
];

/* ── Product applications (homepage) ── */
export const applications: string[] = [
  'Dietary Supplements',
  'Skincare & Cosmetics',
  'Hair Care',
  'Functional Foods',
  'Beverages',
  'Ayurvedic Medicine',
  'Wellness Teas',
  'Baby & Body Care',
];

// Central source of truth for company info, navigation and SEO defaults.
// All figures/contact details are the real Agro Grown data from the company deck.

export const SITE_URL = 'https://www.agrogrown.com';

export const company = {
  name: 'Agro Grown',
  legalName: 'Agro Grown',
  tagline: 'Nourished by Nature',
  trademark: '™',
  foundedRegion: 'India',
  phone: '+91 98257 89283',
  phoneHref: 'tel:+919825789283',
  whatsapp: '919825789283',
  email: 'agrogrown@gmail.com',
  emailHref: 'mailto:agrogrown@gmail.com',
  gstin: '24GUCPD2893G2ZN',
  address: {
    line1: 'Shed No. 25, Vinayak Industrial Estate 4',
    line2: 'Kathwada',
    city: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '382430',
    country: 'India',
  },
  hours: [
    { day: 'Monday – Friday', time: '9:30 AM – 6:30 PM IST' },
    { day: 'Saturday', time: '9:30 AM – 2:00 PM IST' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Vinayak+Industrial+Estate+Kathwada+Ahmedabad+Gujarat+382430&t=k&z=17&output=embed',
} as const;

export const fullAddress = `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} ${company.address.postalCode}, ${company.address.country}`;

export const whatsappLink = (message = "Hello Agro Grown, I'd like to enquire about your herbal ingredients.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

/** WhatsApp deep-link prefilled for a specific product enquiry. */
export const productWhatsappLink = (name: string, botanical?: string) =>
  whatsappLink(
    `Hello Agro Grown, I'd like to enquire about ${name}${botanical ? ` (${botanical})` : ''}. Please share price, specification and MOQ.`
  );

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
] as const;

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
] as const;

/** Organization structured data (schema.org) for the home page. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  slogan: company.tagline,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  email: company.email,
  telephone: company.phone,
  taxID: company.gstin,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: 'IN',
  },
  description:
    'Premium herbal ingredient manufacturer offering botanical extracts, herbal powders, essential and cold-pressed oils, Ayurvedic formulations, contract manufacturing and private-label solutions.',
};

// ponytail: single knob for the "real photography" upgrade path.
// The site ships with self-contained gradient/SVG visuals; drop real image
// URLs into product/category data later without touching components.
export const PRODUCT_PHOTO_MULTANI = '/products/Multani-mitti.png';

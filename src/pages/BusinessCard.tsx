import { useState, isValidElement, type FormEvent, type ReactElement, type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
  UserPlus,
  FileText,
  Image as ImageIcon,
  QrCode,
  Info,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  X,
  Instagram,
  Facebook,
  Store,
  Clock,
  Send,
  Copy,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { SITE_URL, company, fullAddress, mapsLink, socials, whatsappLink, organizationJsonLd } from '../data/site';
import { founder, whyChoose } from '../data/content';
import { categories } from '../data/products';

/* ───────────────────────────── CONFIG ───────────────────────────── */

const SERVICES = [
  { bold: true, text: 'Premium Herbal Ingredients & Contract Manufacturing' },
  ...categories.map((c) => ({ bold: false, text: c.name })),
];

const ABOUT_TEXT = [
  organizationJsonLd.description,
  ...founder.paragraphs,
  `Why Choose Us:\n${whyChoose.map((w) => `• ${w.title}`).join('\n')}`,
];

const SLIDER_IMAGES = [
  '/products/Multani-mitti.png',
  '/products/Amla-powder.png',
  '/products/Ashwagandha-powder.png',
  '/products/Aloe-vara-powder.png',
  '/products/Beet-root-powder.png',
];

// ponytail: bank details not in company deck; fill these in when available.
const PAYMENT_INFO = {
  accName: company.name,
  accNo: 'Contact for Details',
  ifsc: 'Contact for Details',
  bankName: 'Contact for Details',
  branch: `${company.address.city}, ${company.address.state}, ${company.address.country}`,
};

// lucide has no brand glyphs, so IndiaMART borrows the storefront mark (same as Footer).
const SOCIAL_ICONS: Record<string, LucideIcon> = { IndiaMART: Store, Instagram, Facebook };

/* ───────────────────────────── HELPERS ───────────────────────────── */

const WhatsAppIcon = ({ className = 'w-5.5 h-5.5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ───────────────────────────── SLIDER ───────────────────────────── */

const ImageSlider = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? SLIDER_IMAGES.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === SLIDER_IMAGES.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full aspect-4/3 overflow-hidden bg-forest-dark">
      {/* Portrait shots: blurred copy fills the frame, full product shown on top, kept clear of the overlapping logo */}
      <img
        key={`bg-${idx}`}
        src={SLIDER_IMAGES[idx]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75 animate-fade-in"
      />
      <img
        key={idx}
        src={SLIDER_IMAGES[idx]}
        alt={`Slide ${idx + 1}`}
        className="relative w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] animate-fade-in"
      />
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 z-2 w-9 h-9 rounded-full flex items-center justify-center bg-forest/60 backdrop-blur text-white border border-white/20 cursor-pointer transition-all duration-300 hover:bg-forest/90 hover:scale-110"
        onClick={prev}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 z-2 w-9 h-9 rounded-full flex items-center justify-center bg-forest/60 backdrop-blur text-white border border-white/20 cursor-pointer transition-all duration-300 hover:bg-forest/90 hover:scale-110"
        onClick={next}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

/* ───────────────────────────── MODAL ──────────────────────────── */

const Modal = ({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-end sm:items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="bg-white w-full max-w-120 max-h-[85vh] overflow-y-auto text-gray-800 rounded-t-2xl sm:rounded-2xl animate-slide-in-left"
        style={{ animationDuration: '0.3s' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 bg-gray-50 rounded-t-2xl sticky top-0 z-1">
          <h5 className="m-0 text-lg font-bold text-forest">{title}</h5>
          <button
            onClick={onClose}
            aria-label="Close"
            className="bg-transparent border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

/* ───────────────────────── ACTION BUTTON ─────────────────────── */

const ActionBtn = ({
  icon: Icon,
  label,
  onClick,
  href,
}: {
  icon: LucideIcon | ReactElement;
  label: string;
  onClick?: () => void;
  href?: string;
}) => {
  const inner = (
    <>
      <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-forest border-2 border-white/50 shadow-md transition-all duration-300 group-hover:bg-lime group-hover:shadow-lg group-hover:scale-110">
        {isValidElement(Icon) ? Icon : <Icon size={22} />}
      </span>
      <span className="text-[10px] font-medium text-center text-white/90 tracking-wide">{label}</span>
    </>
  );

  const cls =
    'group flex flex-col items-center gap-1 no-underline text-white border-none bg-transparent cursor-pointer p-1 transition-transform duration-200 hover:-translate-y-0.5';

  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );

  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
};

/* ──────────────────────── SECTION DIVIDER ──────────────────────── */

const SectionDivider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 px-4 pt-3 pb-1 mt-2">
    <span className="flex-1 h-px bg-white/25" />
    <h5 className="text-[0.9rem] font-semibold whitespace-nowrap m-0 tracking-wide text-white">{title}</h5>
    <span className="flex-1 h-px bg-white/25" />
  </div>
);

/* ────────────────────── GENERATE VCARD ──────────────────────── */

const downloadVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.role}
TEL;TYPE=CELL:+${company.whatsapp}
EMAIL:${company.email}
URL:${SITE_URL}
ADR;TYPE=WORK:;;${fullAddress}
NOTE:${company.tagline}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${company.name.replace(/\s/g, '_')}_Contact.vcf`;
  a.click();
  URL.revokeObjectURL(url);
};

/* ═══════════════════════════ MAIN PAGE ═══════════════════════════ */

type ModalId = 'about' | 'qr' | 'legal' | 'payment' | 'hours' | 'share' | 'inquiry';

export default function BusinessCard() {
  const [modal, setModal] = useState<ModalId | null>(null);
  const [copied, setCopied] = useState(false);

  const closeModal = () => setModal(null);
  const pageUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${company.name} – Digital Business Card`,
          text: `Check out ${company.name}'s digital business card`,
          url: pageUrl,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      setModal('share');
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendInquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Name: ${fd.get('fullname')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('mob')}\nMessage: ${fd.get('msg')}`;
    window.open(whatsappLink(msg), '_blank');
    closeModal();
  };

  const contactRow =
    'flex items-center gap-2 px-2 py-2 no-underline text-white rounded-lg transition-all duration-200 hover:bg-white/[0.08] hover:translate-x-1';
  const contactIcon =
    'w-8 h-8 rounded-full bg-white text-forest flex items-center justify-center flex-shrink-0 border border-white/30 shadow-sm';
  const inputCls =
    'w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-800 bg-gray-50 outline-none transition-all duration-300 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10';

  return (
    <>
      <Helmet>
        <title>{`${company.name} – Digital Business Card`}</title>
        <meta name="description" content={`${company.name} – ${company.tagline}. ${fullAddress}`} />
        <meta name="theme-color" content="#2f4f2f" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={`${company.name} – Digital Business Card`} />
        <meta property="og:description" content={`${company.tagline}. ${fullAddress}`} />
        <meta property="og:image" content={`${SITE_URL}/logo.jpg`} />
        <meta property="og:url" content={`${SITE_URL}/business-card`} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── Page Wrapper ── */}
      <div
        className="min-h-screen flex justify-center items-start font-sans"
        style={{ background: 'linear-gradient(135deg, #f5f9ea 0%, #fbfcf6 50%, #f5f9ea 100%)' }}
      >
        {/* ── Card ── */}
        <div
          className="w-full max-w-2xl text-white overflow-visible"
          style={{ background: 'linear-gradient(135deg, #2f4f2f 0%, #223a22 100%)' }}
        >
          <ImageSlider />

          {/* ── Top Action Row ── */}
          <div className="flex justify-between px-3 mt-3">
            <ActionBtn icon={MessageCircle} label="Inquiry" onClick={() => setModal('inquiry')} />
            <ActionBtn icon={Share2} label="Share" onClick={handleShare} />
          </div>

          {/* ── Profile ── */}
          <div className="text-center px-4 pt-1 pb-2 relative z-1">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              className="-mt-36 mb-3 w-30 h-30 object-contain rounded-full border-[3px] border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.2),0_0_0_4px_rgba(47,79,47,0.3)] bg-white p-1.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25),0_0_0_6px_rgba(165,191,56,0.4)] inline-block"
            />
            <h1
              className="font-display text-2xl font-bold m-0 tracking-wide text-white"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
            >
              {company.name}
            </h1>
            <p className="text-sm font-light opacity-85 mt-1 mb-0 tracking-wide">{company.tagline}</p>
            <span className="block w-2/5 mx-auto my-4 border-t border-dashed border-white/35" />
            <h2 className="font-sans text-xl font-bold m-0 text-white">{founder.name}</h2>
            <p className="text-[0.8rem] font-normal opacity-75 mt-0.5 mb-0">{founder.role}</p>
          </div>

          {/* ── Quick Actions ── */}
          <div className="flex justify-center gap-1 px-2 pt-4 pb-2 flex-wrap">
            <ActionBtn icon={Phone} label="Call" href={company.phoneHref} />
            <ActionBtn icon={<WhatsAppIcon className="w-5.5 h-5.5" />} label="WhatsApp" href={whatsappLink()} />
            <ActionBtn icon={Mail} label="Email" href={company.emailHref} />
            <ActionBtn icon={UserPlus} label="Save Contact" onClick={downloadVCard} />
          </div>

          {/* ── Company Details ── */}
          <SectionDivider title="Company Details" />
          <div className="flex justify-center flex-wrap gap-1 px-3 py-2">
            <ActionBtn icon={FileText} label="About Us" onClick={() => setModal('about')} />
            <ActionBtn icon={ImageIcon} label="Products" href="/products" />
            <ActionBtn icon={QrCode} label="QR Code" onClick={() => setModal('qr')} />
            <ActionBtn icon={Info} label="Legal Info" onClick={() => setModal('legal')} />
            <ActionBtn icon={CreditCard} label="Payments" onClick={() => setModal('payment')} />
            <ActionBtn icon={Clock} label="Hours" onClick={() => setModal('hours')} />
          </div>

          {/* ── Services ── */}
          <SectionDivider title="Services / Products" />
          <div className="px-5 pt-2 pb-3">
            {SERVICES.map((s) => (
              <p
                key={s.text}
                className={`m-0 py-0.5 text-[0.85rem] leading-relaxed ${
                  s.bold ? 'font-bold text-[0.9rem] mb-1 opacity-100' : 'opacity-90'
                }`}
              >
                {s.bold ? '' : '• '}
                {s.text}
              </p>
            ))}
          </div>

          {/* ── Contact ── */}
          <SectionDivider title="Contact" />
          <div className="px-3 pt-2 pb-3">
            <a href={company.phoneHref} className={contactRow}>
              <span className={contactIcon}>
                <Phone size={16} />
              </span>
              <span>{company.phone}</span>
            </a>

            <a href={`https://wa.me/${company.whatsapp}`} className={contactRow}>
              <span className={contactIcon}>
                <WhatsAppIcon className="w-4 h-4" />
              </span>
              <span>{company.phone}</span>
            </a>

            <a href={company.emailHref} className={contactRow}>
              <span className={contactIcon}>
                <Mail size={16} />
              </span>
              <span>{company.email}</span>
            </a>

            <div className="mt-2 p-3 rounded-xl bg-white/6 border border-dashed border-white/15">
              <p className="m-0 mb-1 text-xs font-bold uppercase tracking-widest text-lime">Corporate Office</p>
              <p className="m-0 text-[0.85rem] leading-relaxed opacity-90">{fullAddress}</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-white text-forest text-xs font-semibold no-underline shadow-sm transition-all duration-300 hover:bg-lime hover:scale-105 hover:shadow-lg"
              >
                <MapPin size={14} /> Location
              </a>
            </div>
          </div>

          {/* ── Social Links ── */}
          <hr
            className="border-none h-px mx-4 my-2"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)' }}
          />
          <div className="flex justify-center gap-6 px-4 py-3">
            {[{ href: SITE_URL, label: 'Website' }, ...socials].map(({ href, label }) => {
              const Icon = SOCIAL_ICONS[label] ?? Globe;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={label}
                  className="text-white opacity-80 no-underline transition-all duration-300 hover:opacity-100 hover:scale-[1.15] hover:-translate-y-0.5"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                >
                  <Icon size={27} />
                </a>
              );
            })}
          </div>

          {/* ── Card Footer ── */}
          <div className="text-center px-4 py-3 pb-5 border-t border-white/8 flex items-center justify-between">
            <img
              src="/logo-white.png"
              alt="Logo"
              className="h-10 w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
            <span className="text-xs opacity-50 tracking-wide">Digital Business Card</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════ MODALS ═══════════════════ */}

      <Modal open={modal === 'about'} onClose={closeModal} title="About Us">
        {ABOUT_TEXT.map((p) => (
          <p key={p} className="mb-4 text-sm leading-7 text-gray-600 last:mb-0 whitespace-pre-line">
            {p}
          </p>
        ))}
      </Modal>

      <Modal open={modal === 'qr'} onClose={closeModal} title="Scan QR Code">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full object-contain border-2 border-forest p-1 bg-white mb-2 inline-block"
          />
          <h4 className="m-0 text-lg font-bold text-forest">{company.name}</h4>
          <p className="mt-1 mb-0 text-sm text-gray-500">{company.tagline}</p>
          <div className="my-6 p-4 bg-white border-2 border-gray-200 rounded-2xl inline-block shadow-sm">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pageUrl)}`}
              alt="QR Code"
              className="w-44 h-44"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Scan to view this card</p>
        </div>
      </Modal>

      <Modal open={modal === 'legal'} onClose={closeModal} title="Legal Information">
        <span className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-800">
          GSTIN: {company.gstin}
        </span>
      </Modal>

      <Modal open={modal === 'payment'} onClose={closeModal} title="Payment Details">
        <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
          <tbody>
            {[
              ['A/C Name', PAYMENT_INFO.accName],
              ['A/C No.', PAYMENT_INFO.accNo],
              ['IFS Code', PAYMENT_INFO.ifsc],
              ['Bank Name', PAYMENT_INFO.bankName],
              ['Branch', PAYMENT_INFO.branch],
            ].map(([label, value]) => (
              <tr key={label}>
                <td className="px-4 py-3 border-b border-gray-200 text-sm font-semibold text-forest w-[35%]">
                  {label}
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-sm">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>

      <Modal open={modal === 'hours'} onClose={closeModal} title="Working Hours">
        {company.hours.map((h, i) => (
          <div
            key={h.day}
            className={`flex justify-between py-3 text-sm ${i < company.hours.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <span>{h.day}</span>
            <span className={`font-semibold ${h.time === 'Closed' ? 'text-red-500' : 'text-forest'}`}>{h.time}</span>
          </div>
        ))}
      </Modal>

      <Modal open={modal === 'share'} onClose={closeModal} title="Share This Card">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${company.name} – Digital Business Card: ${pageUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="w-13 h-13 rounded-full bg-forest text-white flex items-center justify-center no-underline border-2 border-dashed border-white/30 transition-all duration-300 hover:bg-forest-dark hover:scale-110"
            >
              <WhatsAppIcon className="w-5.5 h-5.5" />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(`${company.name} – Digital Business Card`)}&body=${encodeURIComponent(`Check out this digital card: ${pageUrl}`)}`}
              aria-label="Share via email"
              className="w-13 h-13 rounded-full bg-forest text-white flex items-center justify-center no-underline border-2 border-dashed border-white/30 transition-all duration-300 hover:bg-forest-dark hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={pageUrl}
              readOnly
              aria-label="Card link"
              className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-600 outline-none"
            />
            <button
              type="button"
              onClick={copyUrl}
              className="flex items-center gap-1 px-4 py-2.5 bg-forest text-white border-none rounded-lg cursor-pointer text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:bg-forest-dark"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={modal === 'inquiry'} onClose={closeModal} title="Send Inquiry">
        <form className="flex flex-col gap-3" onSubmit={sendInquiry}>
          {[
            { type: 'text', name: 'fullname', placeholder: 'Full Name' },
            { type: 'email', name: 'email', placeholder: 'Email' },
            { type: 'tel', name: 'mob', placeholder: 'Phone Number' },
          ].map((field) => (
            <input key={field.name} {...field} aria-label={field.placeholder} required className={inputCls} />
          ))}
          <textarea
            name="msg"
            placeholder="Your Message"
            aria-label="Your Message"
            rows={3}
            required
            className={`${inputCls} resize-none`}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-white border-none rounded-xl text-[0.95rem] font-bold cursor-pointer shadow-lg shadow-forest/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest/40"
            style={{ background: 'linear-gradient(135deg, #2f4f2f, #223a22)' }}
          >
            <Send size={16} /> Send via WhatsApp
          </button>
        </form>
      </Modal>
    </>
  );
}
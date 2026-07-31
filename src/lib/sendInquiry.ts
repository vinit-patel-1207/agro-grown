// Contact-form delivery. Two channels, one shared body:
//   email    → Web3Forms endpoint (no backend needed on a static site)
//   whatsapp → wa.me deep link built from the same text (see whatsappLink in data/site)
// Explicit .ts extension so the sibling *.check.ts file runs under bare node.
import { inquiryTypes, type ContactValues } from './contactSchema.ts';

const ENDPOINT = 'https://api.web3forms.com/submit';

const typeLabel = (v: ContactValues['inquiryType']) =>
  inquiryTypes.find((t) => t.value === v)?.label ?? v;

/**
 * Human-readable enquiry body. Optional fields that were left blank are omitted
 * rather than shown empty. `category` is expected to already be a display name.
 */
export function inquiryText(values: ContactValues): string {
  const lines: [string, string | undefined][] = [
    ['Enquiry type', typeLabel(values.inquiryType)],
    ['Name', values.name],
    ['Email', values.email],
    ['Phone', values.phone],
    ['Company', values.company],
    ['Category', values.category],
    ['Product', values.product],
    ['Quantity', values.quantity],
    ['Country', values.country],
  ];
  const details = lines
    .filter(([, v]) => v?.trim())
    .map(([label, v]) => `${label}: ${v!.trim()}`)
    .join('\n');
  return `${details}\n\nMessage:\n${values.message.trim()}`;
}

/**
 * Posts the enquiry to Web3Forms, which forwards it to the configured inbox.
 * Throws on transport failure or a rejected submission so the caller can keep
 * the visitor on the filled form instead of silently dropping the enquiry.
 */
export async function sendInquiry(
  values: ContactValues,
  // Injectable so the self-check can run outside Vite (import.meta.env is per-module).
  accessKey = import.meta.env?.VITE_WEB3FORMS_KEY
): Promise<void> {
  if (!accessKey) throw new Error('Form is not configured (missing VITE_WEB3FORMS_KEY).');

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New ${typeLabel(values.inquiryType)} — ${values.name}`,
      from_name: values.name,
      replyto: values.email,
      message: inquiryText(values),
    }),
  });

  // Web3Forms answers 200 with { success: false } for a bad key, so check both.
  const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || `Submission failed (${res.status})`);
  }
}
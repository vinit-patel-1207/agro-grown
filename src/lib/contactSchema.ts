import { z } from 'zod';

export const inquiryTypes = [
  { value: 'general', label: 'General enquiry' },
  { value: 'bulk', label: 'Bulk order' },
  { value: 'export', label: 'Export enquiry' },
  { value: 'private-label', label: 'Private label' },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]['value'];

export const contactSchema = z
  .object({
    inquiryType: z.enum(['general', 'bulk', 'export', 'private-label']),
    name: z.string().min(2, 'Please enter your name'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
    phone: z
      .string()
      .optional()
      .refine((v) => !v || /^[+\d][\d\s-]{6,}$/.test(v), 'Enter a valid phone number'),
    company: z.string().optional(),
    country: z.string().optional(),
    category: z.string().optional(),
    product: z.string().optional(),
    quantity: z.string().optional(),
    message: z.string().min(10, 'Please add a few details (10+ characters)'),
  })
  .superRefine((val, ctx) => {
    // Bulk & export always need an estimated quantity to quote accurately.
    if ((val.inquiryType === 'bulk' || val.inquiryType === 'export') && !val.quantity?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['quantity'],
        message: 'Estimated quantity helps us quote accurately',
      });
    }
    // Export additionally needs a destination country for documentation.
    if (val.inquiryType === 'export' && !val.country?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['country'],
        message: 'Destination country is required for export enquiries',
      });
    }
  });

export type ContactValues = z.infer<typeof contactSchema>;

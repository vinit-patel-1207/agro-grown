import { cloneElement, isValidElement, useEffect, type ReactElement, type ReactNode } from 'react';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, ChevronDown, Send, AlertCircle } from 'lucide-react';
import { categories } from '../../data/products';
import { catalogue } from '../../data/catalogue';
import {
  contactSchema as schema,
  inquiryTypes,
  type ContactValues as FormValues,
  type InquiryType,
} from '../../lib/contactSchema';
import { cn } from '../../lib/cn';

export default function ContactForm({ defaultType = 'general' }: { defaultType?: InquiryType }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: defaultType, name: '', email: '', message: '', category: '', product: '' },
  });

  // Keep the selected type in sync when the page requests a preset (e.g. export section).
  useEffect(() => {
    setValue('inquiryType', defaultType);
  }, [defaultType, setValue]);

  const type = watch('inquiryType');
  const showLogistics = type === 'bulk' || type === 'export';

  // Product options depend on the selected category; clear stale product when it changes.
  const categorySlug = watch('category');
  const productOptions = (categorySlug && catalogue[categorySlug]) || [];
  useEffect(() => {
    setValue('product', '');
  }, [categorySlug, setValue]);

  const onSubmit = async (_values: FormValues) => {
    // ponytail: no backend yet — simulate an accepted submission.
    // Wire this to your form endpoint / email service when available.
    await new Promise((r) => setTimeout(r, 800));
  };

  if (isSubmitSuccessful) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white p-10 text-center shadow-soft ring-1 ring-black/5"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-lime" />
        <h3 className="mt-4 text-2xl">Thank you — we’ve got your enquiry</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          Our team typically responds within one business day with samples, specifications and
          pricing. For anything urgent, message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => reset({ inquiryType: defaultType, name: '', email: '', message: '' })}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8"
    >
      {errorCount > 0 && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>Please review the highlighted {errorCount === 1 ? 'field' : 'fields'} below.</span>
        </div>
      )}

      {/* Enquiry type */}
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-forest">What can we help with?</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {inquiryTypes.map((t) => {
            const active = type === t.value;
            return (
              <label
                key={t.value}
                className={cn(
                  'cursor-pointer rounded-xl border px-3 py-2.5 text-center text-xs font-semibold transition-colors',
                  active
                    ? 'border-forest bg-forest text-white'
                    : 'border-moss/25 bg-white text-ink-soft hover:border-forest hover:text-forest'
                )}
              >
                <input
                  type="radio"
                  value={t.value}
                  className="sr-only"
                  {...register('inquiryType')}
                />
                {t.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            {...inputProps(!!errors.name, 'name')}
          />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            {...inputProps(!!errors.email, 'email')}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            {...inputProps(!!errors.phone, 'phone')}
          />
        </Field>
        <Field label="Company / brand" error={errors.company?.message}>
          <input
            type="text"
            autoComplete="organization"
            {...register('company')}
            {...inputProps(!!errors.company, 'company')}
          />
        </Field>

        <SelectField label="Category" error={errors.category?.message} reg={register('category')}>
          <option value="">Any / not sure yet</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </SelectField>

        <SelectField
          label="Product name"
          error={errors.product?.message}
          reg={register('product')}
          disabled={!categorySlug}
        >
          <option value="">
            {categorySlug ? 'Select a product' : 'Choose a category first'}
          </option>
          {productOptions.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </SelectField>

        {showLogistics && (
          <Field
            label={type === 'export' ? 'Destination country' : 'Country'}
            required={type === 'export'}
            error={errors.country?.message}
          >
            <input
              type="text"
              autoComplete="country-name"
              {...register('country')}
              {...inputProps(!!errors.country, 'country')}
            />
          </Field>
        )}

        {showLogistics && (
          <Field
            label="Estimated quantity"
            required
            error={errors.quantity?.message}
            className="sm:col-span-2"
          >
            <input
              type="text"
              placeholder="e.g. 500 kg / 10,000 capsules per month"
              {...register('quantity')}
              {...inputProps(!!errors.quantity, 'quantity')}
            />
          </Field>
        )}

        <Field label="Message" required error={errors.message?.message} className="sm:col-span-2">
          <textarea
            rows={4}
            placeholder="Tell us about your product, target market and any specifications…"
            {...register('message')}
            {...inputProps(!!errors.message, 'message')}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-dark disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          'Sending…'
        ) : (
          <>
            Send enquiry <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-ink-soft">
        We respect your privacy and use your details only to respond to this enquiry.
      </p>
    </form>
  );
}

/* ── Field + input helpers ── */
function Field({
  label,
  required,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        'aria-describedby': error ? `${id}-error` : undefined,
      })
    : children;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {control}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Select with a custom, inset chevron (native arrow hugs the edge) ── */
function SelectField({
  label,
  error,
  reg,
  disabled,
  children,
}: {
  label: string;
  error?: string;
  reg: UseFormRegisterReturn;
  disabled?: boolean;
  children: ReactNode;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...reg}
          className={cn(
            'w-full appearance-none rounded-xl border bg-white py-2.5 pl-4 pr-10 text-sm text-ink outline-none transition-colors focus:ring-2 disabled:opacity-60',
            error
              ? 'border-red-400 focus:ring-red-300'
              : 'border-moss/25 focus:border-forest focus:ring-forest/25'
          )}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-moss" />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputProps(hasError: boolean, _name: string) {
  return {
    'aria-invalid': hasError,
    className: cn(
      'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:ring-2',
      hasError
        ? 'border-red-400 focus:ring-red-300'
        : 'border-moss/25 focus:border-forest focus:ring-forest/25'
    ),
  };
}

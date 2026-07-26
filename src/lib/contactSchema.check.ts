// Runnable self-check for the contact form's conditional validation.
// Run:  node --experimental-strip-types src/lib/contactSchema.check.ts
// (No test framework by design — one assert-based check for the one branching path.)
import assert from 'node:assert/strict';
import { contactSchema } from './contactSchema.ts';

const base = { name: 'Asha', email: 'asha@brand.com', message: 'We need bulk amla powder.' };

// general: valid with no logistics fields
assert.equal(contactSchema.safeParse({ ...base, inquiryType: 'general' }).success, true);

// bulk: quantity required
assert.equal(contactSchema.safeParse({ ...base, inquiryType: 'bulk' }).success, false);
assert.equal(
  contactSchema.safeParse({ ...base, inquiryType: 'bulk', quantity: '500 kg' }).success,
  true
);

// export: both country AND quantity required
assert.equal(
  contactSchema.safeParse({ ...base, inquiryType: 'export', quantity: '1 ton' }).success,
  false
);
assert.equal(
  contactSchema.safeParse({ ...base, inquiryType: 'export', quantity: '1 ton', country: 'Germany' })
    .success,
  true
);

// base rules: short message + bad email rejected
assert.equal(contactSchema.safeParse({ ...base, inquiryType: 'general', message: 'hi' }).success, false);
assert.equal(
  contactSchema.safeParse({ ...base, inquiryType: 'general', email: 'nope' }).success,
  false
);

console.log('contactSchema check: all assertions passed ✓');

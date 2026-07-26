// Runnable self-check: every catalogue key must be a real category slug,
// otherwise its full list silently never renders on the Products page.
// Run:  node --experimental-strip-types src/data/catalogue.check.ts
//
// Slugs are duplicated here (not imported) because products.ts pulls in the
// whole app dep chain — lucide, site.ts — which node's type-stripper can't
// resolve. Keep in sync with categories[].slug in products.ts.
import assert from 'node:assert/strict';
import { catalogue } from './catalogue.ts';

const CATEGORY_SLUGS = new Set([
  'herbal-powders',
  'hair-care',
  'skin-care',
  'health-care',
  'superfoods-supplements',
  'herbal-tea',
  'natural-herbs',
  'spray-dried',
  'dietary-supplements',
  'essential-oils',
  'cold-pressed-oils',
  'farming-inputs',
]);

for (const key of Object.keys(catalogue)) {
  assert.ok(CATEGORY_SLUGS.has(key), `catalogue key "${key}" is not a category slug`);
  assert.ok(catalogue[key].length > 0, `catalogue "${key}" is empty`);
  for (const it of catalogue[key]) {
    assert.ok(it.name.trim().length > 0, `empty product name in "${key}"`);
  }
}

console.log('catalogue check: all keys map to categories ✓');

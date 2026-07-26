// Tiny classnames joiner — no dependency needed.
// ponytail: this replaces clsx/tailwind-merge for our simple conditional needs.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

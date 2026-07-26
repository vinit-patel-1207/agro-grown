import { ArrowLeft, Leaf } from 'lucide-react';
import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { LeafMark } from '../components/ui/Decor';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you’re looking for doesn’t exist. Return to Agro Grown’s homepage."
        path="/404"
      />
      <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-linear-to-br from-forest-dark via-forest to-moss-dark px-5 text-center text-white">
        <LeafMark className="pointer-events-none absolute -right-16 top-20 h-80 w-80 text-lime/10" />
        <LeafMark className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 text-white/5" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lime ring-1 ring-white/15">
            <Leaf className="h-3.5 w-3.5" />
            404
          </span>
          <h1 className="mt-6 text-5xl font-semibold text-white sm:text-7xl">
            This path grew wild
          </h1>
          <p className="m
          x-auto mt-4 max-w-md text-white/70">
            The page you’re looking for isn’t here. Let’s get you back to something rooted.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/" variant="secondary" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
            <Button
              to="/products"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10"
            >
              Browse products
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

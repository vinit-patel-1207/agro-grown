import { ArrowRight, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { LeafMark } from '../ui/Decor';
import { whatsappLink } from '../../data/site';

export default function CtaSection({
  title = 'Let’s build your next herbal product',
  subtitle = 'From a single botanical to a fully branded, export-ready range — tell us what you need and our team will respond with samples, specifications and pricing.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest to-moss-dark py-20 text-white">
      <LeafMark className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 text-white/5" />
      <LeafMark className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-lime/10" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="secondary" size="lg">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

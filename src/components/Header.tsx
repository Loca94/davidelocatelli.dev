import Link from 'next/link';
import Container from '@/components/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { FlipLogo } from '@/components/animations/FlipLogo';

// The top padding shrinks on pages with a breadcrumb (see `.site-header` in tailwind.css)
export default function Header() {
  return (
    <header className="site-header">
      <Container className="pt-24 pb-8 transition-all duration-500">
        <FadeIn>
          <Link href="/" className="block h-12 w-12">
            <div className="sr-only">Go to homepage</div>
            <FlipLogo />
          </Link>
        </FadeIn>
      </Container>
    </header>
  );
}

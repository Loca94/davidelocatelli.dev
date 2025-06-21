import type { Metadata } from 'next';
import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import websites from '@/data/resources/websites.json';
import { ResourceLinkList } from '@/components/ResourceLink';

export const metadata: Metadata = {
  title: 'Websites - Resources',
  description: 'A curated list of websites I use for inspiration.',
};

export default function IconsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <PageTitle>Websites</PageTitle>
            </FadeIn>
            <FadeIn>
              <PageDescription>
                Remarkable websites and portfolios I came across surfing the
                web.
              </PageDescription>
            </FadeIn>
          </div>

          <ResourceLinkList data={websites} />
        </div>
      </Container>
    </FadeInStagger>
  );
}

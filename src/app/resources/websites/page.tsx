import { Metadata } from 'next';
import Container from '@/components/Container';
import { ResourceLink } from '@/components/Resource';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import websites from '@/data/resources/websites.json';

export const metadata: Metadata = {
  title: 'Icons - Resources',
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

          <div>
            <div className="flex flex-col divide-y divide-neutral-800">
              {websites.map((website) => (
                <FadeIn key={website.title} className="py-6">
                  <ResourceLink
                    title={website.title}
                    description={website.description}
                    href={website.link}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

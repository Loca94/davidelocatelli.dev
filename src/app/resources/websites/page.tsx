import Container from '@/components/Container';
import ResourceLink from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import websites from '@/data/resources/websites.json';

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
            <div className="flex flex-col gap-6">
              {websites.map((website) => (
                <FadeIn key={website.title}>
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

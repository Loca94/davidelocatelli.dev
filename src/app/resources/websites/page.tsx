import Container from '@/components/Container';
import ResourceLink from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import websites from '@/data/resources/websites.json';

export default function IconsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <h1 className="text-lg font-medium text-neutral-950">Websites</h1>
            </FadeIn>
            <FadeIn>
              <p className="font-medium text-neutral-400">
                Remarkable websites and portfolios I came across surfing the
                web.
              </p>
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
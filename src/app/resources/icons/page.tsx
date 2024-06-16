import Container from '@/components/Container';
import ResourceLink from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import icons from '@/data/resources/icons.json';

export default function IconsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <PageTitle>Icons</PageTitle>
            </FadeIn>
            <FadeIn>
              <PageDescription>
                Below a list of icon sets I enjoy using.
              </PageDescription>
            </FadeIn>
          </div>

          <div>
            <div className="flex flex-col divide-y divide-neutral-800">
              {icons.map((icon) => (
                <FadeIn key={icon.title} className="py-6">
                  <ResourceLink
                    title={icon.title}
                    description={icon.description}
                    href={icon.link}
                  />
                </FadeIn>
              ))}
              {/* <FadeIn>
                <a
                  href="https://icon-sets.iconify.design/skill-icons/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
                >
                  Iconify - Skill Icons - Da rimuovere perche il sito fa pena..
                  TODO: da rimuovere
                </a>
                <p className="text-neutral-400">
                  I primarily use this set for the Skill Icons.
                </p>
              </FadeIn> */}
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

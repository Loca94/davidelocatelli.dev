import Container from '@/components/Container';
import ResourceLink from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import icons from '@/data/resources/icons.json';

export default function IconsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <h1 className="text-lg font-medium text-neutral-950">Icons</h1>
            </FadeIn>
            <FadeIn>
              <p className="font-medium text-neutral-400">
                Below a list of icon sets I enjoy using.
              </p>
            </FadeIn>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {icons.map((icon) => (
                <FadeIn key={icon.title}>
                  <ResourceLink
                    title={icon.title}
                    description={icon.description}
                    href={icon.link}
                  />
                </FadeIn>
              ))}
              <FadeIn>
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
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}
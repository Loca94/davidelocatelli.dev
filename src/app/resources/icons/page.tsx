import { Metadata } from 'next';
import Container from '@/components/Container';
import icons from '@/data/resources/icons.json';
import { Card, CardHeader } from '@/components/ui/Card';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import {
  BootstrapIconsLogo,
  BoxiconsLogo,
  CSSggIcon,
  FeatherIconsLogo,
  GithubLogo,
  HealthIconsLogo,
  HeroiconsLogo,
  PhosphorIconsLogo,
  TablersIconsLogo,
} from '@/components/Icons';
import { ResourceIconCard } from '@/components/Resource';

export const metadata: Metadata = {
  title: 'Icons - Resources',
  description: 'A curated list of icon sets I used in my previous projects.',
};

export default function IconsPage() {
  const iconsClasses = 'w-8 h-8 self-center';
  const iconsMap: { [key: string]: JSX.Element } = {
    Heroicons: <HeroiconsLogo className={iconsClasses} />,
    PhosphorIcons: <PhosphorIconsLogo className={iconsClasses} />,
    'Health Icons': <HealthIconsLogo className={iconsClasses} />,
    Boxicons: <BoxiconsLogo className={iconsClasses} />,
    'Bootstrap Icons': <BootstrapIconsLogo className={iconsClasses} />,
    'Feather Icons': <FeatherIconsLogo className={iconsClasses} />,
    'Tabler Icons': <TablersIconsLogo className={iconsClasses} />,
    Octicons: <GithubLogo className={iconsClasses} />,
    'CSS.gg': <CSSggIcon className={iconsClasses} />,
  };

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
                Below a list of my favorite icon sets.
              </PageDescription>
            </FadeIn>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {icons.map((icon) => (
                <FadeIn key={icon.title} className="group">
                  <a href={icon.link} target="_blank" className="relative">
                    <span className="sr-only">{icon.description}</span>
                    <ResourceIconCard
                      title={icon.title}
                      icon={iconsMap[icon.title]}
                    />
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

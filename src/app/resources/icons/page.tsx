import type { JSX } from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';
import icons from '@/data/resources/icons.json';
import { Card, CardHeader } from '@/components/ui/Card';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import {
  BootstrapIconsLogo,
  BoxiconsLogo,
  CSSggLogo,
  FeatherIconsLogo,
  GithubLogo,
  HealthIconsLogo,
  HeroiconsLogo,
  PhosphorIconsLogo,
  TablersIconsLogo,
} from '@/components/Logos';

export const metadata: Metadata = {
  title: 'Icons - Resources',
  description: 'A curated list of icon sets I used in my previous projects.',
};

function IconCard({ icon, title }: { icon: JSX.Element; title: string }) {
  return (
    <Card
      topGradient
      className="text-neutral-700 transition-colors duration-300 dark:text-neutral-300 dark:group-hover:border-neutral-500 dark:group-hover:text-neutral-100"
    >
      <CardHeader className="space-y-3 rounded-lg py-4 transition-colors duration-300 select-none dark:bg-neutral-800/10 dark:group-hover:bg-neutral-700/20">
        {icon}
        <span className="text-center text-sm md:text-base">{title}</span>
      </CardHeader>
    </Card>
  );
}

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
    'CSS.gg': <CSSggLogo className={iconsClasses} />,
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
                    <IconCard title={icon.title} icon={iconsMap[icon.title]} />
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

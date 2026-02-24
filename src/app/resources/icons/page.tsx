import type { JSX } from 'react';
import type { Metadata } from 'next';
import Container from '@/components/container';
import icons from '@/data/resources/icons.json';
import { Card, CardHeader } from '@/components/ui/card';
import { FadeInStagger, FadeIn } from '@/components/animations/fade-in';
import { PageDescription, PageTitle } from '@/components/ui/page-layout';
import { BootstrapIconsLogo } from '@/components/icons/logos/bootstrap-logo-icon';
import { BoxiconsLogo } from '@/components/icons/logos/boxicons-logo-icon';
import { CSSggLogo } from '@/components/icons/logos/css-gg-logo-icon';
import { FeatherIconsLogo } from '@/components/icons/logos/feather-icons-logo-icon';
import { GithubLogo } from '@/components/icons/logos/github-logo-icon';
import { HealthIconsLogo } from '@/components/icons/logos/health-icons-logo-icon';
import { HeroiconsLogo } from '@/components/icons/logos/heroicons-logo-icon';
import { PhosphorIconsLogo } from '@/components/icons/logos/phosphor-icons-logo-icon';
import { TablersIconsLogo } from '@/components/icons/logos/tablers-icons-logo-icon';

export const metadata: Metadata = {
  title: 'Icons - Resources',
  description: 'A curated list of icon sets I used in my previous projects.',
  alternates: {
    canonical: '/resources/icons',
  },
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

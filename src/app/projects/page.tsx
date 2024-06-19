import { Metadata } from 'next';
import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { SkullIcon } from '@/components/Icons';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made in my free time.',
};

export default function ProjectsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <PageTitle>Projects</PageTitle>
            </FadeIn>
            <FadeIn>
              <PageDescription>
                Below a list of projects I have worked on during spare time.
              </PageDescription>
            </FadeIn>
          </div>

          {/* Project Cards */}
          <div>
            <div className="flex flex-col gap-6">
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.saracosmai.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-emerald-500"
                >
                  UI & UX Designer Portfolio
                </a>
                <p className="text-neutral-400 dark:text-neutral-500">2024</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.dentista-aosta.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-emerald-500"
                >
                  Dental Office Website
                </a>
                <p className="text-neutral-400 dark:text-neutral-500">2023</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.dibarro.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-emerald-500"
                >
                  Winery Website
                </a>
                <p className="text-neutral-400 dark:text-neutral-500">2022</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <div
                  className="group relative inline-flex items-center text-neutral-500 dark:text-neutral-300"
                  title="Dead"
                >
                  Alpitude
                  <SkullIcon className="ml-1 h-4 w-4" />
                </div>
                <p className="text-neutral-400 dark:text-neutral-500">
                  2020-2022
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

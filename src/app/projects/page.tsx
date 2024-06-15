import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { SkullIcon } from '@/components/Icons';

export default function ProjectsPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <h1 className="text-lg font-medium text-neutral-950">Projects</h1>
            </FadeIn>
            <FadeIn>
              <p className="font-medium text-neutral-400">
                Below a list of projects I have worked on during spare time.
              </p>
            </FadeIn>
          </div>

          {/* Project Cards */}
          <div>
            <div className="flex flex-col gap-6">
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.saracosmai.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
                >
                  UI & UX Designer Portfolio
                </a>
                <p className="text-neutral-400">2024</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.dentista-aosta.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
                >
                  Dental Office Website
                </a>
                <p className="text-neutral-400">2023</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <a
                  href="https://www.dibarro.com/"
                  target="_blank"
                  className="relative inline-flex items-center text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
                >
                  Winery Website
                </a>
                <p className="text-neutral-400">2022</p>
              </FadeIn>
              <FadeIn className="flex flex-col">
                <div
                  className="group relative inline-flex items-center text-neutral-500"
                  title="Dead"
                >
                  Alpitude
                  <SkullIcon className="ml-1 h-4 w-4" />
                </div>
                <p className="text-neutral-400">2020-2022</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

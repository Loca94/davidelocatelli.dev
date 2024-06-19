import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageTitle } from '@/components/ui/PageLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <FadeInStagger>
      <Container className="flex flex-col space-y-8">
        <div>
          <FadeIn>
            <PageTitle>Davide Locatelli</PageTitle>
          </FadeIn>
          <FadeIn>
            <a
              className="block w-fit font-medium text-neutral-400 dark:text-neutral-500"
              href="https://www.accenture.com"
              target="_blank"
            >
              Software Engineer at{' '}
              <span className="transition duration-300 hover:underline hover:decoration-neutral-200 hover:underline-offset-2 dark:hover:text-neutral-300 dark:hover:decoration-emerald-500">
                Accenture
              </span>
            </a>
          </FadeIn>
        </div>

        <div>
          <ul role="list">
            <FadeIn>
              <li>
                <Link
                  href="about"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-600"
                >
                  About
                </Link>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <Link
                  href="projects"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-600"
                >
                  Projects
                </Link>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <Link
                  href="resources"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-600"
                >
                  Resources
                </Link>
              </li>
            </FadeIn>
          </ul>
        </div>

        <div>
          <ul role="list">
            <FadeIn>
              <li>
                <a
                  href="mailto:davide.loca94@gmail.com"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-600"
                >
                  Email
                </a>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <a
                  href="/Davide_Locatelli_-_Resume.pdf"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <a
                  href="https://www.linkedin.com/in/davide-locatelli-dev/"
                  target="_blank"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-600"
                >
                  LinkedIn
                </a>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <a
                  href="https://github.com/Loca94/"
                  target="_blank"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-600"
                >
                  Github
                </a>
              </li>
            </FadeIn>
          </ul>
        </div>
      </Container>
    </FadeInStagger>
  );
}

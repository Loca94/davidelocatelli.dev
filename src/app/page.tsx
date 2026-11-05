import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageTitle } from '@/components/ui/PageLayout';
import { JsonLd } from '@/components/JsonLd';
import { AccentureLogo } from '@/components/Logos';
import Link from 'next/link';
import AboutPhoto from '@/images/about-photo.webp';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      author: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}${AboutPhoto.src}`,
      jobTitle: 'Senior Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Accenture',
        url: 'https://www.accenture.com',
      },
      address: { '@type': 'PostalAddress', addressCountry: 'IT' },
      knowsAbout: [
        'Web Development',
        'Web Accessibility',
        'TypeScript',
        'React',
        'Angular',
        'Svelte',
        'Node.js',
        'Spring Boot',
      ],
      sameAs: [
        'https://www.linkedin.com/in/davide-locatelli-dev/',
        'https://github.com/Loca94/',
      ],
      subjectOf: {
        '@type': 'DigitalDocument',
        name: `${SITE_NAME} - Resume`,
        url: `${SITE_URL}/resume.pdf`,
        encodingFormat: 'application/pdf',
      },
    },
  ],
};

export default function Home() {
  return (
    <FadeInStagger>
      <JsonLd data={structuredData} />
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
              Senior Developer at{' '}
              <span className="transition duration-300 hover:underline hover:decoration-neutral-200 hover:underline-offset-2 dark:hover:text-neutral-300 dark:hover:decoration-emerald-500">
                Accenture
              </span>
              {'  '}
              <AccentureLogo
                aria-hidden="true"
                className="mb-0.5 inline-block h-3 w-3 text-[#A100FF]"
              />
            </a>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              I build web products end to end, from polished, accessible
              interfaces to the back-ends that power them. Based in Milan{' '}
              <span aria-hidden="true">🇮🇹</span>, working with TypeScript,
              React, Angular and Spring Boot.
            </p>
          </FadeIn>
        </div>

        <div>
          <ul role="list">
            <FadeIn>
              <li>
                <Link
                  href="/about"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-500"
                >
                  About
                </Link>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <Link
                  href="/projects"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-500"
                >
                  Projects
                </Link>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <Link
                  href="/resources"
                  className="block w-fit py-2 font-medium text-neutral-800 transition duration-300 dark:text-neutral-200 dark:hover:text-emerald-500"
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
                  href="mailto:davidelocatelli.dev@gmail.com"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-500"
                >
                  Email
                </a>
              </li>
            </FadeIn>
            <FadeIn>
              <li>
                <a
                  href="/resume.pdf"
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-500"
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
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-500"
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
                  className="block w-fit py-2 font-medium text-neutral-400 transition duration-300 hover:text-emerald-600 dark:text-neutral-600 dark:hover:text-emerald-500"
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

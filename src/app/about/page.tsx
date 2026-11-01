import { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import Container from '@/components/Container';
import { TriangleIcon } from '@/components/Icons';
import { LetsTalkButton } from '@/components/animations/AnimatedBtnBorder';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'I’m Davide Locatelli, a full-stack Senior Developer with more than 8 years of experience in TypeScript, React, Angular, Svelte, Node.js and Spring Boot.',
  path: '/about',
});

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-neutral-900 dark:text-neutral-200">
      {children}
    </span>
  );
}

export default function About() {
  const recentTechnologies = [
    'Angular',
    'Svelte',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Spring Boot',
    'TypeScript',
    'Docker',
    'Three.js',
  ];

  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <FadeIn>
            <h1 className="text-lg font-medium text-neutral-950 dark:text-neutral-50">
              About
            </h1>
          </FadeIn>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
            <FadeIn>
              <p className="text-base leading-relaxed">
                Hi! I’m Davide. I got hooked on web development at university,
                tinkering with mobile apps and websites. What pulled me in were
                the details: animations, 3D, and interfaces so polished they
                feel effortless to use.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base leading-relaxed">
                In 2018 I joined Accenture in Milan, where I’m now a{' '}
                <Highlight>Senior Developer</Highlight>. I build websites and
                back-end systems for{' '}
                <Highlight>some of Europe’s largest banks</Highlight>: Angular
                and Svelte front-ends, a Spring Boot platform of 40+
                microservices serving 400+ bank branches, and the internal tools
                that keep their data GDPR-compliant.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base leading-relaxed">
                Outside of work, I team up with a designer on{' '}
                <Highlight>independent projects</Highlight>: websites for a
                winery, a dental practice and an outdoor sports platform, from
                the design system all the way to SvelteKit front-ends and a
                Strapi and GraphQL back-end on AWS.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base leading-relaxed">
                Wherever I work, I care about the same things:{' '}
                <Highlight>accessible, inclusive interfaces</Highlight>, code
                that’s easy to maintain, and helping the people on my team grow.
              </p>
            </FadeIn>
          </div>

          <FadeIn className="text-neutral-600 dark:text-neutral-400">
            <p className="mb-2 text-base leading-relaxed">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-y-1.5 sm:grid-cols-3">
              {recentTechnologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center space-x-2 text-base"
                >
                  <TriangleIcon className="shadow-svg h-3 w-3 rotate-90 text-emerald-500 dark:text-emerald-500" />
                  <span className="leading-relaxed">{tech}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <div className="py-2">
              <LetsTalkButton />
            </div>
          </FadeIn>
        </div>
      </Container>
    </FadeInStagger>
  );
}

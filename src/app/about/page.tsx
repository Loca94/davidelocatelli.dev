import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import Container from '@/components/Container';
import { TriangleIcon } from '@/components/Icons';
import { Button } from '@/components/ui/Button';

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
    'Vercel',
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
                Hi! I’m Davide, a{' '}
                <span className="font-medium text-neutral-200">
                  Full-Stack Developer
                </span>{' '}
                with more than{' '}
                <span className="font-medium text-neutral-200">
                  5 years of experience
                </span>{' '}
                int the field.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                My journey into web development began during my university years
                when I digged into mobile applications and websites. I was
                captivated by the world of animations, 3D design, and surfing
                through polished, user-friendly interfaces.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base leading-relaxed">
                Fast-forward to today, and I’ve had the privilege of working at
                a{' '}
                <span className="font-medium text-neutral-200">
                  huge corporation
                </span>
                , collaborated with an{' '}
                <span className="font-medium text-neutral-200">
                  early-stage start-up
                </span>{' '}
                and realized some{' '}
                <span className="font-medium text-neutral-200">
                  off-work websites
                </span>{' '}
                with a UI & UX Designer.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base leading-relaxed">
                My main focus these days is{' '}
                <span className="font-medium text-neutral-200">
                  building accessible, inclusive products and digital
                  experiences
                </span>{' '}
                at Accenture for a variety of clients.
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
            <Button>Connect</Button>
          </FadeIn>
        </div>
      </Container>
    </FadeInStagger>
  );
}

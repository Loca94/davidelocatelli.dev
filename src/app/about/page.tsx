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
            <h1 className="text-lg font-medium text-neutral-950">About</h1>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn>
              <p className="text-base text-neutral-600">
                Hi! I’m Davide, a Full-Stack Developer with more than 5 years of
                experience int the field. My journey into Web development began
                during my university years when I digged into mobile
                applications and websites. I was captivated by the world of
                animations, 3D design, and surfing through polished,
                user-friendly interfaces.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base text-neutral-600">
                Fast-forward to today, and I’ve had the privilege of working at
                a{' '}
                <span className="underline decoration-emerald-300 underline-offset-2">
                  huge corporation
                </span>
                , collaborated with an{' '}
                <span className="underline decoration-emerald-300 underline-offset-2">
                  early-stage start-up
                </span>{' '}
                and realized some{' '}
                <span className="underline decoration-emerald-300 underline-offset-2">
                  off-work websites
                </span>{' '}
                with a UI & UX Designer.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="text-base text-neutral-600">
                My main focus these days is building accessible, inclusive
                products and digital experiences at Accenture for a variety of
                clients.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="mb-2 text-base text-neutral-600">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-y-1.5 sm:grid-cols-3">
                {recentTechnologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center space-x-2 text-base text-neutral-600"
                  >
                    <TriangleIcon className="h-3 w-3 rotate-90 text-emerald-500" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn>
            <Button>Connect</Button>
          </FadeIn>
        </div>
      </Container>
    </FadeInStagger>
  );
}

import { Metadata } from 'next';
import Container from '@/components/container';
import { FadeInStagger, FadeIn } from '@/components/animations/fade-in';
import { ArrowUpRightMiniIcon } from '@/components/icons/arrow-up-right-icon';
import { LockKeyIcon } from '@/components/icons/lock-key-icon';
import { PageDescription, PageTitle } from '@/components/ui/page-layout';
import projects from '@/data/resources/projects.json';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made in my free time.',
  alternates: {
    canonical: '/projects',
  },
};

function ProjectCard({
  link,
  title,
  description,
  year,
  tags,
}: {
  link: string;
  title: string;
  description: string;
  year: string;
  tags?: string[];
}) {
  return (
    <a
      className="group block rounded-xl"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="transition-colors dark:group-hover:border-neutral-400 dark:group-hover:bg-neutral-900/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <ArrowUpRightMiniIcon className="size-5 text-neutral-700 transition ease-out group-hover:rotate-45 group-focus:rotate-45 dark:group-hover:text-neutral-100 dark:group-focus:text-neutral-100" />
          </div>
          <CardDescription className="mt-3">{description}</CardDescription>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline">{year}</Badge>
            {tags &&
              tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
          </div>
        </CardHeader>
      </Card>
    </a>
  );
}

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
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <FadeIn key={project.link}>
                  <ProjectCard
                    title={project.title}
                    link={project.link}
                    description={project.description}
                    year={project.year}
                    tags={project.tags}
                  />
                </FadeIn>
              ))}
              <FadeIn>
                <Card
                  tabIndex={0}
                  className="group transition-colors dark:hover:border-neutral-400 dark:hover:bg-neutral-900/50"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Alpitude</CardTitle>
                      <LockKeyIcon className="size-5 text-neutral-700 transition dark:group-hover:text-neutral-100 dark:group-focus:text-neutral-100" />
                    </div>
                    <CardDescription className="mt-3">
                      Alpitude is an intuitive and user-friendly web platform
                      designed to help users explore the wide range of outdoor
                      activities available in the Aosta Valley. The goal is to
                      connect people with the natural beauty and mountain sports
                      of the region, giving the Alps and the local territory the
                      digital visibility they deserve.
                    </CardDescription>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">2021-2023</Badge>
                      <Badge variant="outline">SvelteKit</Badge>
                      <Badge variant="outline">Strapi</Badge>
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">Mapbox</Badge>
                      <Badge variant="outline">GraphQL</Badge>
                    </div>
                  </CardHeader>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

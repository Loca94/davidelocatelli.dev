import type { Metadata } from 'next';
import Container from '@/components/Container';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { ResourceLinkList } from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import learning from '@/data/resources/learning.json';

export const metadata: Metadata = {
  title: 'Learning - Resources',
  robots: { index: false }, // TODO: Remove once the page is finished
};

export default function LearningPage() {
  return (
    <>
      <PageBreadcrumb
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'Learning', href: '/resources/learning' },
        ]}
      />
      <FadeInStagger>
        <Container>
          <div className="flex flex-col space-y-8">
            <div>
              <FadeIn>
                <PageTitle>Learning</PageTitle>
              </FadeIn>
              <FadeIn>
                <PageDescription>
                  bla bla bla... Sarebbe anche da mettere il link al libro
                  Refactoring UI.
                </PageDescription>
              </FadeIn>
            </div>

            {/* Project Cards */}
            <ResourceLinkList data={learning} />
          </div>
        </Container>
      </FadeInStagger>
    </>
  );
}

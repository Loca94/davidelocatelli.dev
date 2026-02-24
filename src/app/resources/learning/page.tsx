import Container from '@/components/container';
import { ResourceLinkList } from '@/components/resource-link';
import { FadeInStagger, FadeIn } from '@/components/animations/fade-in';
import { PageDescription, PageTitle } from '@/components/ui/page-layout';
import learning from '@/data/resources/learning.json';

export default function LearningPage() {
  return (
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
  );
}

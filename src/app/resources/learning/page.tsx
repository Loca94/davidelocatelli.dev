import ResourceLink from '@/components/ResourceLink';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import Container from '@/components/Container';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';

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
              <PageDescription>bla bla bla...</PageDescription>
            </FadeIn>
          </div>

          {/* Project Cards */}
          <div>
            <div className="flex flex-col gap-6">
              <FadeIn>
                <ResourceLink
                  title="The Web Can Do That? — Google"
                  description="Discover how you can enhance your web app’s powers with the web of today."
                  href="https://thewebshowcase.withgoogle.com/"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

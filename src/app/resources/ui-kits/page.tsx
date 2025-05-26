import type { Metadata } from 'next';
import Container from '@/components/Container';
import { ResourceLink } from '@/components/Resource';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import uiKits from '@/data/resources/ui-kits.json';

export const metadata: Metadata = {
  title: 'UI Kits - Resources',
  description: '', // TODO: Add description
};

export default function UIKitPage() {
  return (
    <FadeInStagger>
      <Container>
        <div className="flex flex-col space-y-8">
          <div>
            <FadeIn>
              <PageTitle>UI KITS</PageTitle>
            </FadeIn>
            <FadeIn>
              <PageDescription>TODO: Add description</PageDescription>
            </FadeIn>
          </div>

          <div>
            <div className="flex flex-col divide-y divide-neutral-800">
              {uiKits.map((uiKit) => (
                <FadeIn key={uiKit.title} className="py-6">
                  <ResourceLink
                    title={uiKit.title}
                    description={uiKit.description}
                    href={uiKit.link}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </FadeInStagger>
  );
}

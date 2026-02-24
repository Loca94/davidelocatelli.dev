import type { Metadata } from 'next';
import Container from '@/components/container';
import { FadeInStagger, FadeIn } from '@/components/animations/fade-in';
import { PageDescription, PageTitle } from '@/components/ui/page-layout';
import { ResourceLinkList } from '@/components/resource-link';
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

          <ResourceLinkList data={uiKits} />
        </div>
      </Container>
    </FadeInStagger>
  );
}

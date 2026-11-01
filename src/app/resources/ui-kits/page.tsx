import type { Metadata } from 'next';
import Container from '@/components/Container';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import { ResourceLinkList } from '@/components/ResourceLink';
import uiKits from '@/data/resources/ui-kits.json';

export const metadata: Metadata = {
  title: 'UI Kits - Resources',
  description: '', // TODO: Add description
  robots: { index: false }, // TODO: Remove once the page is finished
};

export default function UIKitPage() {
  return (
    <>
      <PageBreadcrumb
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'UI Kits', href: '/resources/ui-kits' },
        ]}
      />
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
    </>
  );
}

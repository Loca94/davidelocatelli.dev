import { type MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import * as mdxComponents from '@/components/mdx/mdx';

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...mdxComponents,
    Image: (props: ImageProps) => <Image {...props} />,
  };
}

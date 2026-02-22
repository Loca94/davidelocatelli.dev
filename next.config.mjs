import createMDX from '@next/mdx';
import { rehypePlugins } from './src/lib/mdx-plugins/rehype.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['mdx', 'ts', 'tsx'],
  reactStrictMode: false, // IMPORTANT: Not recommended, but without this line FadeIn animation breaks with the `whileInView` attribute.
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins,
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

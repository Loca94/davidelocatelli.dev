/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // IMPORTANT: Not recommended, but without this line FadeIn animation breaks with the `whileInView` attribute.
};

export default nextConfig;

const isDev = process.env.NODE_ENV === 'development';

// No nonces: they would force every page to render dynamically.
// `https:` in img-src is for the third-party previews in `MetadataCard`.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https:",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Keeps links that were shared before the rename working
      {
        source: '/Davide_Locatelli_-_Resume.pdf',
        destination: '/resume.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
      // Skips the PDF so the CSP can't interfere with browser PDF viewers
      {
        source: '/((?!resume\\.pdf$).*)',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        ],
      },
      // Saved copies keep the full name instead of "resume.pdf"
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Davide_Locatelli_-_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

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

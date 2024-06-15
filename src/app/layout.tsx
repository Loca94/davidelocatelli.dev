import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: {
    template: '%s - Davide Locatelli',
    default: 'Davide Locatelli - Software Engineer',
  },
  description: 'Full Stack Developer at Accenture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} h-full bg-white pb-24 antialiased selection:bg-emerald-300 selection:text-emerald-900`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

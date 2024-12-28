import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://davidelocatelli.dev'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s - Davide Locatelli',
    default: 'Davide Locatelli - Software Engineer',
  },
  description:
    "I'm Davide, a software engineer based in Italy. Currently building accessible and inclusive products at Accenture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.className} h-full bg-white pb-24 antialiased selection:bg-emerald-300 selection:text-emerald-900 dark:bg-neutral-950 dark:selection:bg-emerald-800 dark:selection:text-emerald-50`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

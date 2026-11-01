import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/Header';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const description =
  "I'm Davide Locatelli, a full-stack Senior Developer based in Italy, building accessible and inclusive web products at Accenture.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s - ${SITE_NAME}`,
    default: `${SITE_NAME} - Senior Developer`,
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: '/',
    title: `${SITE_NAME} - Senior Developer`,
    description,
  },
  twitter: { card: 'summary_large_image' },
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

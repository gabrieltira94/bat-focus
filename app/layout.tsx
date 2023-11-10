import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import ThemeRegistry from '@/app/ThemeRegistry';

import './globals.css';

const inter = Fira_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Bat Focus',
  description: 'Feel life through your ears',
  icons: '/favico.ico',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

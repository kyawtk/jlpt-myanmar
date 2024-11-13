import CustomNextIntlClientProvider from '#/components/providers/CustomNextIntlClientProvider';
import ReactQueryProvider from '#/components/providers/ReactQueryProvider';
import { ThemeProvider } from '#/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import React from 'react';
import '../globals.css';

import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Next Template',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className="debug-screens">
        <CustomNextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ReactQueryProvider>
              <Toaster richColors duration={3000} />
              <NextTopLoader />
              {children}
            </ReactQueryProvider>
          </ThemeProvider>
        </CustomNextIntlClientProvider>
      </body>
    </html>
  );
}

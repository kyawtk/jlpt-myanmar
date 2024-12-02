import CustomNextIntlClientProvider from '#/components/providers/CustomNextIntlClientProvider';
import ReactQueryProvider from '#/components/providers/ReactQueryProvider';
import { ThemeProvider } from '#/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import React from 'react';
import '../globals.css';
import { Montserrat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import Backbutton from './admin/components/Backbutton';
import SessionProvider from '../sessionProvider';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'JLPT Quizzes',
  description: 'Practice Japanese Language with JLPT Quizzes',
};
const monserrat = Montserrat({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const session = await getServerSession(options);
  return (
    <html lang={locale} className={monserrat.className}>
      <body>
        <CustomNextIntlClientProvider>
          <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <ReactQueryProvider>
                <Toaster richColors duration={3000} />
                <NextTopLoader color="indigo" />
                <div className="relative">
                  {children}
                  <Backbutton />
                </div>
              </ReactQueryProvider>
            </ThemeProvider>
          </SessionProvider>
        </CustomNextIntlClientProvider>
      </body>
    </html>
  );
}

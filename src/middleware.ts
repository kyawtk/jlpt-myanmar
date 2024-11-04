import { NextRequestWithAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent } from 'next/server';
import { locales } from './constants/locales';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

// const authMiddleware = withAuth(
//   (req: NextRequestWithAuth) => intlMiddleware(req),
//   {
//     pages: {
//       signIn: '/signin?tab=student',
//       error: '/signin?tab=student',
//     },
//     callbacks: {
//       async authorized({ req, token }) {
//         console.log('shit req', req, new Date());
//         console.log('shitting', token, new Date());
//         if (!token) return false;
//         return true;
//       },
//     },
//   },
// );

export default function middleware(
  req: NextRequestWithAuth,
  event: NextFetchEvent,
) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|api).*)'],
};

import { Inter, Kanit, Noto_Sans_Myanmar, Raleway } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const noto_sans_myanmar = Noto_Sans_Myanmar({
  subsets: ['myanmar'],
  weight: ['100', '400', '900'],
  variable: '--font-noto-sans-myanmar',
});
const kanit = Kanit({
  subsets: ['thai'],
  weight: ['100', '400', '900'],
  variable: '--font-kanit',
});

export { inter, raleway, noto_sans_myanmar, kanit };

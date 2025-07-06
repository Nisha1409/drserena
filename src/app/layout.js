import "./globals.css";
import { Playfair_Display, Lora,} from 'next/font/google';
import { Libre_Bodoni } from 'next/font/google';
import { Tinos } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';

const garamond = EB_Garamond({
  subsets: ['latin'],
   weight: ['400'],
  variable: '--font-ebgaramond',
});

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tinos',
});

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-libre-bodoni',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata = {
  title: "Dr. Serena Blake",
  description: "Psychological Care for Change, Insight, and Well-Being",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} ${garamond.variable} ${tinos.variable}`}>
        {children}
      </body>
    </html>
  );
}

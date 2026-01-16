import FavIcon from '@/components/FavIcon';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import ModeToggleButton from '@/components/ModeToggleButton';
import SITE_CONFIG from '@/constants/siteConfig';
import '@/styles/main.css';
import { Metadata } from 'next';
import { Inter, Shrikhand } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-inter',
});

const shrikhand = Shrikhand({
    subsets: ['latin'],
    weight: '400', // Explicitly specify the available weight
    variable: '--font-shrikhand',
 });

export default function RootLayout({
   // Layouts must accept a children prop.
   // This will be populated with nested layouts or pages
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html
         lang="en"
         className={twJoin('scroll-smooth antialiased font-sans', inter.variable, shrikhand.variable)}
      >
         <head>
            <FavIcon />
         </head>
         <body className='text-deepWaterBlue'>
            <Header isSticky />
            <main className="relative" data-testid="entry-content">
               {children}
            </main>
            <Footer className="py-6" />
         </body>
      </html>
   );
}
export const metadata: Metadata = {
   metadataBase: new URL(SITE_CONFIG.SITE_URL),
   title: {
      default: SITE_CONFIG.SITE_NAME,
      template: `%s | ${SITE_CONFIG.SITE_NAME}`,
   },
   description: SITE_CONFIG.SITE_DESCRIPTION,
};

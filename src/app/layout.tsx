import FavIcon from '@/components/FavIcon';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ModeToggleButton from '@/components/ModeToggleButton';
import '@/styles/main.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
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
         className={twJoin('scroll-smooth antialiased', inter.className)}
      >
        <head>
        <FavIcon />
        </head>
         <body>
            <Header />
            <main className="relative" data-testid="entry-content">
               {children}
            </main>
            <ModeToggleButton className="fixed bottom-8 right-8" />
            <Footer className="py-6" />
         </body>
      </html>
   );
}
export const metadata: Metadata = {
   title: 'Home',
   description: 'Welcome to Next.js',
};

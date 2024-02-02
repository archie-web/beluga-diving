'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ModeToggleButton from '@components/ModeToggleButton';
interface Props {
   children: ReactNode;
   className?: string;
}

export function Layout({ children, className = '' }: Props) {
   //   const [isLoaded, setIsLoaded] = useState(false);
   //   useEffect(() => setIsLoaded(true), []);

   return (
      <>
         <Header />
         {/* <MenuBar /> */}
         <motion.main
            className={twMerge(
               'relative',
               // 'opacity-10 transition-opacity duration-300 ease-out',
               // isLoaded ? 'opacity-100' : '',
               className,
            )}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            data-testid="entry-content"
         >
            {children}
            <ModeToggleButton className="fixed bottom-8 right-8" />
         </motion.main>
         <Footer className="py-6" />
      </>
   );
}

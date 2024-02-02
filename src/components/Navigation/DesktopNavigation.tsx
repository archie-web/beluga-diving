'use client';

import Link from 'next/link';

import { navItems } from './navItems';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { usePathname, useRouter } from 'next/navigation';

interface NavItem {
   label: string;
   uri: string;
}

export const DesktopNavigation = () => {
   const currentPath = usePathname();
   // console.log(currentPath);

   return (
      <nav className="hidden space-x-6 lg:flex ">
         {navItems.map((item: NavItem, index: number) => (
            <Link
               key={item.label}
               href={item.uri}
               as={item.uri}
               className={twMerge(
                  'overflow-y-hidden transition-all duration-300 ease-out text-black',
                  currentPath === item.uri && 'text-primaryColour',
               )}
            >
               <motion.span
                  className="block"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                     delay: index * 0.123,
                     type: 'spring',
                     duration: 1,
                     stiffness: 100,
                  }}
               >
                  {item.label}
               </motion.span>
            </Link>
         ))}
      </nav>
   );
};

const MotionReveal = ({ item, index }: { item: NavItem; index: number }) => {
   return (
      <motion.span
         className="block"
         initial={{
            y: '100%',
         }}
         animate={{
            y: 0,
         }}
         transition={{
            delay: index * 0.123,
            type: 'spring',
            duration: 1,
            stiffness: 100,
         }}
      >
         {item.label}
      </motion.span>
   );
};

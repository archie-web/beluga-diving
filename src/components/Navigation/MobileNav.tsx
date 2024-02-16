'use client';

import SITE_CONFIG from '@/constants/siteConfig';
import { ZINDEX } from '@constants/zIndex';
import { motion, stagger, useAnimate } from 'framer-motion';
import { forwardRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import NextLink from '../NextLink';
import ContactList from './ContactList';
import { navItems } from './navItems';

export interface menuItemProps {
   label: string;
   uri: string;
   children?: any;
}

const slideAnimateTiming = 0.5;

const staggerMenuItems = stagger(0.1, {
   startDelay: slideAnimateTiming * 1.05,
});

function useMenuAnimation(isOpen: boolean) {
   const [animateItem, animate] = useAnimate();

   useEffect(() => {
      animate(
         'li',
         isOpen
            ? { opacity: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, x: 111, filter: 'blur(20px)' },
         {
            type: 'spring',
            bounce: 0.25,
            duration: slideAnimateTiming,
            delay: isOpen ? staggerMenuItems : 0,
         },
      );
   }, [isOpen, animate]);

   return animateItem;
}

interface MobileNavProps {
   isActive: boolean;
   customCloseButtonn?: boolean;
   data: any;
   // define the type of the onClick function
   onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const MobileNav = forwardRef<HTMLDivElement, MobileNavProps>(
   function MobileNavFunction({ isActive, onClick, data }, ref) {
      // const animateItem = useMenuAnimation(isActive);
      /* control user scroll when open navigation */
      useEffect(() => {
         isActive
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
      }, [isActive]);

      return (
         <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: isActive ? 0 : '100%' }}
            transition={{
               type: 'spring',
               // bounce: 0,
               duration: slideAnimateTiming,
               stiffness: 80,
               damping: 15,
            }}
            ref={ref}
            className={twMerge(
               'p-space fixed right-0 top-0 flex h-dvh w-full flex-col justify-center gap-20 overflow-y-auto overflow-x-hidden bg-slate-100  md:w-1/3',
            )}
            style={{ zIndex: ZINDEX.NAVIGATION }}
         >
            <div className="space-y-sm" data-testid="nav-content">
               <ul
                  className="relative -translate-y-4 space-y-[1.25em] text-2xl opacity-90"
                  id="primary-menu"
                  // ref={animateItem}
               >
                  {data.map((item: menuItemProps) => (
                     <li key={item.label}>
                        <NextLink
                           className="font-extrabold uppercase"
                           href={item.uri}
                           onClick={onClick}
                        >
                           {item.label}
                        </NextLink>
                     </li>
                  ))}
                  <li>
                     Contact Us: <br />
                     <a href={`mailto:${SITE_CONFIG.EMAIL}`}>
                        {SITE_CONFIG.EMAIL}
                     </a>{' '}
                  </li>
               </ul>
            </div>
         </motion.nav>
      );
   },
);

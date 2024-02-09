import SITE_CONFIG from '@/constants/siteConfig';
import { Logo } from '@/components/ui/Logo';
import { ZINDEX } from '@constants/zIndex';
import { motion, stagger, useAnimate } from 'framer-motion';
import { forwardRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import NextLink from '../NextLink';
import ContactList from './ContactList';
import { navItems } from './navItems';
import SubMenuItems from './SubMenuItems';

export interface menuItemProps {
   label: string;
   children: any;
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
   //    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MobileNav = forwardRef<HTMLDivElement, MobileNavProps>(
   function MobileNavFunction({ isActive, data }, ref) {
      const animateItem = useMenuAnimation(isActive);
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
               //    bounce: 0,
               duration: slideAnimateTiming,
               stiffness: 80,
               damping: 15,
            }}
            ref={ref}
            className={twMerge(
               'p-space fixed right-0 top-0 flex h-dvh w-full flex-col justify-center gap-20 overflow-y-auto overflow-x-hidden bg-white md:w-1/3',
            )}
            style={{ zIndex: ZINDEX.NAVIGATION }}
         >
            <div className="space-y-sm" data-testid="nav-content">
               <ul
                  className="relative space-y-[1.5em]"
                  id="primary-menu"
                  ref={animateItem}
               >
                  {navItems.map((item) => (
                     <li key={item.label}>
                        <NextLink
                           className="text-2xl font-extrabold uppercase"
                           href={item.uri}
                        >
                           {item.label}
                        </NextLink>
                     </li>
                  ))}
               </ul>
            </div>

            <ContactList
               phone={SITE_CONFIG.PHONE_NUMBER}
               email="hello@archie.kiwi"
            />
         </motion.nav>
      );
   },
);

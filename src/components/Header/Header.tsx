'use client';
import { HStack } from '@components/Stack';
import Hamburger from '@/components/ui/Hamburger';
import { Logo } from '@/components/ui/Logo';

import { DesktopNavigation, MobileNav } from '@components/Navigation';
import { ZINDEX } from '@constants/zIndex';
import { useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ARR = Array.from({ length: 3 }, (_, index) => index + 1);

// extends HTMLAttributes<HTMLDivElement> but omit className
interface HeaderProps
   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
   isSticky?: boolean;
   className?: string;
}

export const Header = ({
   isSticky = false,
   className = '',
   ...rest
}: HeaderProps) => {
   const [isActive, setActive] = useState(false);
   const headerRef = useRef<HTMLDivElement>(null);
   const menuRef = useRef<HTMLDivElement>(null);
   const hamburgerRef = useRef<HTMLButtonElement>(null);

   // set window scroll state
   const [isScroll, setScroll] = useState(false);

   // add event listner when scroll down
   useEffect(() => {
      const handleScroll = () => {
         if (headerRef.current) {
            if (window.scrollY > 100) {
               setScroll(true);
            } else {
               setScroll(false);
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Use the useCallback hook to memoize the handleClick function,
   // which can improve performance by preventing unnecessary re-renders of child components.

   const handleHamburgerClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
         e.stopPropagation();
         e.preventDefault();
         setActive(!isActive);
      },
      [isActive],
   );

   // create handel link click function
   const handelLinkClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
         e.stopPropagation();
         setActive(false);
      },
      [],
   );

   const handleOutsideClick = useCallback(
      (e: MouseEvent | TouchEvent) => {
         // first checks if the menuRef.current and hamburgerRef.current elements exist
         if (!menuRef.current) return;
         const isClickedOutside =
            menuRef.current &&
            !menuRef.current.contains(e.target as Node) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(e.target as Node);

         if (isClickedOutside) {
            setActive(false);
         }
      },
      [menuRef, hamburgerRef],
   );

   // listens for the 'keydown' event and checks if the pressed key is the 'Escape' key using the 'key' property.
   // If the 'Escape' key is pressed, it sets the active state to false.
   // The event listener is added and removed using the 'useEffect' hook,

   useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
         const ESCAPE_KEY = 'Escape';
         if (e.key === ESCAPE_KEY) {
            setActive(false);
         }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => {
         document.removeEventListener('keydown', handleKeyPress);
      };
   }, []);

   // add and remove the event listener when the component mounts and unmounts, respectively.
   useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () =>
         document.removeEventListener('mousedown', handleOutsideClick);
   }, [handleOutsideClick]);

   return (
      <header
         className={twMerge(
            'flex items-center justify-end px-4 py-4 lg:px-8',
            isSticky
               ? 'bg-white/80__ __backdrop-blur-sm fixed w-full'
               : 'relative',
            className,
         )}
         ref={headerRef}
         style={{ zIndex: isSticky ? ZINDEX.HEADER : 'unset' }}
         data-testid={isSticky ? 'sticky-header' : 'header'}
         {...rest}
      >
         {/* <Logo
            className={twMerge(
               'transition-opacity ease-in-lazy duration-700',
               isScroll ? 'opacity-0' : 'opacity-100',
            )}
         /> */}
         {/* <div className="text-[44px] leading-none font-black tracking-tighter">
            Beluga<br />
            Diving
         </div> */}
         <HStack spacing="lg">
            {/* <DesktopNavigation /> */}
            <MobileNav
               isActive={isActive}
               data={ARR}
               ref={menuRef}
               onClick={handelLinkClick}
            />

            <Hamburger
               onClick={handleHamburgerClick}
               isOpen={isActive}
               ref={hamburgerRef}
               style={{ zIndex: ZINDEX.NAVIGATION + 1 }}
            />
         </HStack>

         <div
            className={twMerge(
               "fixed inset-0 w-full transition-all content-['']",
               isActive ? 'visible bg-black/40 backdrop-blur-sm' : 'invisible',
            )}
            style={{ zIndex: ZINDEX.NAVIGATION - 1 }}
         />
      </header>
   );
};

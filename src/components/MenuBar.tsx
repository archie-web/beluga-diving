import { ZINDEX } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const MenuBar: React.FC = () => {
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);

   const handleScroll = (event: WheelEvent) => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = event.deltaY < 0;

      setVisible(scrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
   };

   useEffect(() => {
      const scrollHandler = (event: WheelEvent) => {
         handleScroll(event);
      };

      window.addEventListener('wheel', scrollHandler);

      return () => {
         window.removeEventListener('wheel', scrollHandler);
      };
   }, []);

   return (
      <nav
         className={`fixed bottom-0 left-0 w-full bg-heritageCream  text-black transition-opacity ${
            visible ? 'opacity-100' : 'opacity-0'
         }`}
         style={{ transitionDuration: '300ms', zIndex: ZINDEX.HEADER }}
      >
         {/* scroll down to hide the menu bar, and scroll up to show it again. */}
         <ul className="flex justify-around">
            {[1, 2, 3, 4, 5].map((number) => (
               <li
                  className="group flex w-1/5 flex-col items-center gap-2.5 py-3 transition-all hover:bg-black "
                  key={number}
               >
                  <Image
                     src={'https://via.placeholder.com/800x600/#FDF7F3'}
                     width={40}
                     height={24}
                     alt={number.toString()}
                     role="presentation"
                     className="shrink-0"
                  />
                  <Link
                     className="text-[8.5px] font-bold uppercase tracking-[0.01em] group-hover:text-heritageCream"
                     href="/"
                  >
                     menu{number}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

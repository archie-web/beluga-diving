'use client';
import { Container } from '@/components/Container';
import { ZINDEX } from '@/constants';
import { motion } from 'framer-motion';
import {
   HTMLAttributes,
   useEffect,
   useState,
   useRef,
   useCallback,
} from 'react';
import { twMerge } from 'tailwind-merge';

type Item = string;

interface MagellanProps
   extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
   className?: string;
   items: Item[];
}

const Indicator = ({
   x,
   y,
   thickness,
   className = '',
}: {
   x: number | null;
   y?: number | null;
   thickness: number | null;
   className?: string;
}) => (
   <motion.div
      className={twMerge(
         'bg-brandColour absolute bottom-0 block h-2 w-16',
         x === null ? 'hidden' : 'block',
         className,
      )}
      initial={{ x: 0, width: 0, y: 0 }}
      animate={{
         x: x ? x : 0,
         y: y ? y : 0,
         width: x ? thickness! : 0,
      }}
      transition={{ duration: 0.3, delay: 0.2 }}
   />
);

export const Magellan = ({ className = '', items }: MagellanProps) => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const [indicatorPosition, setIndicatorPosition] = useState<number | null>(
      null,
   );
   const [indicatorWidth, setIndicatorWidth] = useState<number | null>(null);
   const linkElementsRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

   //    const handleClick = (index: number) => {
   //       setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
   //       if (!linkElementsRef.current) {
   //          return;
   //       }
   //       // get current link x position
   //       const linkX = linkElementsRef.current[index].getBoundingClientRect().x;
   //       // get current link width
   //       const linkWidth =
   //          linkElementsRef.current[index].getBoundingClientRect().width;
   //       setIndicatorWidth(linkWidth);

   //       //   setIndicatorPosition(linkX + linkWidth / 2);
   //       setIndicatorPosition(linkX);
   //    };

   const handleClick = useCallback((index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // toggle active index
      if (!linkElementsRef.current) {
         return;
      }
      const { x, width } =
         linkElementsRef.current[index].getBoundingClientRect(); // get link position and width
      setIndicatorWidth(width);
      setIndicatorPosition(x);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollOffset = window.pageYOffset;
         const linkElements = linkElementsRef.current;
         if (linkElements) {
            linkElements.forEach((link, index) => {
               const sectionId = link.getAttribute('data-anchor'); // get section id from link

               if (sectionId) {
                  const section = document.getElementById(
                     sectionId,
                  ) as HTMLElement; // get section element

                  // get section position
                  const sectionOffset =
                     section.offsetTop -
                     parseInt(window.getComputedStyle(section).paddingTop);

                  if (scrollOffset >= sectionOffset) {
                     // if scroll offset is greater than section offset
                     setActiveIndex(index);

                     // get link position
                     const linkX = link.getBoundingClientRect().x;
                     // get link width
                     const linkWidth = link.getBoundingClientRect().width;
                     setIndicatorWidth(linkWidth);
                     setIndicatorPosition(linkX);
                  }
               }
            });
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      linkElementsRef.current =
         document.querySelectorAll<HTMLAnchorElement>('.anchor-link');
   }, [items]);

   return (
      <section
         className={twMerge(
            'space-y-sm sticky top-0 border-b-8 bg-white/80 py-8',
            className,
         )}
         style={{ zIndex: ZINDEX.HEADER + 2 }}
      >
         <div className="mx-auto max-w-7xl">
            <ul className="flex gap-[5%]">
               {items.map((item: any, index: number) => (
                  <li key={index} className="">
                     <a
                        href={`#anchor-${item}`}
                        className={twMerge(
                           'anchor-link inline-flex font-bold',
                           activeIndex === index && 'text-brandColour',
                        )}
                        onClick={() => handleClick(index)}
                        data-anchor={'anchor-' + item}
                     >
                        anchor {item}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
         <Indicator x={indicatorPosition} y={8} thickness={indicatorWidth} />
      </section>
   );
};

import parse from 'html-react-parser';
import { HTMLAttributes, useState } from 'react';
import { AccordionButton } from './';
import { AccordionImage } from './AccordionImage';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

export type AccordionItem = {
   id: number;
   title?: string;
   content?: string;
   imageUri?: string;
};

export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
   items: AccordionItem[];
   className?: string;
   hasImage?: boolean;
};

const duration = 0.8;
const initial = { scaleX: 0 };
const animate = {
   scaleX: 1,
   transition: {
      duration: duration,
      ease: 'easeInOut',
   },
};

const staggerAnimate = {
   show: {
      transition: {
         staggerChildren: duration / 4,
      },
   },
};
const childAnimate = {
   hidden: initial,
   show: animate,
};

type StaggerLineProps = {
   className?: string;
};

const StaggerLine = ({ className }: StaggerLineProps) => (
   <motion.i
      className={twMerge(
         'absolute left-0 h-[1px] w-full origin-left bg-black',
         className,
      )}
      variants={childAnimate}
   />
);

// const AnimateLine = ({ index, className, position }: any) => {
//    return (
//       <motion.i
//          initial={{ scaleX: 0 }}
//          whileInView={{ scaleX: 1 }}
//          viewport={{ once: true }}
//          transition={{
//             type: 'spring',
//             duration: 1,
//             mass: 0.35,
//             delay: index * 0.123,
//          }}
//          className={twMerge(
//             'bg-primaryColour absolute left-0 h-[1px] w-full origin-left',
//             position === 'bottom' ? 'bottom-0' : 'top-0',
//             className,
//          )}
//       />
//    );
// };

export const Accordion = ({
   items,
   className,
   hasImage,
   ...rest
}: AccordionProps) => {
   const [activeIndex, setActiveIndex] = useState<number | null>(items[0].id); // always open first item

   const handleClick = (index: number) => {
      if (activeIndex === index) {
         setActiveIndex(null);
      } else {
         setActiveIndex(index);
      }
   };

   // style for the accordion image
   // ${hasImage ? 'grid w-full grid-cols-2 gap-10' : 'mx-auto'}

   return (
      <div
         className={twMerge('mx-auto', className)}
         data-testid="accordion-items"
         {...rest}
      >
         <motion.div
            variants={staggerAnimate}
            initial="hidden"
            whileInView="show"
         >
            {items.map((item, index) => (
               <motion.div
                  className={twMerge(
                     'relative pr-4 hover:bg-gray-100',
                     activeIndex === item.id && 'bg-gray-50',
                  )}
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                     delay: index * 0.25,
                     duration: duration/2,
                  }}
               >
                  {index === 0 && <StaggerLine className="top-0" />}
                  <StaggerLine className="bottom-0" />

                  <AccordionButton
                     title={item.title}
                     content={item.content}
                     onClick={() => item.content && handleClick(item.id)}
                     aria-expanded={activeIndex === item.id}
                     isOpen={activeIndex === item.id}
                  />
                  <AnimatePresence initial={false}>
                     {activeIndex === item.id && (
                        <motion.div
                           key="accordion-content" // Direct children must each have a unique key prop so AnimatePresence can track their presence in the tree
                           initial="collapsed"
                           animate="open"
                           exit="collapsed"
                           variants={{
                              open: {
                                 opacity: 1,
                                 height: 'auto',
                              },
                              collapsed: {
                                 opacity: 0,
                                 height: 0,
                              },
                           }}
                           transition={{
                              duration: duration,
                              type: 'spring',
                              bounce: 0.25,
                              // damping: 13,
                              // ease: [0.04, 0.62, 0.23, 0.98],
                           }}
                           className={twMerge('overflow-hidden')}
                        >
                           {!!item.content && (
                              <div className="space-y-xs pb-[1.5em]">
                                 {parse(item.content)}
                              </div>
                           )}
                        </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
            ))}
         </motion.div>

         {/* optional to have image */}
         {hasImage && <AccordionImage props={items} activeItem={activeIndex} />}
      </div>
   );
};

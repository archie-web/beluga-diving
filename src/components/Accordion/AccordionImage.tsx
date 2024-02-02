import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { AccordionItem } from './Accordion';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type AccordionImageProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
   props: AccordionItem[];
   activeItem: number | null;
   className?: string;
};

export const AccordionImage = ({
   props,
   activeItem,
   className = '',
   ...rest
}: AccordionImageProps) => {
   return (
      <div className={twMerge('relative', className)} {...rest}>
         {props
            .filter((item) => item.imageUri)
            .map((item, index) => (
               <AnimatePresence key={item.id} initial={false}>
                  {activeItem === item.id && (
                     <motion.figure
                        key="accordion-image"
                        initial={{ opacity: 0, y: '-33%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '33%' }}
                        transition={{
                           duration: 0.5,
                           type: 'spring',
                            bounce: 0.25,
                        }}
                        className="absolute inset-0 aspect-square overflow-hidden"
                     >
                        <Image
                           src={item.imageUri || ''} // Provide a default value in case it's undefined
                           alt={item.title || ''}
                           width={800}
                           height={800}
                           className="w-full object-cover"
                        />
                     </motion.figure>
                  )}
               </AnimatePresence>
            ))}

         {/* {items.map(
            (item, index) =>
               item.imageUri && (
                  <Image
                     key={item.id}
                     src={item.imageUri}
                     alt="accordion image"
                     className={twMerge(
                        'absolute inset-0 aspect-square w-full object-cover transition-opacity duration-1000',
                        activeItem === index ? 'opacity-100' : 'opacity-0',
                     )}
                     // className={`aspect-square w-full object-cover ${
                     //    activeItem === index ? 'opacity-100' : 'opacity-0'
                     // }`}
                     width={800}
                     height={800}
                  />
               ),
         )} */}
      </div>
   );
};

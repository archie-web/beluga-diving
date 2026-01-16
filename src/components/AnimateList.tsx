'use client';
import { Text } from '@/components/ui/text';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type ListItemProps = {
   title: string;
   content: string;
   imageUri?: string;
};
type ListProps = {
   items: ListItemProps[];
};
export function AnimateList({ items }: ListProps) {
   const duration = 0.55;
   const initial = { opacity: 0, y: '16.66%' };
   const animate = { opacity: 1, y: 0, transition: { duration: duration } };

   const staggerAnimate = {
      show: {
         transition: {
            staggerChildren: duration / 2,
         },
      },
   };
   const animateItem = {
      hidden: initial,
      show: animate,
   };
   return (
      <motion.ul
         variants={staggerAnimate}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="grid gap-10 gap-x-12 md:grid-cols-2 lg:gap-y-24"
      >
         {items.map((item: ListItemProps, index: number) => (
            <motion.li
               className="flex flex-col items-center gap-6 lg:flex-row lg:items-start"
               key={index}
               variants={animateItem}
            >
               {item.imageUri && (
                  <div className="shrink-0">
                     <Image
                        src={item.imageUri}
                        width={120}
                        height={120}
                        alt={item.title}
                        className="h-24 w-auto object-contain"
                     />
                  </div>
               )}

               <div className="space-y-4 text-center lg:text-left">
                  <h3 className="h3">{item.title}</h3>
                  <Text>{item.content}</Text>
               </div>
            </motion.li>
         ))}
      </motion.ul>
   );
}

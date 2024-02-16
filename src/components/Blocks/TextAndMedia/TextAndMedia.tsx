'use client';

import { Container } from '@/components/Container';
import NextLink, { LinkFieldProps } from '@/components/NextLink';
import { ElementOrSelector, animate, inView, stagger } from 'motion';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { whyUs } from '@/data/whyUs';

import {
   MotionValue,
   motion,
   useScroll,
   useSpring,
   useTransform,
} from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number | string) {
   return useTransform(value, [0, 1], [-distance, distance]);
}

const transition = {
   type: 'spring',
   stiffness: 80, // Adjusted stiffness
   damping: 50,
   restDelta: 0.001,
};

const enum MediaPosition {
   LEFT = 'left',
   RIGHT = 'right',
   TOP = 'top',
   BOTTOM = 'bottom',
}

export type MediaProps = {
   url: string;
   title: string;
   kind: string | 'image' | 'video';
   embeddedAsset?: { image: string; title: string; url: string };
};

export type HeadingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextAndImageProps {
   className?: string;
   reversePosition?: boolean;
   data?: {
      title: string;
      content?: string;
   };
}

export const TextAndMedia = ({
   className = '',
   reversePosition = false,
   data,
}: TextAndImageProps) => {
   //    const fadeInRef = useRef<HTMLDivElement>(null);
   //    useEffect(() => {
   //       if (!fadeInRef.current) return;
   //       inView(
   //          fadeInRef.current,
   //          ({ target }) => {
   //             animate(
   //                target.querySelectorAll('*') as ElementOrSelector,
   //                { opacity: 1, transform: 'none' },
   //                {
   //                   delay: stagger(0.1),
   //                   duration: 1,
   //                   easing: [0.22, 0.03, 0.26, 1],
   //                },
   //             );
   //          },
   //          { amount: 0.25 },
   //       );
   //    }, []);

   const parallaxRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: parallaxRef,
      offset: ['start end', 'end start'],
   });

   const innerScrollY = useParallax(scrollYProgress, 77);
   const innerY = useSpring(innerScrollY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });

   const outerScrollY = useParallax(scrollYProgress, -88);
   const y = useSpring(outerScrollY, {
      stiffness: 100,
      damping: 50,
      restDelta: 0.001,
   });

   return (
      <section className={twMerge('pt-space pb-10', className)} id="about-us">
         <Container size="2xl">
            <div className={twMerge('grid gap-6 lg:grid-cols-2 lg:gap-16')}>
               <div className="relative aspect-[200/185] overflow-hidden">
                  <motion.div
                     style={{ y }}
                     transition={transition}
                     ref={parallaxRef}
                     className="size-full"
                  >
                     <Image
                        src="/images/img-whale.jpg"
                        alt="whale"
                        width={1024}
                        height={1024}
                        className="size-full scale-125 object-cover"
                     />
                  </motion.div>

                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 200 185"
                     width={200}
                     height={185}
                     className="absolute inset-0 size-full scale-[101%] fill-white"
                  >
                     <path d="M0 0v185h200V0H0zm170.9 164.7c-17.3 14.7-42.9 18.6-66.2 16.1-23.1-2.4-43.8-11.4-62.6-26.2C23.2 139.9 6.3 119.2 4 96.2 1.8 73.2 14.2 48 33 30.5S77 3 101.8 3.5c24.6.5 49 11.4 66.2 28.9 17.3 17.5 27.5 41.9 28.2 66.7.8 25.1-8.1 50.6-25.3 65.6z" />
                  </svg>
               </div>

               <div className="flex flex-col justify-center space-y-16">
                  <h2 className="h1">Why choose us</h2>
                  <FadeInList items={whyUs} />
               </div>
            </div>
         </Container>
      </section>
   );
};

type ListItemProps = {
   title: string;
   content?: string;
};

type ListProps = {
   items: ListItemProps[];
};

function FadeInList({ items }: ListProps) {
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
         className="space-y-6 max-w-xl mx-auto lg:mx-0"
      >
         {items.map((item: ListItemProps, index: number) => (
            <motion.li className="space-y-2" key={index} variants={animateItem}>
               <div className="flex items-center gap-4">
                  <CheckCircleIcon className="size-12 text-sky-300 " />
                  <h3 className="h3 leading-none text-sky-900">{item.title}</h3>
               </div>
               {item.content && <Text className="pl-16">{item.content}</Text>}
            </motion.li>
         ))}
      </motion.ul>
   );
}

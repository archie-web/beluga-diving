"use client"

import { Container } from '@components/Container';
import { HTMLAttributes, useEffect, useRef } from 'react';
import {
   stagger,
   motion,
   useAnimate,
   useInView,
   useAnimation,
} from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/Buttons';
import Link from 'next/link';
import NextLink from '../NextLink';

interface InternalBannerProps extends HTMLAttributes<HTMLElement> {
   className?: string;
   heading: string;
   bodyText?: string;
   ctaButton?: any;
}

// const staggerDelay = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation() {
//    const [scope, animate] = useAnimate();

//    animate(
//       'div',
//       { opacity: 1, x: 0 },
//       {
//          duration: 0.2,
//          delay: staggerDelay,
//       },
//    );

//    return scope;
// }

export const InternalBanner = ({
   heading = 'Fluid Type Scale',
   className,
   bodyText,
   ctaButton,
   ...rest
}: InternalBannerProps) => {
   const duration = 1;
   const initial = { opacity: 0, x: '-16.67%' };
   const animate = {
      opacity: 1,
      x: 0,
      transition: {
         duration: duration,
         type: 'spring',
         //  bounce: 0.5,
         //  stiffness: 100,
         restSpeed: 0.5,
         opacity: { duration: duration * 1.25 }, // A different set of transition settings can be defined for each specific value.
      },
   };

   const staggerAnimate = {
      show: {
         transition: {
            staggerChildren: duration / 3,
            delayChildren: duration / 2,
            // staggerDirection: -1, // staggers from the last to the first
         },
      },
   };
   const childAnimate = {
      hidden: initial,
      show: animate,
   };

   return (
      <section
         className={twMerge(`py-space bg-slate-100 dark:bg-black`, className)}
         data-testid="internal-banner"
         {...rest}
      >
         <Container size="lg">
            <motion.div
               variants={staggerAnimate}
               initial="hidden"
               whileInView="show"
               className="stagger-animate space-y-6"
            >
               <motion.h1
                  //   variants={childAnimate}
                  className={`h1 font-semibold`}
               >
                  {heading}
               </motion.h1>
               {bodyText && (
                  <motion.p className="max-w-3xl" variants={childAnimate}>
                     {bodyText}
                  </motion.p>
               )}
               {ctaButton && (
                  <motion.div variants={childAnimate}>
                     <NextLink className="button" href={ctaButton.href}>
                        {ctaButton.label}
                     </NextLink>
                  </motion.div>
               )}
            </motion.div>
            {/* <MotionAnimate className="flex h-full flex-col gap-5 [&>*]:-translate-x-10 [&>*]:opacity-0">
               <h1 className={`h1 font-semibold`}>{heading}</h1>
               <p className={`max-w-3xl `}>
                  A modular type scale consists of a baseline font size and
                  proportionally smaller and larger font sizes. Traditionally,
                  design systems used static type scales, where each step has a
                  fixed font size at every viewport width.
               </p>
               <div className=''>
                  <button className={`button`}>CTA button</button>
               </div>
            </MotionAnimate> */}
         </Container>
      </section>
   );
};

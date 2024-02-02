import { motion, useAnimation, useInView, Transition } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface AnimationProps {
   children: ReactNode;
   stagger?: boolean;
}

// Transition variants
export const FadeInSlideRight = {
   hidden: { opacity: 0, width: 0 },
   show: {
      opacity: 1,
      width: '100%',
      transition: {
         type: 'spring',
         duration: 1,
         mass: 0.5,
      } as Transition,
   },
};

export const FadeSlideUp = {
   hidden: { opacity: 0, y: 30 },
   show: {
      opacity: 1,
      width: '100%',
      transition: { type: 'spring', duration: 0.88 } as Transition,
   },
};

/**
 * AnimateIn - Animate by simply fading in
 * - Optionally stagger the animation of children
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.stagger][false] - Stagger the animation of children, if not then a delay is used.
 * @returns Framer Motion <motion.div>{children}</motion.div>
 */
export function AnimateIn({ children, stagger = false }: AnimationProps) {
   const controls = useAnimation();
   const ref = useRef<HTMLDivElement>(null);
   const inView = useInView(ref, {
      once: true,
      amount: 'some',
   });
   const transition = stagger
      ? { staggerChildren: 0.1, ease: 'easeInOut', delayChildren: 0.5 }
      : { delay: 0.1, ease: 'easeInOut' };

   useEffect(() => {
      if (inView) {
         controls.start('show');
      } else {
         controls.start('hidden');
      }
   }, [controls, inView]);

   return (
      <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={{
            hidden: { opacity: 0 },
            show: {
               opacity: 1,
               transition,
            },
         }}
      >
         {children}
      </motion.div>
   );
}

/**
 * AnimateUp - Animate children from the bottom up
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns Framer Motion <motion.div>{children}</motion.div>
 */
export function AnimateUp({ children }: AnimationProps) {
   const controls = useAnimation();
   const ref = useRef<HTMLDivElement>(null);
   const inView = useInView(ref, {
      once: true,
      amount: 'some',
   });
   const transition = { delay: 0.2, ease: 'easeInOut' };

   useEffect(() => {
      if (inView) {
         controls.start('show');
      } else {
         controls.start('hidden');
      }
   }, [controls, inView]);

   return (
      <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
               opacity: 1,
               y: 0,
               transition,
            },
         }}
      >
         {children}
      </motion.div>
   );
}

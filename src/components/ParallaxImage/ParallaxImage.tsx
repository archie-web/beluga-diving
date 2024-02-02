import Image from 'next/image';

import { twMerge } from 'tailwind-merge';
import {
   MotionValue,
   motion,
   useScroll,
   useSpring,
   useTransform,
} from 'framer-motion';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number | string) {
   return useTransform(value, [0, 1], [-distance, distance]);
}

const transition = {
   type: 'spring',
   stiffness: 80, // Adjusted stiffness
   damping: 50,
   restDelta: 0.001,
};

export const ParallaxImage = ({
   outerScroll,
   innerScroll,
   src,
   containerClass,
   imageClass,
   distance = 100,
   innerSpeed = 100,
   outerSpeed = 200,
   ratio,
   ...rest
}: any) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });

   const parallaxY = useParallax(scrollYProgress, distance);
   const innerScrollY = useParallax(scrollYProgress, innerSpeed);
   const innerY = useSpring(innerScrollY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });

   const outerScrollY = useParallax(scrollYProgress, outerSpeed);
   const y = useSpring(outerScrollY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });
   return (
      <motion.div
         style={{ y }}
         transition={transition}
         className={twMerge(
            'bg-champagneYellow/40__ border__ inline-flex',
            containerClass,
         )}
         ref={ref}
      >
         <div className={twMerge('w-full overflow-hidden', imageClass)}>
            <motion.figure
               className={twMerge('', ratio)}
               style={{ y: innerY }}
               transition={transition}
               // initial={{ scale: 2, opacity: 0 }}
               // whileInView={{ scale: 1, opacity: 1 }}
            >
               <Image
                  src={src}
                  width={600}
                  height={800}
                  alt=""
                  className={twMerge('h-full w-full scale-150 object-cover')}
                  {...rest}
               />
            </motion.figure>
         </div>
      </motion.div>
   );
};

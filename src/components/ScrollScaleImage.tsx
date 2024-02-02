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
import { useParallax } from '@/lib/animateStyle';

const transition = {
   type: 'spring',
   stiffness: 100,
   damping: 50,
   bounce: 0,
};

export const ScrollScaleImage = ({
   src,
   className,
   distance = 100,
   zoom = 1.25,
   fadeOut = 0.5,
   ...rest
}: any) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });

   const parallaxY = useParallax(scrollYProgress, distance);

   const scale = useTransform(scrollYProgress, [0, 1], [1, zoom]);
   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, fadeOut]);
   const y = useSpring(parallaxY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });
   return (
      <div
         className={twMerge('w-full overflow-hidden bg-black', className)}
         ref={ref}
      >
         <motion.figure
            className={twMerge('aspect-6/4')}
            style={{ y, scale, opacity }}
            transition={transition}
         >
            <Image
               src={src}
               width={600}
               height={800}
               alt=""
               className={twMerge('h-full w-full scale-125 object-cover')}
               {...rest}
            />
         </motion.figure>
      </div>
   );
};

import { motion, useScroll, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const ProgressBar = ({ className = 'bg-blue-500' }) => {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   return (
      <>
         <motion.i
            className={twMerge(
               'fixed left-0 top-0 z-[9999] h-2 w-full origin-left',
               className,
            )}
            style={{ scaleX }}
         />
         {/* test */}
         {/* <motion.p className={twMerge('insect-0 fixed')}>{scaleX}</motion.p> */}
      </>
   );
};

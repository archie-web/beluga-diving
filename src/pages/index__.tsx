import Layout from '@/components/Layout';
import NextHead from '@/components/NextHead';
import {
   MotionValue,
   motion,
   useScroll,
   useSpring,
   useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import ParallaxImage from '../components/ParallaxImage';

import theme from '@/theme';

function useParallax(value: MotionValue<number>, distance: number | string) {
   return useTransform(value, [0, 1], [-distance, distance]);
}

const duration = 1.33;
export default function Home() {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });

   const parallaxY = useParallax(scrollYProgress, 100);
   const parallaxY2 = useParallax(scrollYProgress, 300);
   const y = useSpring(parallaxY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });

   const y2 = useSpring(parallaxY2, {
      stiffness: 100,
      damping: 33,
      restDelta: 0.001,
   });

   const background = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      ['#cccccc', theme?.colors?.magicLilac, theme?.colors?.champagneYellow],
   );

   //    useEffect(() => {
   //       console.log('parallaxY', parallaxY.get());
   //    }, [parallaxY, scrollYProgress]);
   return (
      <Layout className="relative">
         <NextHead />

         <motion.div style={{ background }}>
            <div className="__bg-blue-50 h-screen" />
            <div className="h-screen" />
            <div className="__bg-blue-100 gap-[3%] px-[5%]" ref={ref}>
               <h1 className="relative z-10">
                  {/* <span>Grow faster with the experts</span> */}
                  <motion.span
                     className="block"
                     style={{
                        y: y,
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center top',
                     }}
                     //   initial={{ rotateX: 180, opacity: 0 }}
                     //   whileInView={{ rotateX: 0, opacity: 1 }}
                     //   transition={{ duration: duration, type: 'spring' }}
                  >
                     Grow faster with the experts
                  </motion.span>
                  <motion.span
                     className="block"
                     style={{
                        y: y2,
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center top',
                     }}
                     //   initial={{ rotateX: 180, opacity: 0 }}
                     //   whileInView={{ rotateX: 0, opacity: 1 }}
                     //   transition={{ duration: duration, type: 'spring' }}
                  >
                     in commercial creativity
                  </motion.span>
               </h1>
               {/* trigger REF */}
               <ParallaxImage
                  innerSpeed={100}
                  outerSpeed={200}
                  containerClass="w-1/2"
                  src="/images/placeholder-project.jpg"
               />
               <ParallaxImage
                  src="/images/placeholder-image.jpg"
                  containerClass="justify-end w-1/2"
                  imageClass="w-2/3 max-w-[550px]"
                  ratio="aspect-square"
               />
               <ParallaxImage
                  src="/images/placeholder-building.jpg"
                  outerSpeed={22}
                  containerClass="justify-end w-1/2"
                  imageClass="w-2/3 max-w-[480px]"
                  ratio="aspect-square"
               />
               <ParallaxImage
                  src="/images/placeholder-project.jpg"
                  outerSpeed={88}
                  containerClass="w-1/2"
                  imageClass="w-2/3 lg:ml-20"
                  ratio="aspect-[3/4]"
               />
            </div>
            <div className="h-screen" />
         </motion.div>
      </Layout>
   );
}

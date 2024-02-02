import { useParallax } from '@/lib/animateStyle';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ParallaxImage from './ParallaxImage';

export const ParallaxTextMedia = ({ imageSrc }: any) => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });
   // const y = useParallax(scrollYProgress, 300);
   const parallaxY = useParallax(scrollYProgress, -100);

   const y = useSpring(parallaxY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });

   return (
      <div className="mx-[5%] grid items-center gap-10 border-b-2 border-t-2 border-black py-20 lg:grid-cols-2">
         <div className="sticky_ right-0 top-0" ref={ref}>
            <ParallaxImage src={imageSrc} containerClass="w-full" />
         </div>
         <div className="flex items-center">
            <motion.article
               className="space-y-md max-w-3xl"
               initial={{
                  opacity: 0,
               }}
               whileInView={{ opacity: 1 }}
               transition={{
                  duration: 1.33,
               }}
               style={{ y }}
            >
               <h3 className="h1">{`#007`}</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  nostrum ea debitis maxime maiores atque tempora sunt,
                  architecto dolore in voluptatibus? Corrupti error id optio nam
                  placeat possimus repellat doloribus recusandae, magni
                  voluptas.
               </p>
            </motion.article>
         </div>
      </div>
   );
};
export default ParallaxTextMedia;

// export default function ParallaxSection() {
//    return (
//       <section className="relative ">
//          {[1].map((image) => (
//             <ParaBlock id={image} key={image} />
//          ))}
//       </section>
//    );
// }

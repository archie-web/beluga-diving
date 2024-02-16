'use client';
import {
   MotionValue,
   motion,
   useScroll,
   useSpring,
   useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import { Logo } from '../ui/Logo';

function useParallax(value: MotionValue<number>, distance: number | string) {
   return useTransform(value, [0, 1], [-distance, distance]);
}

const transition = {
   type: 'spring',
   stiffness: 80, // Adjusted stiffness
   damping: 50,
   restDelta: 0.001,
};

const Banner = ({ speed = -125 }) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });

   const outerScrollY = useParallax(scrollYProgress, speed);
   const y = useSpring(outerScrollY, {
      stiffness: 80,
      damping: 50,
      restDelta: 0.001,
   });

   return (
      <section className="banner ralative">
         <div className="pb-space lg:hidden flex justify-end">
            <Image
               src="/images/img-divers-sm.jpg"
               className="w-full max-w-3xl"
               alt="diving into the sea"
               width={876}
               height={743}
               priority
            />
         </div>
         <div className="absolute right-0 top-0 z-[-1] hidden w-1/2 lg:block max-w-3xl 3xl:max-w-4xl">
            <div className="bg-deepWaterBlue relative aspect-square overflow-hidden">
               <motion.div style={{ y }} transition={transition} ref={ref}>
                  <Image
                     src="/images/img-divers.jpg"
                     alt="diving"
                     width={1024}
                     height={1024}
                     className="w-full xl:-translate-y-1/4"
                  />
               </motion.div>

               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                  width={1000}
                  height={1000}
                  className="absolute left-0 top-0 size-full scale-y-[101%]"
               >
                  <path
                     fill="#ffffff"
                     d="M640.6 907.7c-15 5.3-29.4 12.2-43.5 20.2-24.4 13.7-46.8 33-71.8 45.2-13.5 6.6-27.9 11.3-42.4 12-51.8 3.3-85.9-42.7-99.1-97.9-5.3-21-7.6-43.2-10.8-65-3.3-23.4-8.6-46.1-16.3-68.1-30.3-85.9-83.6-141.1-159.4-166-67.9-24.3-152.4-43.5-185.6-126.7C2.7 438.5.2 413 .9 388.1c.3-9.1 1-18.1 2-27.2 7.2-58.6 21.8-115.4 40-170.4 19.6-58.7 28.7-134 28.7-156.4C71.6 11.7 66.5 0 66.5 0H0v1000h1000v-23.2c-19.1-9.2-38-18.8-57.2-27.4-95.4-42-201.6-77.9-302.2-41.7z"
                  />
               </svg>
            </div>
         </div>
         <Container className="relative z-10">
            <div className="mx-auto max-w-xl space-y-8 lg:mx-0 lg:space-y-16">
               <Logo />
               <div className="space-y-7">
                  <h1>
                     Diving, whale watching and swimming with whales in Vavau
                     Tonga
                  </h1>
                  <Text className="">
                     Our Dive Operation is located at Fangafoa Marina in the
                     capital of Vava&apos;u, called Neiafu. Tonga has a lot to
                     offer the world with its beautiful Coral Reefs that stretch
                     over fifty different dive spots and there is still a lot
                     more to discover. The visibility is between 25 meters (82
                     feet) to 40 meters (131 feet) and the Water Temperature is
                     between 24C degrees (74F) to 28C (84F)
                  </Text>
               </div>
               <div className="group-buttons">
                  <Button href="mailto:hello@archie.kiwi" color="orange">
                     Booking now
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Banner;

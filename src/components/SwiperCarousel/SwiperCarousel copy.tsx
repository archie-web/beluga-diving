import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import type { Swiper as SwiperType } from 'swiper';
import SwiperCore, {
   Autoplay,
   Controller,
   EffectFade,
   Keyboard,
   Navigation,
   Pagination,
   Swiper as SwiperType,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { GradientOverlay } from '../Overlay/GradientOverlay';
import Button from '../ui/Buttons';
import { Container } from '../Container';

// Install Swiper modules
SwiperCore.use([
   EffectFade,
   Autoplay,
   Pagination,
   Navigation,
   Keyboard,
   Controller,
]);

const placehoderArr = Array.from({ length: 11 }, (_, index) => index + 1); // Placeholder array for demonstration

export const SwiperCarousel = () => {
   const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
   const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);
   const [isCarousel, setIsCarousel] = useState<Boolean>(true);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!containerRef.current) return;
      const swiperControlPanel = containerRef.current.querySelector(
         '.swiper-pagination-lock',
      );
      if (swiperControlPanel) {
         setIsCarousel(false);
      }
   }, []);

   const SLIDERS_PER_VIEW = 1.25;
   const SLIDERS_BREAKPOINT = {
      768: {
         slidesPerView: 2.5,
      },
      1024: {
         slidesPerView: 4,
      },
   };
   const ZINDEX = 100;

   return (
      <section className="py-space overflow-hidden">
         <Container className="space-y-10">
            <div className="flex justify-between">
               <h2 className="h2">Swiper Carousel</h2>
               {isCarousel && (
                  <div className="flex gap-2">
                     <Button className="prev-swiper">Prev</Button>
                     <Button className="next-swiper">Next</Button>
                  </div>
               )}
            </div>

            <div
               className="grid grid-cols-4 gap-10 lg:grid-cols-12"
               ref={containerRef}
            >
               {/* slider control */}
               <div
                  className="bg-primaryColour/10 relative col-span-3 w-full lg:h-full"
                  style={{ zIndex: ZINDEX + 2 }}
               >
                  <Swiper
                     modules={[Controller, Pagination]}
                     pagination={{
                        clickable: true,
                        type: 'fraction',
                     }}
                     onSwiper={(swiper) => setFirstSwiper(swiper)}
                     controller={{ control: secondSwiper }}
                     //  slidesPerView={SLIDERS_PER_VIEW}
                     breakpoints={SLIDERS_BREAKPOINT}
                     navigation={true}
                     className="h-40"
                  >
                     {placehoderArr.map((number) => (
                        <SwiperSlide key={number} />
                     ))}
                  </Swiper>
                  <h3>Two way swiper slider control</h3>
               </div>

               {/* main slider */}
               <Swiper
                  modules={[
                     Autoplay,
                     Pagination,
                     Navigation,
                     Keyboard,
                     Controller,
                    //  EffectFade,
                  ]}
                  grabCursor={true}
                  spaceBetween={12}
                  slidesPerView={SLIDERS_PER_VIEW}
                  breakpoints={SLIDERS_BREAKPOINT}
                  //   slidesPerGroup={4}
                  // centeredSlides={true}
                  //  effect="fade"

                  //  autoplay={{
                  //  delay: 3000,
                  //  }}
                  navigation={{
                     nextEl: '.next-swiper',
                     prevEl: '.prev-swiper',
                  }}
                  pagination={{
                     type: 'progressbar',
                  }}
                  keyboard={{
                     enabled: true,
                  }}
                  // onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper }}
                  onSwiper={(swiper) => setSecondSwiper(swiper)}
                //   watchSlidesProgress
                  className="main-slider col-span-4 w-full lg:col-span-8 lg:col-start-5"
                  style={{ zIndex: ZINDEX - 1 }}
               >
                  {placehoderArr.map((number, index) => (
                     <SwiperSlide
                        key={number}
                        className="space-y-sm transition-all duration-500"
                     >
                        {({ isVisible }) => (
                           <>
                              <motion.figure
                                 className="overflow-hidden"
                                 initial={{
                                    opacity: 0,
                                 }}
                                 animate={{
                                    opacity: 1,
                                    // x: 0,
                                 }}
                                 transition={{
                                    duration: 2,
                                    delay: index * 0.2,
                                 }}
                              >
                                 <Image
                                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                    src="https://via.placeholder.com/600x600"
                                    className="w-full object-cover"
                                    height={250}
                                    width={250}
                                    alt=""
                                    placeholder="blur"
                                 />
                              </motion.figure>

                              <h5 className="h5">main slider {number}</h5>
                              <p>
                                 Our first family raceday of 2023 offers a
                                 thrilling combination of top class Jumps racing
                                 and free themed activities for racegoers of all
                                 ages.
                              </p>
                              <Link href="/" className="block">
                                 More details
                              </Link>
                           </>
                        )}
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </Container>
      </section>
   );
};

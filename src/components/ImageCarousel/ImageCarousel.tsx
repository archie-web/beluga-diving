import Image from 'next/image';
import { use, useEffect, useRef, useState } from 'react';
// import { Autoplay, Controller, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

import SwiperCore, {
   Autoplay,
   Controller,
   EffectFade,
   Keyboard,
   Navigation,
   Pagination,
   Swiper as SwiperType,
} from 'swiper';
import { Container } from '../Container';
import { set } from 'react-hook-form';
import theme from '@/theme';

// Install Swiper modules
SwiperCore.use([
   EffectFade,
   Autoplay,
   Pagination,
   Navigation,
   Keyboard,
   Controller,
]);

export default function ImageCarousel({ className = '' }) {
   const swiperRef = useRef<SwiperType | null>(null);
   // const ref = useRef<HTMLDivElement>(null); // Add type to ref object

   const [isBeginning, setIsBeginning] = useState<Boolean>(true);
   const [isEnd, setIsEnd] = useState<Boolean>(false);
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [isCarousel, setIsCarousel] = useState<Boolean>(true);

   useEffect(() => {
      if (!swiperRef.current) return;
      console.log('swiperRef.current:', swiperRef.current);
      console.log('activeIndex:', activeIndex);

      // if no swiper then no need to check for isBeginning and isEnd
      if (swiperRef.current?.snapGrid.length === 1) {
         setIsCarousel(false);
         return;
      }

      // get the the "swiper-button-next" elemeent from the ref
      //   if (!ref.current) return;
      //   const nextButton = ref.current.querySelector('.swiper-button-next');
      //   const preButton = ref.current.querySelector('.swiper-button-prev');
      //   if (!nextButton) return;
      //   setIsEnd(nextButton.classList.contains('swiper-button-disabled'));
      //   if (!preButton) return;
      //   setIsBeginning(preButton.classList.contains('swiper-button-disabled'));
   }, [activeIndex]);

   const onPrev = () => {
      (swiperRef.current as SwiperType)?.slidePrev();
      setActiveIndex(swiperRef.current?.activeIndex || 0);
      setIsBeginning(swiperRef.current?.isBeginning || false);
      setIsEnd(false);
   };

   const onNext = () => {
      (swiperRef.current as SwiperType)?.slideNext();
      setActiveIndex(swiperRef.current?.activeIndex || 0);
      setIsBeginning(false);
      setIsEnd(swiperRef.current?.isEnd || false);
   };

   const overwriteStyle =
      '[&>.swiper-pagination-progressbar>span]:!bg-brandColour [&>.swiper-pagination-progressbar]:-top-4';
   return (
      <section className="py-space">
         <style
            dangerouslySetInnerHTML={{
               __html: `.swiper-button-next, .swiper-button-prev {color: ${theme?.colors?.brandColour}}`,
            }}
         />

         {/* ------ if customized buttons needed ------ */}
         {/* add these to Swiper component

            const swiperRef = useRef<SwiperType | null>(null);

            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
         */}

         {isCarousel && (
            <Container className="mb-space flex gap-6">
               <button
                  onClick={onPrev}
                // disabled={isBeginning || false}
                  className={isBeginning ? 'opacity-30' : 'opacity-100'}
               >
                  slide Prev
               </button>
               <button
                // disabled={isEnd || false}
                  onClick={onNext}
                  className={isEnd ? 'opacity-30' : 'opacity-100'}
               >
                  slide Next
               </button>
            </Container>
         )}

         <Swiper
            modules={[Autoplay, Pagination, Navigation, Keyboard, Controller]}
            pagination={{
               type: 'progressbar',
            }}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            // autoplay={true}
            navigation={true}
            grabCursor={true}
            keyboard={true}
            spaceBetween={12}
            slidesPerView={1.25}
            breakpoints={{
               768: {
                  slidesPerView: 2.5,
               },
               1024: {
                  slidesPerView: 4,
               },
            }}
            watchSlidesProgress
            className={twMerge(
               'mx-auto max-w-7xl overflow-visible',
               overwriteStyle,
               className,
            )}
         >
            {[1, 2, 3, 4, 5, 6, 7].map((number) => (
               <SwiperSlide key={number}>
                  {({ isVisible }) => (
                     <Image
                        src="https://via.placeholder.com/400x400"
                        width={400}
                        height={400}
                        alt=""
                        className={isVisible ? 'opacity-100' : 'opacity-30'}
                     />
                  )}
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}

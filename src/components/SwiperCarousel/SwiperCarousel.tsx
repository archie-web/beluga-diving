import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import { Container } from '../Container';
import Button from '../ui/Buttons';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation, Keyboard]);

const placehoderArr = Array.from({ length: 11 }, (_, index) => index + 1); // Placeholder array for demonstration

export const SwiperCarousel = () => {
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

   return (
      <section className="py-space overflow-hidden" ref={containerRef}>
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
            <Swiper
               modules={[Pagination, Navigation, Keyboard]}
               grabCursor={true}
               spaceBetween={8}
               slidesPerView={4}
               navigation={{
                  nextEl: '.next-swiper',
                  prevEl: '.prev-swiper',
               }}
               pagination={{
                  clickable: true,
                  // el: '.swiper-pagination-d',
                  // type: 'fraction',
               }}
               keyboard={{
                  enabled: true,
               }}
               grid={{
                  fill: 'row',
               }}
               // breakpoints={{}}
               // slidesPerGroup={4}
               // centeredSlides={true}
               watchSlidesProgress // isVisible
               className="overflow-visible"
            >
               {placehoderArr.map((number, index) => (
                  <SwiperSlide key={index} className="">
                     {({ isActive, isNext, isPrev, isVisible }) => (
                        <div
                           className={twMerge(
                              'space-y-5 transition-all',
                              isActive && 'text-blue-400',
                              // isNext && 'text-green-400',
                              // isPrev && 'text-purple-400',
                              isVisible ? 'opacity-100' : 'opacity-40',
                           )}
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

                           <h5 className="h5">Title {index}</h5>
                        </div>
                     )}
                  </SwiperSlide>
               ))}
            </Swiper>
         </Container>
      </section>
   );
};

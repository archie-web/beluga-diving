import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SwiperCore, {
    FreeMode,
    Keyboard,
    Navigation,
    Pagination,
    Thumbs,
    Swiper as SwiperType,
 } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([FreeMode, Thumbs, Pagination, Navigation, Keyboard]);

export default function SwiperThumbs() {
   const placehoderArr = Array.from({ length: 8 }, (_, index) => index + 1); // Placeholder array for demonstration

   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   return (
      <section className="py-space mx-auto max-w-2xl overflow-hidden">
         {thumbsSwiper && (
            <Swiper
               spaceBetween={10}
               navigation={true}
               thumbs={{ swiper: thumbsSwiper }}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper2"
            >
               {placehoderArr.map((number, index) => (
                  <SwiperSlide key={number} className="">
                     <div
                        className={`space-y-8 transition-opacity duration-500 `}
                     >
                        <Image
                           src="https://craftypixels.com/placeholder-image/300"
                           width={250}
                           height={250}
                           alt=""
                           className="w-full"
                        />
                        <h5 className="h5">main slider {number}</h5>
                        <p>
                           Our first family raceday of 2023 offers a thrilling
                           combination of top class Jumps racing and free themed
                           activities for racegoers of all ages.
                        </p>
                        <Link href="/" className="block">
                           More details
                        </Link>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
         <Swiper
            onSwiper={(swiper: SwiperCore) => setThumbsSwiper(swiper)}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
         >
            {placehoderArr.map((number, index) => (
               <SwiperSlide key={number} className="">
                  <Image
                     src="https://craftypixels.com/placeholder-image/300"
                     width={80}
                     height={80}
                     alt=""
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}

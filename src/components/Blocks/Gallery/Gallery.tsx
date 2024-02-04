import { Container } from '@/components/Container';
import NextImage from '@/components/NextImage';
import SITE_CONFIG from '@/constants/siteConfig';
import { twJoin } from 'tailwind-merge';

const imageStyle = 'size-full object-cover rounded-xl';
const gridSpacing = 'gap-2 lg:gap-6';

export const Gallery = ({ reversed = false }) => {
   return (
      <section id="gallery">
         <Container
            className={twJoin('flex flex-col lg:flex-row', gridSpacing, reversed && "lg:flex-row-reverse")}
         >
            {/* <div className={twJoin('flex flex-col', gridSpacing)}> */}
            <div className={twJoin('grid flex-1 grid-cols-2', gridSpacing)}>
               <div className={twJoin('grid', gridSpacing)}>
                  <NextImage
                     src="https://source.unsplash.com/7i5HMCGupVw"
                     width={400}
                     height={400}
                     alt={SITE_CONFIG.SITE_NAME}
                     className={twJoin(imageStyle, "aspect-square")}
                  />
                  <NextImage
                     src="https://source.unsplash.com/mUIph40dQyA"
                     width={400}
                     height={400}
                     alt={SITE_CONFIG.SITE_NAME}
                     className={twJoin(imageStyle)}
                  />
               </div>
               <NextImage
                  src="https://source.unsplash.com/dtCTfjTEOgg"
                  width={300}
                  height={680}
                  alt={SITE_CONFIG.SITE_NAME}
                  className={twJoin(imageStyle)}
               />
            </div>
            {/* <NextImage
                  src="https://source.unsplash.com/yHaburAEFo4"
                  width={636}
                  height={424}
                  alt={SITE_CONFIG.SITE_NAME}
                  className={twJoin(imageStyle)}
               /> */}
            {/* </div> */}

            <div className={twJoin('flex flex-1 flex-col', gridSpacing)}>
               <NextImage
                  src="https://source.unsplash.com/8j4KMOCMOfw"
                  width={600}
                  height={500}
                  alt={SITE_CONFIG.SITE_NAME}
                  className={twJoin(imageStyle, 'h-auto')}
               />
               <div
                  className={twJoin('grid flex-none grid-cols-2', gridSpacing)}
               >
                  <NextImage
                     src="https://source.unsplash.com/9E9NsEiUGxg"
                     width={400}
                     height={400}
                     alt={SITE_CONFIG.SITE_NAME}
                     className={twJoin(imageStyle, 'aspect-square')}
                  />
                  <NextImage
                     src="https://source.unsplash.com/yHaburAEFo4"
                     width={400}
                     height={400}
                     alt={SITE_CONFIG.SITE_NAME}
                     className={twJoin(imageStyle, 'aspect-square')}
                  />
               </div>
            </div>
         </Container>
      </section>
   );
};

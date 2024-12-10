'use client';
import { Container } from '@/components/Container';
import NextImage from '@/components/NextImage';
import SITE_CONFIG from '@/constants/siteConfig';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { twJoin } from 'tailwind-merge';
import Image, { ImageProps } from 'next/image';
import { convertToWebpFileName } from '@/helpers/convertToWebpFileName';

const imageStyle = 'size-full object-cover ';
const gridSpacing = 'gap-2 lg:gap-6';

interface Props extends Omit<ImageProps, 'src, alt, className'> {
   src: any;
   alt: string;
   className?: string;
}

const GalleryPhoto = ({ src, alt, className, ...rest }: Props) => {
   return (
      <PhotoView src={src}>
         <picture className="cursor-pointer overflow-hidden rounded-xl">
            {/* <source srcSet={convertToWebpFileName(src)} type="image/webp" /> */}
            <source srcSet={src} type="image/jpeg" />
            <Image
               src={src}
               alt={alt}
               className={twJoin(
                  'size-full object-cover transition-all duration-[1.6s] ease-in-out hover:scale-105',
                  className,
               )}
               {...rest}
            />
         </picture>
      </PhotoView>
   );
};

export const Gallery = ({ reversed = false }) => {
   return (
      <section
         className="py-space space-y-10 bg-transparent lg:space-y-20"
         id="gallery"
      >
         <h2 className="h1 text-center">Photo Gallery</h2>
         <Container
            className={twJoin(
               'flex flex-col lg:grid lg:grid-cols-2',
               gridSpacing,
               reversed && 'lg:flex-row-reverse',
            )}
         >
            <PhotoProvider maskOpacity={0.87}>
               {/* <div className={twJoin('flex flex-col', gridSpacing)}> */}
               <div className={twJoin('grid flex-1 grid-cols-2', gridSpacing)}>
                  <div className={twJoin('grid', gridSpacing)}>
                     <GalleryPhoto
                        src="/images/gallery/gladiator_portside.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={400}
                        height={400}
                        className="aspect-square"
                     />
                     <GalleryPhoto
                        src="/images/gallery/split-rock-with-text.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={400}
                        height={400}
                     />
                  </div>

                  <GalleryPhoto
                     src="/images/gallery/opa_sternportside.jpg"
                     alt={SITE_CONFIG.SITE_NAME}
                     width={300}
                     height={680}
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
                  <GalleryPhoto
                     src="/images/gallery/cave.jpg"
                     alt={SITE_CONFIG.SITE_NAME}
                     width={600}
                     height={500}
                  />
                  <div
                     className={twJoin(
                        'grid flex-none grid-cols-2',
                        gridSpacing,
                     )}
                  >
                     <GalleryPhoto
                        src="/images/gallery/whale-2.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={600}
                        height={500}
                        className="aspect-square"
                     />

                     <GalleryPhoto
                        src="/images/gallery/whale-6.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={400}
                        height={400}
                        className="aspect-square"
                     />
                  </div>
               </div>

               <div className={twJoin('flex', gridSpacing)}>
                  <GalleryPhoto
                     src="/images/gallery/clownfish-heaven.jpg"
                     alt={SITE_CONFIG.SITE_NAME}
                     width={600}
                     height={600}
                  />
               </div>

               <div className={twJoin('grid flex-1 grid-cols-2', gridSpacing)}>
                  <GalleryPhoto
                     src="/images/gallery/gladiator-bow__portside.jpg"
                     alt={SITE_CONFIG.SITE_NAME}
                     width={300}
                     height={680}
                  />

                  <div className={twJoin('grid', gridSpacing)}>
                     <GalleryPhoto
                        src="/images/gallery/white-whale.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={400}
                        height={400}
                        className="aspect-square"
                     />
                     <GalleryPhoto
                        src="/images/gallery/whale-4.jpg"
                        alt={SITE_CONFIG.SITE_NAME}
                        width={400}
                        height={400}
                     />
                  </div>
               </div>
            </PhotoProvider>
         </Container>
      </section>
   );
};

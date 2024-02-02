import NextImage from '@/components/NextImage';
import NextLink, { LinkFieldProps } from '@/components/NextLink';
import parse from 'html-react-parser';
import { ElementOrSelector, animate, inView, stagger } from 'motion';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const enum MediaPosition {
   LEFT = 'left',
   RIGHT = 'right',
   TOP = 'top',
   BOTTOM = 'bottom',
}

export type MediaProps = {
   url: string;
   title: string;
   kind: string | 'image' | 'video';
   embeddedAsset?: { image: string; title: string; url: string };
};

export type HeadingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextAndImageProps {
   className?: string;
   reversePosition?: boolean;
   data: {
      media: MediaProps[];
      headingLevel?: HeadingLevelType;
      heading?: string;
      bodyAdvanced?: string;
      linkField?: LinkFieldProps;
   };
}

export const TextAndMedia = ({
   className = '',
   reversePosition = false,
   data,
}: TextAndImageProps) => {
   const {
      headingLevel: HeadingLevel = 'h2', // initializing the headingLevel property of an object with a default value of 'h2'.
      bodyAdvanced,
      heading,
      linkField,
   } = data;
   const fadeInRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (!fadeInRef.current) return;
      inView(
         fadeInRef.current,
         ({ target }) => {
            animate(
               target.querySelectorAll('> *') as ElementOrSelector,
               { opacity: 1, transform: 'none' },
               {
                  delay: stagger(0.1),
                  duration: 1,
                  easing: [0.22, 0.03, 0.26, 1],
               },
            );
         },
         { amount: 0.25 },
      );
   }, []);

   const media = data.media[0]; // always use the first media item

   return (
      <section className={twMerge('space-y-10', className)} ref={fadeInRef}>
         {heading && <HeadingLevel className="h2">{heading}</HeadingLevel>}
         <div
            className={twMerge(
               'flex gap-[5%]',
               reversePosition && 'flex-row-reverse',
            )}
         >
            {data.media && (
               <div className={`overflow-hidden lg:w-1/2`}>
                  <NextImage
                     src={
                        media.embeddedAsset
                           ? media.embeddedAsset.url
                           : media.url
                     }
                     alt={
                        media.embeddedAsset
                           ? media.embeddedAsset.title
                           : media.title
                     }
                     quality={65} // default 75
                     width={800}
                     height={600}
                     className="translate-x-1/3 object-cover opacity-0"
                  />
               </div>
            )}

            <div
               className={`flex flex-col justify-center space-y-4 lg:w-1/2 [&>*]:-translate-x-10 [&>*]:opacity-0`}
            >
               {heading && (
                  <HeadingLevel className="h3">{heading}</HeadingLevel>
               )}
               {bodyAdvanced && parse(bodyAdvanced)}
               {linkField && (
                  <div>
                     {linkField.url != null && (
                        <NextLink href={linkField.url}>
                           {linkField.customText
                              ? linkField.customText
                              : linkField.text}
                        </NextLink>
                     )}
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

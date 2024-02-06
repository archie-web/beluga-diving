'use client';

import { Container } from '@/components/Container';
import NextLink, { LinkFieldProps } from '@/components/NextLink';
import parse from 'html-react-parser';
import { ElementOrSelector, animate, inView, stagger } from 'motion';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { whyUs } from '@/data/whyUs';

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
   data?: {
      title: string;
      content?: string;
   };
}

export const TextAndMedia = ({
   className = '',
   reversePosition = false,
   data,
}: TextAndImageProps) => {
   const fadeInRef = useRef<HTMLDivElement>(null);
   return (
      <section
         className={twMerge('lg:pt-space pb-10', className)}
         ref={fadeInRef}
         id="about-us"
      >
         <Container className="">
            <div className={twMerge('grid gap-6 lg:grid-cols-2 lg:gap-16')}>
               <Image
                  src="/images/img-whale.png"
                  alt="whale swimming"
                  width={663}
                  height={635}
                  className="w-full lg:-translate-x-10 object-contain"
               />

               <div className={`flex flex-col justify-center space-y-16`}>
                  <h2 className="h1">Why choose us</h2>
                  <ul className="space-y-6">
                     {whyUs.map((item, index) => (
                        <li className="space-y-2" key={index}>
                           <div className="flex items-center gap-4">
                              <CheckCircleIcon className="size-12 text-sky-300 " />
                              <h3 className="h3 leading-none text-sky-900">
                                 {item.title}
                              </h3>
                           </div>
                           {item.content && (
                              <Text className="pl-16">{item.content}</Text>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   );
};

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { InvisibleButton, PlayButton } from '@/components/ui/Buttons';
import { ReactPlayerProps } from 'react-player';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type Props = {
   className?: string;
   placerholderImage?: string | null;
} & ReactPlayerProps;

export const VideoPlayer = ({
   className,
   placerholderImage = null,
   ...rest
}: Props) => {
   const [isPlaying, setPlayVideo] = useState<boolean>(false);

   const togglePlay = () => {
      setPlayVideo(!isPlaying);
   };

   return (
      <div className="relative flex aspect-video max-w-7xl items-center justify-center overflow-hidden shadow-lg">
         <ReactPlayer
            className={twMerge(
               'absolute inset-0 z-[-1] block aspect-video h-auto',
               className,
            )}
            width="100%"
            height="auto"
            playing={isPlaying}
            {...rest}
         />
         {placerholderImage && (
            <AnimatePresence initial={false}>
               {!isPlaying && (
                  <motion.figure
                     key="video-placeholder-image"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{
                        duration: 0.5,
                     }}
                  >
                     <Image
                        src={placerholderImage}
                        width={1600}
                        height={900}
                        alt=""
                        className="object-video absolute inset-0 z-0 h-full w-full"
                     />
                  </motion.figure>
               )}
            </AnimatePresence>
         )}
         <InvisibleButton onClick={togglePlay} className="z-10" />
         {!isPlaying && <PlayButton onClick={togglePlay} className="z-20" />}
      </div>
   );
};

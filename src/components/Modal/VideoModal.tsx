import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { ZINDEX } from '@/constants';

import { ReactPlayerProps } from 'react-player';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
import { PlayButton } from '../ui/Buttons';
import { twMerge } from 'tailwind-merge';

export type VideoModalProps = {
   className?: string;
} & ReactPlayerProps;

const VideoModal = ({ className, ...rest }: VideoModalProps) => {
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [playVideo, setPlayVideo] = useState<boolean>(false);

   useEffect(() => {
      if (modalIsOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   }, [modalIsOpen]);

   const handleOpenModal = () => {
      setModalIsOpen(true);
      setPlayVideo(true);
   };

   const handleCloseModal = () => {
      setModalIsOpen(false);
      setPlayVideo(false);
   };

   return (
      <>
         <PlayButton onClick={handleOpenModal} />

         {modalIsOpen && (
            <div
               className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/60
               px-[5%] backdrop-blur-sm`}
               onClick={handleCloseModal}
               style={{ zIndex: ZINDEX.MODAL }}
            >
               <button
                  className="absolute right-[2%] top-[2%]"
                  style={{ zIndex: ZINDEX.MODAL + 2 }}
                  onClick={handleCloseModal}
               >
                  <svg
                     viewBox="0 0 24 24"
                     width="24"
                     height="24"
                     stroke="white"
                     strokeWidth="1.5"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="h-12 w-12"
                  >
                     <line x1="18" y1="6" x2="6" y2="18" />
                     <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
               </button>
               <ReactPlayer
                  className={twMerge(
                     'max-w-9xl aspect-[16/9] h-auto overflow-hidden rounded-lg shadow-lg',
                     className,
                  )}
                  //   className={`aspect-[16/9] h-auto max-w-7xl overflow-hidden rounded-lg shadow-lg ${className}`}
                  style={{ zIndex: ZINDEX.MODAL + 1 }}
                  width="100%"
                  height="auto"
                  playing={playVideo}
                  {...rest}
               />
            </div>
         )}
      </>
   );
};

export default VideoModal;

import React from 'react';
import { Meta } from '@storybook/react';
import VideoModal, { VideoModalProps } from './VideoModal';

export default {
   title: 'Components/VideoModal',
   component: VideoModal,
   parameters: {
      controls: { hideNoControlsWarning: true },
   },
} as Meta;

export const Default = () => {
   const modalProps: VideoModalProps = {
      className: 'w-80',
   };

   return (
      <VideoModal
         url={'https://youtu.be/NJuSStkIZBg'}
         muted={false}
         controls={false}
         {...modalProps}
      />
   );
};

import type { Meta, StoryObj } from '@storybook/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default {
   title: 'Components/Image',
   tags: ['autodocs'],
   component: Image,
   parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
   },
   argTypes: {
      className: { control: 'text', defaultName: '' },
      alt: { control: 'text', defaultName: '' }, // If the image is purely decorative or not intended for the user, the alt property should be an empty string
      src: {
         control: 'text',
         defaultName: 'https://via.placeholder.com/800x600',
      },
      priority: { control: 'boolean', defaultName: false },
      quality: { control: 'number', defaultName: 75 },
      width: { control: 'number', defaultName: 800 },
      height: { control: 'number', defaultName: 600 },
   },
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default = {
   args: {
      src: 'https://via.placeholder.com/600x600',
      alt: '',
      quality: 50,
      width: 600,
      height: 600,
      // placeholder: "blur",
      blurDataURL:
         'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      className: 'object-cover w-full',
   },
};

export const AspectRatio: Story = {
   args: {
      ...Default.args,
      className: 'border border-black object-cover aspect-6/4',
   },
};

export const FadeInImage = () => (
   <div className="overflow-hidden">
      <motion.figure
         className=""
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 1 }}
      >
         <Image {...Default.args} alt="" placeholder="blur" />
      </motion.figure>
   </div>
);

export const onLoadingComplete = () => {
   return (
      <Image
         {...Default.args}
         alt=""
         onLoadingComplete={(img) => console.log(img.naturalWidth)}
      />
   );
};

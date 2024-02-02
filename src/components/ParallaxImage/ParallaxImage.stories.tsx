import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ParallaxImage from '.';

export default {
   component: ParallaxImage,
   title: 'Components/ParallaxImage',
   //    tags: ['autodocs'],
   decorators: [
      (Story) => (
         <section className="text-center">
            <div className="h-[768px] border-b" />
            <Story />
            <div className="h-[768px] border-t" />
         </section>
      ),
   ],
} as Meta<typeof ParallaxImage>;

type Story = StoryObj<typeof ParallaxImage>;

export const Default: Story = {
   args: {
      // src: 'https://via.placeholder.com/800x600.png?text=Parallax+Image',
      containerClass: 'w-2/3 border-2 border-green-300 p-[1%]',
      src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=75',
   },
};
export const ImageRatio: Story = {
   args: {
      ...Default.args,
      ratio: 'aspect-video',
   },
};

export const ScrollSpeed: Story = {
   args: {
      ...Default.args,
      innerSpeed: 100,
      outerSpeed: 300,
   },
};

export const BorderBoundry: Story = {
   args: {
      ...Default.args,
      //   src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      imageClass: 'border-2 border-red-300',
      ratio: 'aspect-6/4',
   },
};

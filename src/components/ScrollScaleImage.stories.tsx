import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollScaleImage } from './ScrollScaleImage';
import { Container } from './Container';

export default {
   component: ScrollScaleImage,
   tags: ['autodocs'],
   title: 'Components/Scroll Scale Image',
   decorators: [
      (Story) => (
         <section className='h-[250vh] flex items-center'>
            {/* <div className="h-screen border-b" /> */}
            <Container>
               <Story />
            </Container>
            {/* <div className="h-screen border-t" /> */}
         </section>
      ),
   ],
} as Meta<typeof ScrollScaleImage>;

type Story = StoryObj<typeof ScrollScaleImage>;

export const Default: Story = {
   args: {
      //   src: 'https://via.placeholder.com/800x600.png?text=Parallax+Scale+Image',
      src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=65',
   },
};

export const ScrollToZoomIn: Story = {
   args: {
      ...Default.args,
      zoom: 1.5,
   },
};
export const ScrollToZoomOut: Story = {
   args: {
      ...Default.args,
      zoom: 0.5,
   },
};

export const ScrollDistance: Story = {
   args: {
      ...Default.args,
      distance: 200,
   },
};

export const ScrollToFadeOut: Story = {
   args: {
      ...Default.args,
      fadeOut: 0,
   },
};

// export const BorderBoundry: Story = {
//    args: {
//       ...Default.args,
//       className: 'border-2 border-green-300 p-[1%]',
//    },
// };

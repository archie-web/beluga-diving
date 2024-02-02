import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from './ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
   // tags: ['autodocs'],
   component: ImageCarousel,
   title: 'Components/Image Carousel',
   parameters: {
      layout: 'fullscreen',
   },
};
export default meta;

type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {};

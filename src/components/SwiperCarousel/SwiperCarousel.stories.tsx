import type { Meta, StoryObj } from '@storybook/react';
import { SwiperCarousel } from './SwiperCarousel';

export default {
   component: SwiperCarousel,
   // tags: ['autodocs'],
   title: 'Components/Swiper Carousel',
} as Meta<typeof SwiperCarousel>;

type Story = StoryObj<typeof SwiperCarousel>;

export const Default: Story = {};

// Swiper + VideoJS example (2)
// https://codepen.io/teerasak-vichadee/pen/xxKLQKZ

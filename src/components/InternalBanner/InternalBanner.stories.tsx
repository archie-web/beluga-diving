import type { Meta, StoryObj } from '@storybook/react';
import { InternalBanner } from './InternalBanner';

//👇 This default export determines where your story goes in the story list
export default {
   component: InternalBanner,
   title: 'Components/Internal Banner',
   tags: ['autodocs'],
} as Meta<typeof InternalBanner>;

type Story = StoryObj<typeof InternalBanner>;

export const Default: Story = {};

export const Variation: Story = {
   args: {
      //👇 The args you need here will depend on your component
      className: 'bg-green-100 p-6',
      heading: 'Heading with CTA',
      bodyText:
         'A modular type scale consists of a baseline font size and proportionally smaller and larger font sizes. Traditionally, design systems used static type scales, where each step has a fixed font size at every viewport width.',
   },
};

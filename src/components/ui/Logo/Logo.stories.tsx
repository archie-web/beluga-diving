import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

export default {
   component: Logo,
   title: 'Components/Logo',
   tags: ['autodocs'],
   parameters: {
    //   layout: 'fullscreen',
    //   position: 'center',
      backgrounds: {
         default: 'light',
         values: [
            {
               name: 'dark',
               value: '#333333',
            },
            {
               name: 'light',
               value: '#fafafa',
            },
         ],
      },
   },
   argTypes: {
      className: { control: 'text', defaultValue: '' },
      reversed: { control: 'boolean', defaultValue: false },
   },
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Reverse: Story = {
   parameters: {
      backgrounds: {
         default: 'dark',
      },
   },
   args: {
      ...Default.args,
      reversed: true,
   },
};

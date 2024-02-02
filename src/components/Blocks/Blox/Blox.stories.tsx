import type { Meta, StoryObj } from '@storybook/react';
import { Blox } from './Blox';

//👇 This default export determines where your story goes in the story list
export default {
   component: Blox,
   title: 'Components/Blox',
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
      // centered: center the component horizontally and vertically in the Canvas
      // fullscreen: allow the component to expand to the full width and height of the Canvas
      // padded: (default) Add extra padding around the component
   },
   decorators: [
      (Story) => (
        //  <section className="bg-slate-50 px-6">
            <Story />
        //  </section>
      ),
   ],
} as Meta<typeof Blox>;

type Story = StoryObj<typeof Blox>;

export const Default: Story = {
   args: {
      //👇 The args you need here will depend on your component
      children:
         ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus atque est.',
   },
};

export const Variation: Story = {
   args: {
      //👇 inherit the args from the Default story
      ...Default.args,
      className: 'bg-green-100 border-2 border-green-300',
   },
};

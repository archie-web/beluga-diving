import type { Meta, StoryObj } from '@storybook/react';
import { GradientOverlay } from './GradientOverlay';

//👇 This default export determines where your story goes in the story list
export default {
   component: GradientOverlay,
   title: 'Components/GradientOverlay',
   tags: ['autodocs'],
   //    parameters: {
   //       layout: 'fullscreen',
   //    },
   decorators: [
      (Story) => (
         <main className="relative mx-auto min-h-min p-10 w-1/2 bg-slate-100">
            <div className="relative z-0">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Necessitatibus minima velit commodi? Quisquam, quibusdam. Lorem
               ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi
               tempore voluptas, error amet at in id iusto sapiente, mollitia et
               eos! Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur.
            </div>
            <Story />
         </main>
      ),
   ],
} as Meta<typeof GradientOverlay>;

type Story = StoryObj<typeof GradientOverlay>;

export const Default: Story = {
   args: {
      className: 'from-blue-200',
   },
};

export const FixedWidth: Story = {
   args: {
      className: 'from-green-100 w-[200px]',
   },
};

export const FromBottom: Story = {
   args: {
      direction: 'to-top',
      className: 'from-black/40 h-1/4',
   },
};

export const FromRight: Story = {
   args: {
      //   ...Default.args,
      direction: 'to-left',
      className: 'from-purple-100',
   },
};

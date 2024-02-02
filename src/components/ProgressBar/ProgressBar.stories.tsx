import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '.';

export default {
   component: ProgressBar,
   title: 'Components/Progress Bar',
   // tags: ['autodocs'],
   decorators: [
      (Story) => (
         <section>
            <Story />
            <div className="h-screen bg-slate-100" />
            <div className="h-screen bg-slate-200" />
            <div className="h-screen bg-slate-300" />
         </section>
      ),
   ],
} as Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
export const BarColour: Story = {
   args: {
      className: 'bg-stakesGreen',
   },
};

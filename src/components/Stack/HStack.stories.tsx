import type { Meta, StoryObj } from '@storybook/react';
import { HStack } from '.';

export default {
   title: 'Components/HStack',
   component: HStack,
   docs: {
      docsMode: true,
   },
   parameters: {
      layout: 'fullscreen',
   },
} as Meta<typeof HStack>;

type Story = StoryObj<typeof HStack>;

export const Default: Story = {
   args: {
      className: 'bg-blue-100 p-6',
      children: [1, 2, 3].map((i) => (
         <div key={i} className="border border-blue-400 bg-blue-50 p-4">
            horizontal stack {i}
         </div>
      )),
   },
};

export const SpaceBetween: Story = {
   args: {
      ...Default.args,
      className: 'bg-blue-100 p-6 justify-between',
   },
};

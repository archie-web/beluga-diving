import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

export default {
   title: 'Components/Stack',
   tags: ['autodocs'],
   component: Stack,
   docs: {
      docsMode: true,
   },
   parameters: {
      layout: 'fullscreen',
   },
   decorators: [
      (Story) => (
         <main className="bg-blue-100 p-[3%]">
            <Story />
         </main>
      ),
   ],
} as Meta<typeof Stack>;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
   args: {
      children: [1, 2, 3].map((i) => (
         <div key={i} className="border border-blue-400 bg-blue-50 p-4">
            horizontal stack {i}
         </div>
      )),
   },
};

export const VStack: Story = {
   args: {
      ...Default.args,
      className: 'lg:flex-col',
   },
};

export const HStack: Story = {
    args: {
       ...Default.args,
       className: 'flex-row',
    },
 };

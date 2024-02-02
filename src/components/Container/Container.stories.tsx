import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '.';

export default {
   title: 'Components/Container',
   tags: ['autodocs'],
   component: Container,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {
      size: {
         options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
         control: { type: 'radio' },
      },
      collapse: {
         control: { type: 'boolean' },
      },
   },
   decorators: [
      (Story) => (
         <main className="bg-slate-50 p-10">
            <Story />
         </main>
      ),
   ],
} as Meta<typeof Container>;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
   args: {
      //👇 The args you need here will depend on your component
      className: 'border border-blue-400',
      children:
         'Often viewed as the essential or a community, modern libraries are more han just book storage and lending facilities. For Christchurch especially, the central city library is a symbol of hope, a welcoming place for everyone, a place to belong.',
   },
};

// 👇 Each story then reuses the default template

export const Small: Story = {
   args: {
      ...Default.args,
      size: 'sm',
   },
};

export const Medium: Story = {
   args: {
      ...Default.args,
      size: 'md',
   },
};

export const Large: Story = {
   args: {
      ...Default.args,
      size: 'lg',
   },
};

export const NoPadding: Story = {
   args: {
      ...Default.args,
      collapse: true,
   },
};

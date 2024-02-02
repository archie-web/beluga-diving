import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxTextMedia } from './ParallaxTextMedia';

export default {
   component: ParallaxTextMedia,
   title: 'Components/Parallax Block',
   decorators: [
      (Story) => (
         <section className="flex h-[300vh] items-center">
            {/* <div className="h-[768px] border-b" /> */}

            <Story />

            {/* <div className="h-[768px] border-t" /> */}
         </section>
      ),
   ],
} as Meta<typeof ParallaxTextMedia>;

type Story = StoryObj<typeof ParallaxTextMedia>;

export const Default: Story = {
   args: {
      imageSrc:
         'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=75',
   },
};

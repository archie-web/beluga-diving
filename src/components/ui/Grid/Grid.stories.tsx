import type { Meta, StoryObj } from '@storybook/react';
import Grid, { SimpleGrid } from '.';

export default {
   title: 'Components/Grid',
   tags: ['autodocs'],
   component: SimpleGrid,
   parameters: {
      layout: 'fullscreen', // centered
   },
   decorators: [
      (Story) => (
         <main className="bg-blue-100 p-10">
            <Story />
         </main>
      ),
   ],
} as Meta<typeof SimpleGrid>;

type Story = StoryObj<typeof SimpleGrid>;

export const Default: Story = {
   args: {
      children: [1, 2, 3, 4, 5].map((i) => (
         <div key={i} className="border border-blue-300 bg-blue-50 p-4">
            Simple Grid Item {i}
         </div>
      )),
   },
};

export const FourColumns: Story = {
   args: {
      ...Default.args,
      className: 'lg:grid-cols-4',
   },
};

export const CustomGridLayout = () => (
   <Grid>
      <div className="col-span-2 bg-purple-100">Grid Item</div>
      <div className="col-span-6 bg-purple-200">Grid Item</div>
      <div className="col-span-4 bg-purple-300">Grid Item</div>
      <div className="col-span-4 bg-blue-300">Grid Item</div>
      <div className="col-span-8 bg-blue-400">Grid Item</div>
      <div className="col-span-7 bg-green-100">Grid Item</div>
      <div className="col-span-5 bg-green-200">Grid Item</div>
      <div className="col-span-4 col-start-5 bg-yellow-200">col-span-4 col-start-5</div>
      <div className="col-span-4 col-start-2 bg-orange-200">col-span-4 col-start-2</div>
      <div className="col-span-8 col-start-3 bg-red-200">col-span-8 col-start-3</div>
   </Grid>
);

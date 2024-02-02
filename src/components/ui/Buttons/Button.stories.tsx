import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { InvisibleButton, PlayButton } from '.';
import Stack from '../../Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: 'Components/Button',
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   component: Button,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
   args: {
      children: 'button',
   },
};

export const Outline: Story = {
    args: {
        outline: true,
        color: 'orange',
        ...Default.args,
    },
}

// export const OutlineStyle: Story = {
//    args: {
//       ...Default.args,
//       variant: 'outline',
//    },
// };

// export const LinkButton: Story = {
//    args: {
//       ...Default.args,
//       variant: 'link',
//    },
// };

// export const Small: Story = {
//    args: {
//       ...Default.args,
//       size: 'sm',
//    },
// };

// export const Large: Story = {
//    args: {
//       ...Default.args,
//       size: 'xl',
//    },
// };

// export const Disabled: Story = {
//    args: {
//       ...Default.args,
//       disabled: true,
//    },
// };

// export const ButtonGroup = () => (
//    <>
//       <Stack spacing="md">
//          <Button>button 1</Button>
//          <Button variant="outline">button 2</Button>
//       </Stack>
//       <Stack spacing="sm" className="mt-10">
//          <Button>button 1</Button>
//          <Button variant="outline">button 2</Button>
//          <Button variant="link">button 3</Button>
//       </Stack>
//    </>
// );

export const VideoPlayButton = () => (
   <div className="relative flex h-64 w-96 items-center justify-center p-10">
      <InvisibleButton onClick={() => alert('InvisibleButton clicked')} />
      <PlayButton onClick={() => alert('PlayButton clicked')} />
   </div>
);

import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Example> = {
   title: 'Example/Example',
   component: Example,
};
export default meta;


type Story = StoryObj<typeof Example>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Default = {};
export const FirstStory: Story = {
   args: {
      //👇 The args you need here will depend on your component
      className:
         'text-sm text-green-900 p-10 bg-green-50 border border-green-200',
   },
};

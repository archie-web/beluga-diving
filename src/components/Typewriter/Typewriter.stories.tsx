import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Typewriter, TypewriterProps } from './Typewriter';

export default {
   title: 'Animation/Typewriter',
   component: Typewriter,
   parameters: {
      layout: 'centered',
   },
   //    argTypes: {
   //     className: { control: 'text', defaultValue: '' },
   // },
} as Meta;

const Template: Story<TypewriterProps> = (args) => (
   <h1 className="">
      Hello&nbsp;
      <Typewriter {...args} />
   </h1>
);

export const Default = Template.bind({});
Default.args = {
   textArray: [
      'This is the first sentence',
      'Then it comes with the second sentence',
      'This is the third sentence',
   ],
};

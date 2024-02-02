import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
   title: 'Form/Input',
   component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
   name: 'example',
   label: 'input',
   placeholder: 'placeholder',
   register: () => {},
   errors: {},
};

export const WithError = Template.bind({});
WithError.args = {
   name: 'example',
   label: 'input',
   register: () => {},
   errors: { example: { message: 'This field is required' } },
};

export const Disabled = Template.bind({});
Disabled.args = {
   name: 'address',
   label: 'Disabled',
   placeholder: 'it is disabled',
   register: () => {},
   errors: {},
   disabled: true,
};

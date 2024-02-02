import { Meta } from '@storybook/react';
import { TickAnimate } from './TickAnimate';

export default {
   title: 'Animation/TickAnimate',
   component: TickAnimate,
} as Meta;

export const Example = () => (
   <TickAnimate heading='Thank you!' successMessage="Thanks for submitting the form! We really appreciate your interest and we will get back to you as soon as possible. If you have any questions or concerns, please let us know. Looking forward to connecting with you soon!" />
);

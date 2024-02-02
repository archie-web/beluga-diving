import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Header } from './Header';

export default {
   title: 'Components/Header',
   component: Header,
   parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
   },
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

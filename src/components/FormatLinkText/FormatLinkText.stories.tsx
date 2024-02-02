import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormatLinkText from '.';
import { Container } from '../Container';

export default {
   component: FormatLinkText,
   title: 'Components/Format Link Text',
   // tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   decorators: [
      (Story) => (
         <section className="">
            <Container className="space-y-md">
               {/* <h1 className="mb-4 h1">Format Link Text</h1> */}
               <p className="mb-4 text-gray-600">
                  This widget allows you to format text and generate a
                  link-friendly version of it. Enter your text in the input
                  field, and the formatted version will be displayed below. You
                  can copy the formatted text to your clipboard or clear the
                  input field using the buttons.
               </p>
               <Story />
            </Container>
         </section>
      ),
   ],
} as Meta<typeof FormatLinkText>;

type Story = StoryObj<typeof FormatLinkText>;

export const Default: Story = {};

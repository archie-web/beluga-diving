import type { Meta, StoryObj } from '@storybook/react';
import { HeadingLevelType, TextAndMedia } from './TextAndMedia';

export default {
   title: 'Blocks/TextAndMedia',
   tags: ['autodocs'],
   component: TextAndMedia,
} as Meta;

const props = {
//    heading: 'Text and Media block',
   bodyAdvanced:
      '<p>Two to three lines of text, Sit neque facilisis pharetra morbi platea elementum. Elementum felis imperdiet feugiat montes ut velit interdum lobortis erat. Nulla massa porta suspendisse!</p>',
   media: [
      {
         url: 'https://via.placeholder.com/800x600',
         title: 'Sample Image',
         kind: 'image',
         // embeddedAsset: {
         //   image: 'embedded-image-url-1',
         //   title: 'Embedded Image 1',
         //   url: 'embedded-image-url-1'
         // }
      },
   ],
   headingLevel: 'h5' as HeadingLevelType,
   linkField: {
      url: '#',
      text: 'Sample Link Text',
   },
};

type Story = StoryObj<typeof TextAndMedia>;

export const Default: Story = {
   args: {
      data: props,
   },
};
export const ImagePosition: Story = {
   args: {
      reversePosition: true,
      ...Default.args,
   },
};

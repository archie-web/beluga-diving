import { ComponentMeta } from '@storybook/react';
import { TextBlock } from './TextBlock';

const data = {
   tagline: '<b>Tagline text</b>',
   bodyAdvanced:
      '<p>Two to three lines of text, Sit neque facilisis pharetra morbi platea elementum. Elementum felis imperdiet feugiat montes ut velit interdum lobortis erat. Nulla massa porta suspendisse!</p>',
   linkField: {
      url: 'https://example.com',
      text: 'Learn more',
      customText: 'Click here to learn more',
   },
};

export default {
   title: 'Blocks/TextBlock',
   component: TextBlock,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof TextBlock>;

export const Default = () => <TextBlock data={data} />;
export const WithoutTaglineAndLink = () => (
   <TextBlock data={{ bodyAdvanced: data.bodyAdvanced }} />
);

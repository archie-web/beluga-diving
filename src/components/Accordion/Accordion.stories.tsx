import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

export default {
   title: 'Components/Accordion',
   component: Accordion,
   tags: ['autodocs'],
   //    parameters: {
   //       layout: 'centered',
   //    },
   decorators: [
      (Story) => (
         <main className="mx-auto max-w-4xl">
            <Story />
         </main>
      ),
   ],
} as Meta;

type Story = StoryObj<typeof Accordion>;

// Framer Motion: Accordion
// https://codesandbox.io/s/framer-motion-accordion-qx958?file=/src/Example.tsx:637-652

const items: AccordionItem[] = [
   {
      id: 1,
      title: 'Accordion Item 1',
      content: '<p>Content of Accordion Item 1</p>',
      imageUri: 'https://via.placeholder.com/800x600.png?text=Accordion+Image',
   },
   {
      id: 8088,
      title: 'no image',
      content:
         '<h5>Content of Accordion Item 3</h5> <p>Often viewed as the essential or a community, modern libraries are more han just book storage and lending facilities. For Christchurch especially, the central city library is a symbol of hope, a welcoming place for everyone, a place to belong.</P>',
   },
   {
      id: 5487,
      title: 'no content',
      imageUri: 'https://via.placeholder.com/800x600.png?text=no+content',
   },
   {
      id: 3,
      title: 'Accordion Item 2',
      content: '<p>Content of Accordion Item 2</p>',
      imageUri:
         'https://via.placeholder.com/800x600.png?text=Accordion+Image+2',
   },
   {
      id: 444,
      content: '<p>Content of Accordion Item 2</p>',
   },
];

export const Default: Story = {
   args: {
      items: items,
   },
};

export const AccordionWithImages: Story = {
   args: {
      ...Default.args,
      className: 'grid gap-[3%] lg:grid-cols-2',
      hasImage: true,
   },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FlipCard from './FlipCard';
import Image from 'next/image';
import placeholderImage from '@public/images/placeholder.jpg';

export default {
   title: 'Components/Flip Card',
   component: FlipCard,
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      className: { control: 'text', defaultValue: '' },
   },
} as ComponentMeta<typeof FlipCard>;

/* card content */

const FrontContent = () => (
   <div className="h-full w-full bg-primaryColour">
      <Image
         src="https://via.placeholder.com/800x600.jpg"
         width={300}
         height={300}
         alt=""
         className="absolute inset-0 z-10 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-6 z-20 text-white">
         <h3>Flip card component</h3>
         <button>hover on me to flip the card</button>
      </div>
   </div>
);
const BackContent = () => (
   <div className="space-y-2 p-6">
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
         unde quaerat corporis doloremque debitis fuga. Sed aspernatur nostrum
         sit facere, quos consequuntur explicabo excepturi ut fuga. Eum
         consequuntur cum ex necessitatibus modi?
      </p>
   </div>
);

const Template: ComponentStory<typeof FlipCard> = (args) => (
   <FlipCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
   frontContent: <FrontContent />,
   backContent: <BackContent />,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
   frontContent: <FrontContent />,
   backContent: <BackContent />,
   className: 'w-96 h-96',
};

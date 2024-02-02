import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileNav } from './MobileNav';

const dummyArray = Array.from({ length: 3 }, (_, index) => index + 1);

export default {
   title: 'Navigation/Mobile',
   component: MobileNav,
} as ComponentMeta<typeof MobileNav>;

const Template: ComponentStory<typeof MobileNav> = () => {
   const [isActive, setActive] = useState(false);
   const handleOnclick = (e?: any) => {
      // e && e.preventDefault();
      setActive(!isActive);
   };
   return (
      <div className="flex justify-between p-4">
         <button
            className={`bg-blue-100 p-4 ${isActive ? 'is-active' : ''}`}
            onClick={() => handleOnclick()}
         >
            open drawer
         </button>
         <MobileNav
            isActive={isActive}
            data={dummyArray}
            // onClick={() => handleOnclick()}s
         />
      </div>
   );
};

export const Example = Template.bind({});

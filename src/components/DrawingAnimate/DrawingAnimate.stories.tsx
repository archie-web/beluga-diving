import { Story, Meta } from '@storybook/react';
import { DrawingAnimate } from './DrawingAnimate';

export default {
   title: 'Components/DrawingAnimate',
   component: DrawingAnimate,
   //    parameters: {
   //       layout: 'centered',
   //    },
} as Meta;

export const Example = () => (
   <DrawingAnimate>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 156 73"
         className="my-svg-class"
      >
         <path
            className="invisible inset-0 stroke-yellow-400 stroke-[10px]"
            strokeDasharray="1"
            strokeDashoffset="1"
            pathLength="1"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="m91 65 12.2-16c8.2 16.6 24.9 10.2 24.9 10.2s11.5 6.3 11.8 6.4c1.8.6 3.8-.1 5-1.6l3.7-4.4c1.8-1.8 1.9-4.7.2-6.7-2.5-2.9-10-10.8-11.1-11.9-2.4-2.2-3-4.1-3.4-6-.4-2.4-1.7-4.5-3.6-6.1L105 9.9l-1.9 10.7C80 9.1 53 36.1 53 36.1l8.6 6.8S26.1 38.7 8 63"
            style={{
               transformOrigin: '0 0',
            }}
         />
      </svg>
   </DrawingAnimate>
);

export const LineAnimate = () => (
   <DrawingAnimate>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 608 665">
         <path
            className="invisible inset-0 stroke-primaryColour stroke-[33px]"
            strokeDasharray="1"
            strokeDashoffset="1"
            pathLength="1"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            d="M-19.683 644.999c-69.203-165.363 127.877-286.488 84.502-388.743C11.76 131.179-107.81 237.467-61.43 340.952c37.928 84.62 139.059 96.084 196.468 69.27 109.794-51.277 154.018-126.545 137.801-182.425-25.275-87.124-153.902-28.827-105.897 65.921 83.869 165.546 244.804 75.659 257.111-87.738l103.139 237.681 63.113-478.79"
            style={{
               transformOrigin: '0 0',
            }}
         />
      </svg>
   </DrawingAnimate>
);

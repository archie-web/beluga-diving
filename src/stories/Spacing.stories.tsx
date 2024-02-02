import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const SpaceBlock = ({ className = 'space-y-md', tag = 'p' }: any) => {
   const HtmlTag = tag;

   // check if tag start from H1 to H6
   const isHeading = tag.match(/h[1-6]/g);

   return (
      <ul
         className={className}
         style={{
            backgroundImage: 'linear-gradient(#eee 1px, transparent 1px);',
            backgroundSize: ' 100% 12px;',
         }}
      >
         {[1, 2, 3].map((item) => (
            <li className=" bg-rose-50__" key={item}>
               <HtmlTag
                  key={item}
                  className={isHeading ? 'leading-tight' : 'leading-normal'}
               >
                  By default the browser’s font size is 16px, this is something
                  we will continue to work with. Many sources state 45–75
                  characters[^1] is an ideal line length, with 66 being optimal.
                  It’s important to strike the balance between too short and too
                  long line lengths.
               </HtmlTag>
            </li>
         ))}
      </ul>
   );
};

const meta: Meta<typeof SpaceBlock> = {
   /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
   tags: ['autodocs'],
   title: 'Spacing',
   component: SpaceBlock,
   argTypes: {
      className: {
         options: ['space-y-sm', 'space-y-md', 'space-y-lg', 'space-y-xl'],
         control: { type: 'radio' },
      },
      tag: {
         options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5'],
         control: { type: 'radio' },
      },
   },
   decorators: [
      (Story) => (
         <main
            style={{
               backgroundImage: 'linear-gradient(#eee 1px, transparent 1px);',
               backgroundSize: ' 100% 12px;',
            }}
         >
            <section className="mx-auto max-w-4xl">
               <Story />
            </section>
         </main>
      ),
   ],
};

export default meta;

type Story = StoryObj<typeof SpaceBlock>;

export const Playground: Story = {
   args: {
      className: 'space-y-md',
   },
};

// export const Default = () => <SpaceBlock />;
// export const LargeSpacing = () => <SpaceBlock className="space-y-lg" />;
// export const extraLarge = () => <SpaceBlock className="space-y-xl" />;

// export const LargeSpacing: Story = {
//    args: {
//       ...Spacing.args,
//    },
// };

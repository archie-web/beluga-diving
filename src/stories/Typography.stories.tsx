import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { limitCharacters } from '../utils/limitCharaters';

const meta: Meta<typeof WYSIWYG> = {
   /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
   tags: ['autodocs'],
   title: 'Typography',
   decorators: [
      (Story) => (
         <section className="wysiwyg mx-auto max-w-5xl">
            <Story />
         </section>
      ),
   ],
};

const LoremIpsum =
   'Tertiary care medical services are provided by specialist hospitals or regional centers equipped with diagnostic and treatment facilities not generally available at local hospitals. These include trauma centers, burn treatment centers, advanced neonatology unit services, organ transplants, high-risk pregnancy, radiation oncology, etc.';

export default meta;

// type Story = StoryObj<typeof WYSIWYG>;

export const Heading = () => {
   return (
      <>
         {/* loop heading tag */}
         {[1, 2, 3, 4, 5, 6].map((level) => {
            const HeadingLevel = `h${level}` as keyof JSX.IntrinsicElements;
            return (
               <HeadingLevel key={level} className={`h${level}`}>
                  Heading {level} The quick brown fox jumps over the lazy dog.
               </HeadingLevel>
            );
         })}
      </>
   );
};

export const UnorderList = () => (
   <ul>
      {[1, 2, 3].map((item) => (
         <li key={item}>Lorem ipsum ul child list {item} </li>
      ))}
      <li>
         unorder list.
         <ul>
            {[1, 2, 3].map((item) => (
               <li key={item}>Lorem ipsum ul child list {item} </li>
            ))}
         </ul>
      </li>
   </ul>
);

export const OrderList = () => (
   <ol>
      {[1, 2, 3].map((item) => (
         <li key={item}>Lorem ipsum parent ol list {item} </li>
      ))}
      <li>
         order list
         <ol>
            {[1, 2, 3].map((item) => (
               <li key={item}>Lorem ipsum ol child list {item} </li>
            ))}
            <li>
               Lorem ipsum dolor sit.
               <ol>
                  {[1, 2, 3, 4].map((item) => (
                     <li key={item}>Lorem ipsum grand child ol list {item} </li>
                  ))}
               </ol>
            </li>
            <li>Lorem ipsum dolor sit.</li>
         </ol>
      </li>
   </ol>
);

export const Blockquote = () => (
   <blockquote>
      <p>{LoremIpsum}</p>
      <cite className="not-italic">John Doe, CEO of Potato</cite>
   </blockquote>
);

export const WYSIWYG = () => (
   <>
      <Heading />
      <figure>
         <Image
            src="https://via.placeholder.com/800x600.jpg?text=Image"
            alt="hero"
            width={800}
            height={600}
         />
         <figcaption>Image caption</figcaption>
      </figure>
      <Blockquote />
      <UnorderList />
      <h2 className="h2">Paragraph</h2>
      <p>{LoremIpsum}</p>
      <p>{limitCharacters(LoremIpsum, 150)}</p>

      <OrderList />
   </>
);

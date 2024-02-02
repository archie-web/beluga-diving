import type { Meta, StoryObj } from '@storybook/react';
import { Magellan } from './Magellan';
import { LazyMotion, domAnimation, m } from 'framer-motion';

//👇 This default export determines where your story goes in the story list
export default {
   component: Magellan,
   title: 'Components/Magellan',
   parameters: {
      layout: 'fullscreen',
   },
   // tags: ['autodocs'],
} as Meta<typeof Magellan>;

type Story = StoryObj<typeof Magellan>;

const navItems = ['home', 'about', 'contact', 'lorem ipsum']; // placeholder array for demonstration

export const Default: Story = {
   args: {
      items: navItems,
   },
};

export const ScrollToSection = () => (
   <>
      <Magellan items={navItems} />
      {navItems.map((item, index) => (
         <section
            key={item}
            id={`anchor-${item}`}
            className={`py-space mx-auto h-screen max-w-7xl p-4 odd:bg-slate-100 even:bg-slate-50`}
         >
            <LazyMotion features={domAnimation} strict>
               <m.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                     duration: 1,
                     delay: 0.5,
                  }}
                  className="space-y-sm"
               >
                  <h3 className="h3 font-bold">{`Section > ${item}`}</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Corporis cupiditate blanditiis nam modi? Ducimus neque
                     nostrum numquam eaque, voluptatum tempora modi expedita,
                     laborum laudantium corrupti culpa, ad tenetur quasi ipsam
                     repellendus quibusdam deserunt!
                  </p>
               </m.p>
            </LazyMotion>
         </section>
      ))}
   </>
);

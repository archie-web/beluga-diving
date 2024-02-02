import { Meta } from '@storybook/react';
import { AnimateIn, FadeInSlideRight } from '../components/Animations';
import { motion } from 'framer-motion';

export default {
   title: 'Animation/Framer Motion',
   component: AnimateIn,
} as Meta;

export const Default = () => (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`my-10 max-w-3xl bg-slate-50 p-6`}
   >
      <h3 className="h3">heading</h3>
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum ea
         debitis maxime maiores atque tempora sunt.
      </p>
   </motion.div>
);

export const StaggerSlideUp = () => (
   <>
      <AnimateIn stagger>
         {[1, 2, 3, 4].map((item) => (
            <motion.div
               variants={FadeInSlideRight}
               className={`my-10 max-w-3xl bg-slate-50 p-6`}
               key={item}
            >
               <h3 className="h3">heading {item}</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  nostrum ea debitis maxime maiores atque tempora sunt.
               </p>
            </motion.div>
         ))}
      </AnimateIn>
   </>
);

export const StaggerSlideIn = () => {
   return (
      <AnimateIn stagger>
         {[1, 2, 3, 4].map((item) => (
            <motion.div
               variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: {
                     opacity: 1,
                     x: 0,
                  },
               }}
               key={item}
            >
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  nostrum ea debitis maxime maiores atque tempora sunt.
               </p>
            </motion.div>
         ))}
      </AnimateIn>
   );
};

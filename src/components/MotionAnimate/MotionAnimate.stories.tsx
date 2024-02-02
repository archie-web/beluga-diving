import { Meta } from '@storybook/react';
import { MotionAnimate } from './MotionAnimate';

export default {
   title: 'Animation/Motion',
   component: MotionAnimate,
} as Meta;

export const AnimateUp = () => (
   <>
      {/* <div className="h-screen">scroll to reveal</div> */}
      <MotionAnimate className="[&>*]:translate-y-10">
         {[1, 2, 3, 4].map((item) => (
            <div className={`my-10 max-w-3xl bg-slate-50 p-6`} key={item}>
               <h3 className="h3">Heading {item}</h3>
               <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  nostrum ea debitis maxime maiores atque tempora sunt,
                  architecto dolore in voluptatibus? Corrupti error id optio nam
                  placeat possimus repellat doloribus recusandae, magni
                  voluptas.
               </p>
            </div>
         ))}
      </MotionAnimate>
   </>
);

export const AnimateSlideIn = () => (
   <MotionAnimate className="[&>*]:-translate-x-10">
      {[1, 2, 3, 4].map((item) => (
         <p key={item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum
            ea debitis maxime maiores atque tempora sunt.
         </p>
      ))}
   </MotionAnimate>
);

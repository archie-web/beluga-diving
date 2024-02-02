import { useEffect, useRef } from 'react';
import { inView, animate, stagger, ElementOrSelector } from 'motion';
import { twMerge } from 'tailwind-merge';

// add props to the component
type Props = {
   children: React.ReactNode;
   className?: string;
};

export const MotionAnimate = ({ children, className }: Props) => {
   const fadeInRef = useRef<HTMLDivElement>(null);
   const childElement = '*';
   const initial = `[&>${childElement}]:opacity-0`;
   // const initial = { opacity: 0, transform: 'translateX(-33%)' };
   // const animation = { opacity: 1, transform: 'none' };
   const period = 0.5;

   useEffect(() => {
      if (!fadeInRef.current) return;

      inView(
         fadeInRef.current,
         ({ target }) => {
            // console.log(target.querySelectorAll('*'));
            animate(
               target.querySelectorAll(childElement) as ElementOrSelector,
               { opacity: 1, transform: 'none' },
               {
                  //   delay: stagger(period / 5),
                  delay: stagger(0.03),
                  duration: period,
                  easing: [0.17, 0.55, 0.55, 1],
               },
            );
         },
         { amount: 0.33 },
      );
   }, []);
   return (
      // add className for the inital state e.e. [&>*]:-translate-x-10 [&>*]:opacity-0
      <div className={twMerge(initial, className)} ref={fadeInRef}>
         {children}
      </div>
   );
};

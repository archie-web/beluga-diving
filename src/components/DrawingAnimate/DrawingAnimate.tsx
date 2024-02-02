import { useEffect, useRef, ReactNode } from 'react';
import { timeline, inView, AnimationOptions, ElementOrSelector } from 'motion';

type Props = {
   children: ReactNode;
   className?: string;
};

export const DrawingAnimate = ({ children, className = '' }: Props) => {
   const animateRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!animateRef.current) return;

      inView(
         animateRef.current as ElementOrSelector,
         ({ target }) => {
            const lineDrawing = (progress: number) => ({
               // This property makes the line "drawing" in when animated
               strokeDashoffset: 1 - progress,
               // Each line will be hidden until it starts drawing
               // to fix a bug in Safari where the line can be
               // partially visible even when progress is at 0
               visibility: 'visible',
            });
            timeline([
               [
                  target.querySelectorAll('path') as ElementOrSelector,
                  lineDrawing(1),
                  { duration: 2, delay: 0.25, at: 0 } as AnimationOptions,
               ],
            ]);
         },
         { amount: 0.25 },
      );
   }, []);

   const iconClasses: string =
      'invisible stroke-[10px] inset-0 stroke-yellow-400';

   return (
      <figure ref={animateRef} role="presentation">
         {/* only works with SVGs that have a single path element */}
         {children}
      </figure>
   );
};

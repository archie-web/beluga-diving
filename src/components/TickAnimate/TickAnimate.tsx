"use client"

import { AnimationOptions, ElementOrSelector, animate, timeline } from 'motion';
import { useEffect, useRef } from 'react';
import { MotionAnimate } from '../MotionAnimate/MotionAnimate';

type Props = {
   className?: string;
   heading: string;
   successMessage: string;
};

export const TickAnimate = ({
   className = '',
   successMessage,
   heading,
}: Props) => {
   const tickRef = useRef<SVGPathElement>(null);
   const circleRef = useRef<SVGCircleElement>(null);
   const messageRef = useRef<HTMLDivElement>(null);

   const delayTiming = 0.3;
   const durationTiming = 1.2;

   /*  The useEffect hook is used to trigger an animation when the horse element is in view, */
   useEffect(() => {
      if (!tickRef.current || !circleRef.current) return;

      const drawing = (progress: number) => ({
         // This property makes the line "drawing" in when animated
         strokeDashoffset: 1 - progress,
         // Each line will be hidden until it starts drawing
         // to fix a bug in Safari where the line can be
         // partially visible even when progress is at 0
         visibility: 'visible',
      });

      timeline([
         [
            circleRef.current as ElementOrSelector,
            drawing(1),
            { duration: 0.8, delay: 0 } as AnimationOptions,
         ],
         [
            tickRef.current,
            drawing(1),
            {
               duration: durationTiming,
               delay: delayTiming,
               at: '-0.2',
            } as AnimationOptions,
         ],
      ]);

      /* text fade in */
      //   if (!messageRef.current) return;
      //   animate(
      //      messageRef.current.querySelectorAll('*') as ElementOrSelector,
      //      { opacity: 1, transform: 'none' },
      //      {
      //         delay: delayTiming + durationTiming - 0.3,
      //         duration: durationTiming,
      //         easing: [0.22, 0.03, 0.26, 1],
      //      },
      //   );
   }, []);

   const iconClasses: string =
      'invisible stroke-[6px] inset-0 stroke-green-400 fixed';
   return (
      <div className="mx-auto max-w-lg space-y-4">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            className={className}
         >
            <defs>
               <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
               >
                  <stop offset="0%" stopColor="#00bfa5" />
                  <stop offset="100%" stopColor="#a7ff83" />
               </linearGradient>
            </defs>
            <circle
               ref={circleRef}
               cx="100"
               cy="100"
               r="90"
               fill="none"
               strokeDasharray="1"
               strokeDashoffset="1"
               pathLength="1"
               strokeLinecap="round"
               strokeLinejoin="round"
               className={`${iconClasses} rotate-90`}
               style={{
                  stroke: 'url(#gradient)',
                  transformOrigin: '100px 100px',
               }}
            />
            <path
               ref={tickRef}
               d="M54 107.5 L88 138.5 L144.5 67.5"
               fill="none"
               pathLength="1"
               strokeDasharray="1"
               strokeDashoffset="1"
               strokeLinecap="round"
               strokeLinejoin="round"
               className={iconClasses}
               style={{
                  stroke: 'url(#gradient)',
               }}
            />
         </svg>

         <MotionAnimate className="space-y-3 [&>*]:-translate-y-6 [&>*]:opacity-0">
            <h2>{heading}</h2>
            <p>{successMessage}</p>
         </MotionAnimate>
      </div>
   );
};

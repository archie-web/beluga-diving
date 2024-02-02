import React, { FC, useRef, useEffect, useState } from 'react';

// still in progress

interface CircleTextProps {
   text: string;
   strokeWidth?: string;
   strokeColor?: string;
}

export const CircleText: FC<CircleTextProps> = ({
   text,
   strokeWidth = '0.1em',
   strokeColor = 'primaryColour',
}) => {
   const textRef = useRef<HTMLSpanElement>(null);
   const [circleStyle, setCircleStyle] = useState<React.CSSProperties | null>(
      null,
   );

   useEffect(() => {
      if (textRef.current) {
         const { left, top, width, height } =
            textRef.current.getBoundingClientRect();
         setCircleStyle({
            // top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`,
         });
      }
   }, [text]);

   return (
      <>
         <div className="h1 text-2xl">
            consectetur adipisicing elit. Consequatur nostrum doloremque placeat
            facere fugit tempora quod amet nisi aut. Ad sapiente quo{' '}
            <span className="text-circle whitespace-nowrap" ref={textRef}>
               {text}
            </span>{' '}
            molestias et sit vitae saepe perspiciatis accusantium maxime!
         </div>
         {circleStyle && (
            <CircleSVG
               strokeWidth={strokeWidth}
               strokeColor={strokeColor}
               circleStyle={circleStyle}
            />
         )}
      </>
   );
};

interface CircleSVGProps {
   strokeWidth: string;
   strokeColor: string;
   circleStyle: React.CSSProperties;
}

export const CircleSVG: FC<CircleSVGProps> = ({
   strokeWidth,
   strokeColor,
   circleStyle,
}) => {
   return (
      <div
         className="absolute top-0"
         style={{ ...circleStyle, backgroundColor: 'rgba(255,0,0,0.1)' }}
      >
         <svg
            className={`stroke-${strokeColor} h-full w-full scale-100 overflow-visible`}
            style={{
               strokeWidth: `max(1px, ${strokeWidth})`,
            }}
         >
            <path
               d="M103.05,85.25 C 168.942,89.42999999999999 313,84.3 313,44.4 C 313,10.675 218.03799999999998,0 150.208,0 S -6.77,10.675 -6.77,43.26 S 67.843,93.705 229.02,89.42999999999999"
               fill="none"
               vectorEffect="non-scaling-stroke"
               strokeDasharray="569"
               strokeDashoffset="1138"
            ></path>
         </svg>
      </div>
   );
};

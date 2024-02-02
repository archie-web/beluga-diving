import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface HamburgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   isOpen: boolean;
   targetId?: string;
   className?: string;
}

const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
   function HamburgerFunction({ isOpen, targetId, className, ...rest }, ref) {
      const linesCount = 4;

      const generateLines = () => {
         return Array.from({ length: linesCount }, (_, index) => (
            <motion.i
               className={twMerge(
                  `ease-out-expo block h-0.5 w-full bg-black transition-all duration-500 group-hover:translate-x-0 dark:bg-white`,
                  index === linesCount - 1 && 'absolute top-[10px] opacity-0', // last line
                  isOpen &&
                     (index === 0
                        ? 'translate-y-5 opacity-0'
                        : index === 1
                        ? 'translate-x-0 rotate-45'
                        : index === 2
                        ? 'translate-y-[-5px] opacity-0'
                        : 'bg-primaryColour translate-x-0 -rotate-45 opacity-100'), // last line
                  className,
               )}
               key={index}
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{
                  delay: 0.5 + index * 0.123,
                  type: 'spring',
               }}
            />
         ));
      };

      return (
         <button
            className="hamburger group flex shrink-0 appearance-none items-center justify-center outline-none"
            aria-label="toggle navigation"
            aria-expanded={isOpen}
            aria-controls={targetId}
            ref={ref}
            {...rest}
         >
            <div className="relative flex h-5 w-10 flex-col justify-between transition-all">
               {generateLines()}
            </div>
         </button>
      );
   },
);

export default Hamburger;

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
   children: React.ReactNode;
   className?: string;
   spacing?: 'lg' | 'md' | 'sm' | undefined;
}

export const Stack = ({ children, className, spacing = 'md' }: Props) => {
   function switchValue(value: string) {
      switch (value) {
         case 'lg':
            return 'gap-10';
         case 'md':
            return 'gap-6';
         case 'sm':
            return 'gap-2';
         default:
            'gap-4';
      }
   }

   return (
      <div
         className={twMerge(
            'flex flex-col items-center lg:flex-row',
            switchValue(spacing),
            className,
         )}
      >
         {children}
      </div>
   );
};

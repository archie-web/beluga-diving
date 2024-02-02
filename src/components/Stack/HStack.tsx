import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
   children: React.ReactNode;
   className?: string;
   spacing?: 'lg' | 'md' | 'sm' | undefined;
}

export const HStack = ({ children, className, spacing = 'md' }: Props) => {
   function switchValue(value: string) {
      switch (value) {
         case 'lg':
            return 'space-x-lg';
         case 'md':
            return 'space-x-md';
         case 'sm':
            return 'space-x-sm';
         default:
            'space-x-4';
      }
   }

   return (
      <div
         className={twMerge(
            'flex items-center',
            switchValue(spacing),
            className,
         )}
      >
         {children}
      </div>
   );
};

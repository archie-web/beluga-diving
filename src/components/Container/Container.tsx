import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLDivElement> & {
   children: React.ReactNode;
   flush?: boolean;
   /**
    * How large should the container be?
    */
   size?: 'lg' | 'md' | 'sm' | 'xl' | '2xl' | 'xs';
};

export const Container = ({
   children,
   flush = false,
   size = 'xl',
   className = '',
   ...rest
}: Props) => {
   function maxW(value: string) {
      switch (value) {
         case '2xl':
            return 'max-w-[1680px]';
         case 'xl':
            return 'max-w-7xl';
         case 'lg':
            return 'max-w-5xl';
         case 'md':
            return 'max-w-3xl';
         case 'sm':
            return 'max-w-2xl';
         case 'xs':
            return 'max-w-xl';
         default:
            return 'max-w-7xl';
      }
   }

   return (
      <div
         data-testid="container"
         className={twMerge(
            'mx-auto',
            maxW(size),
            !flush && 'px-space',
            className,
         )}
         {...rest}
      >
         {children}
      </div>
   );
};

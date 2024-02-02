import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
   isRequired?: boolean;
   className?: string;
   children: React.ReactNode;
}
export const Label = ({
   isRequired = false,
   className = '',
   children,
   ...rest
}: Props) => {
   return (
      <label
         className={twMerge(
            'flex gap-1',
            className,
         )}
         {...rest}
      >
         {children} {isRequired && <span className='text-red-500'>*</span>}
      </label>
   );
};

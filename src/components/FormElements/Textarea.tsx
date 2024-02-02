import React, { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Label, ErrorMessage, baseInputStyle } from '@/components/FormElements';

type TextareaProps = {
   className?: string;
   isRequired?: boolean;
   register?: any;
   name?: string;
   label?: string;
   error: any;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({
   className = '',
   register,
   isRequired,
   name,
   error,
   label,
   ...rest
}) => {
   //    console.log(error);

   const textareaStyle = `min-h-[228px]`;
   return (
      <div className="space-y-1">
         <div className={twMerge('space-y-xs group w-full', className)}>
            {!!label && <Label isRequired={isRequired}>{label}</Label>}
            <textarea
               className={twMerge(
                  baseInputStyle,
                  textareaStyle,
                  !!error && 'border-red-400',
               )}
               name={name}
               {...register(name, { required: isRequired })}
               {...rest}
            />
         </div>

         {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
      </div>
   );
};

import { ErrorMessage, Label } from '@/components/FormElements';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { FieldValues, FieldError } from 'react-hook-form';

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   isRequired?: boolean;
   className?: string;
   instructions?: string;
   name: string;
   register?: any;
   errors: FieldValues['errors'];
}

export const baseInputStyle = `w-full max-w-xl p-4 outline-none -outline-offset-2 border-2 border-gray focus:outline-blue-300 appearance-none leading-none hover:placeholder:opacity-30 placeholder:opacity-70`;

const Input = ({
   isRequired = false,
   name,
   className = '',
   register,
   label,
   errors,
   ...rest
}: InputProps) => {
   const hasError = !!errors && errors[name];

   return (
      <div className="group flex flex-col space-y-3 aria-[invalid=true]:*:font-bold">
         {label && (
            <Label data-slot="description" isRequired={isRequired}>
               {label}
            </Label>
         )}
         <input
            className={twMerge(
               baseInputStyle,
               className,
               hasError && '!border-red-400',
            )}
            name={name}
            aria-invalid={hasError ? true : false}
            {...register(name, { required: isRequired })}
            {...rest}
         />
         {/* errors will return when field validation fails  */}
         {hasError && <ErrorMessage>{errors[name].message}</ErrorMessage>}
      </div>
   );
};

export default Input;

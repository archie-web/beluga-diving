import { twMerge } from 'tailwind-merge';

interface Props {
   children: any;
   className?: string;
}

export const ErrorMessage = ({ children, className, ...rest }: Props) => {
   return (
      <p
         className={twMerge(
            'flex items-center gap-2 text-sm leading-tight tracking-wide text-red-500',
            className,
         )}
         {...rest}
      >
         <svg
            className="h-4 w-4 fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
         >
            <path d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM8 14a6 6 0 0 0 6-6 6 6 0 0 0-6-6 6 6 0 0 0 0 12Zm0-4.5a.7.7 0 0 1-.8-.8v-4c0-.4.4-.7.8-.7s.8.3.8.8v4c0 .4-.4.7-.8.7Zm0 1c.5 0 1 .5 1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1c0-.5.4-1 1-1Z" />
         </svg>
         {children}
      </p>
   );
};

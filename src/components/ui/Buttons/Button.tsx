import { Sizes } from '@constants/index';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   // label?: string;
   children: React.ReactNode;
   reversed?: boolean; // reversed the button colours
   /**
    * How large should the button be?
    */
   size?: 'lg' | 'md' | 'sm' | 'xl' | '2xl' | 'xs';
   /**
    * Optional click handler
    */
   variant?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'outline'
      | 'link'
      | 'invert';
}

export const Button = ({
   // label,
   className,
   children,
   variant = 'primary',
   reversed = false,
   size = 'md',
   ...rest
}: ButtonProps) => (
   <button
      data-testid="button-component"
      className={twMerge(
         'button',
         'disabled:pointer-events-none disabled:opacity-40',
         variant === 'outline' &&
            'border-primaryColour text-primaryColour bg-transparent',
         variant === 'link' && 'text-primaryColour border-none bg-transparent',
         `text-${size}`,
         className,
      )}
      {...rest}
   >
      {children}
   </button>
);

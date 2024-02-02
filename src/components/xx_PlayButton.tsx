import { ReactNode } from 'react';

type PlayButtonProps = {
   onClick?: () => void;
   children?: ReactNode;
   isDisabled?: boolean;
   className?: string;
};

export const PlayButton = ({
   children,
   isDisabled = false,
   className = '',
   onClick,
}: PlayButtonProps) => (
   <button
      className={`block h-20 w-20 rounded-full bg-secondaryColour/30 transition-all duration-500 hover:bg-black focus:outline-none lg:h-32 lg:w-32 ${className}`}
      disabled={isDisabled}
      onClick={onClick}
   >
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 134 134"
         className="fill-secondaryColour"
      >
         <path d="M47 101.9V36.1L104 69l-57 32.9zm10-48.5v31.2L84 69 57 53.4z" />
      </svg>
      {children && <span>{children}</span>}
   </button>
);

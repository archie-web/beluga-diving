// not using at the moment, could be used for mobile nav custom close button

interface closeButtonProps {
   className?: string;
   onClick: any;
}
export const CloseButton = ({
   className = '',
   onClick,
   ...props
}: closeButtonProps) => {
   return (
      <button
         className={`p-4 text-blue-400 transition-all hover:rotate-180 ${className}`}
         onClick={onClick}
         id="nav-close-button"
         {...props}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            width={20}
            height={20}
            viewBox="0 0 24.9 24.9"
         >
            <path
               fill="currentColor"
               d="m.4 22.4 22-22c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-21.9 22c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.6-.1-2.1z"
            />
            <path d="m2.6.4 21.9 21.9c.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0L.4 2.6C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4z" />
         </svg>
      </button>
   );
};

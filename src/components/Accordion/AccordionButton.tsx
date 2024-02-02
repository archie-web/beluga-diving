import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface AccordionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   isOpen: boolean;
   title?: string;
   content?: string;
   className?: string;
}

const AccordionButton = ({
   isOpen,
   title = 'untitled',
   content,
   className,
   ...rest
}: AccordionButtonProps) => {
   return (
      <button
         className={twMerge(
            'group flex w-full items-center justify-between py-[1em]',
            className,
         )}
         role="button"
         aria-expanded={isOpen}
         aria-controls="accordion-content"
         {...rest}
      >
         {/* Use a <span> element instead of a <p> element for the title to avoid a nested block-level element inside a button */}
         {title && (
            <div className="group-hover:text-primaryColour text-[1.5em]">
               {title}
            </div>
         )}

         {content && (
            <motion.svg
               style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center',
               }}
               initial={{ rotateX: 0 }}
               animate={{ rotateX: isOpen ? 180 : 0 }}
               transition={{ duration: 0.33 }}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               className={`group-hover:fill-primaryColour h-5 w-5`}
            >
               <path
                  d="m10 15.4.9-1 6.9-6.9 1-1-1.9-1.9-1 1-5.9 5.9-5.9-5.9-.9-1-2 1.9 1 1L9 14.4l1 1z"
                  fillRule="evenodd"
               />
            </motion.svg>
         )}

         <span className="sr-only">{isOpen ? 'expanded' : 'collapsed'}</span>
      </button>
   );
};

export default AccordionButton;

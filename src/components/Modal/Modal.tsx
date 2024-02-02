import { ZINDEX } from '@/constants';
import {
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';
import { inView, animate, stagger, ElementOrSelector } from 'motion';

export interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
   // isOpen?: boolean;
   // onClose?: () => void;
   className?: string;
   children: React.ReactNode;
}

const Modal = ({ children, className = '', ...props }: ModalProps) => {
   const dialogRef = useRef<HTMLDialogElement>(null); // Ref to the dialog element
   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

   // if (!dialogRef.current) return;

   function closeAnimate() {
      animate(
         dialogRef.current as ElementOrSelector,
         { opacity: 0 },
         {
            duration: 0.15,
         },
      );
   }

   // Open the dialog element
   const handleOpenDialog = () => {
      if (dialogRef.current) {
         dialogRef.current.showModal();
         //  animate(
         //     dialogRef.current as ElementOrSelector,
         //     { opacity: 1 },
         //     {
         //        duration: 0.87,
         //        easing: [0.17, 0.55, 0.55, 1],
         //     },
         //  );
         setIsDialogOpen(true);
      }
   };

   // Close the dialog element on outside click
   const handleOutsideClick = useCallback(
      (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
         if (
            dialogRef.current &&
            (e.clientX < dialogRef.current.getBoundingClientRect().left ||
               e.clientX > dialogRef.current.getBoundingClientRect().right ||
               e.clientY < dialogRef.current.getBoundingClientRect().top ||
               e.clientY > dialogRef.current.getBoundingClientRect().bottom)
         ) {
            // closeAnimate();
            // set timeout to wait for the animation to finish
            setTimeout(() => {
               dialogRef.current?.close();
            }, 150);
            setIsDialogOpen(false);
         }
      },
      [dialogRef],
   );

   // Close the dialog element
   const handleOnClose = useCallback(() => {
      //   closeAnimate();
      dialogRef.current?.close();
   }, [dialogRef]);

   useEffect(() => {
      if (dialogRef.current && isDialogOpen) {
         // vertical center position of the dialog
         const dialogHeight = dialogRef.current.clientHeight;
         dialogRef.current.style.marginTop = `-${dialogHeight / 2}px`;

         // Prevent scrolling when dialog is open
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   }, [isDialogOpen]);

   return (
      <>
         <dialog
            ref={dialogRef}
            onClick={(e) => handleOutsideClick(e)}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 rounded-xl text-current backdrop:cursor-pointer
            backdrop:bg-black/60 backdrop:backdrop-blur-sm dark:bg-slate-900 ${className}`}
            style={{ zIndex: ZINDEX.MODAL }}
            {...props}
         >
            <div className="space-y-4">{children}</div>
            {/* close button should not be the first element due to automatically focused */}
            <button
               className="absolute right-6 top-6 transition-all duration-500 hover:scale-95 hover:text-primaryColour"
               style={{ zIndex: ZINDEX.MODAL + 2 }}
               onClick={() => handleOnClose()}
               title="close modal"
            >
               <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                  aria-label="close modal"
               >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
               </svg>
            </button>
         </dialog>

         <button className="button" onClick={handleOpenDialog}>
            open modal
         </button>
      </>
   );
};

export default Modal;

import { motion, MotionProps, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface PlayButtonProps extends MotionProps {
   children?: React.ReactNode;
   className?: string;
   isDiaable?: boolean;
   onClick: () => void;
}

export const PlayButton = ({
   children,
   isDiaable = false,
   className,
   onClick,
   ...rest
}: PlayButtonProps) => (
   <motion.button
      className={twMerge(
         ' bg-primaryColour/90 group block h-20 w-20 rounded-full focus:outline-none lg:h-32 lg:w-32',
         className,
      )}
      disabled={isDiaable}
      onClick={onClick}
      whileHover={{ scale: 1.125, opacity: 0.87 }}
      transition={{ type: 'spring', stiffness: 100 }}
      {...rest}
   >
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 134 134"
         className="fill-white/90 drop-shadow-md transition-all"
      >
         <path d="M47 101.9V36.1L104 69l-57 32.9zm10-48.5v31.2L84 69 57 53.4z" />
      </svg>
      {children && <span>{children}</span>}
   </motion.button>
);

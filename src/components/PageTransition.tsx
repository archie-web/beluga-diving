import { motion, MotionProps } from 'framer-motion';

/* this is depreciated and will be removed in the future */

type Props = MotionProps & {
   children: React.ReactNode;
};

export const PageTransition = ({ children, ...rest }: Props) => (
   <motion.div
      className=""
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...rest}
   >
      {children}
   </motion.div>
);

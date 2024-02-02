import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
}

/* play/pause button for the video block  */

export const InvisibleButton = ({ className, ...rest }: Props) => (
   <button
      className={twMerge(
         'absolute inset-0 block h-full w-full bg-green-100/10',
         className,
      )}
      {...rest}
   />
);

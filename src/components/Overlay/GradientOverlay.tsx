import { twMerge } from 'tailwind-merge';

interface GradientOverlayProps
   extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
   className?: string;
   direction?: 'to-right' | 'to-left' | 'to-top' | 'to-bottom';
}

export const GradientOverlay = ({
   className,
   direction = 'to-right',
   ...rest
}: GradientOverlayProps) => (
   <aside
      className={twMerge(
         'pointer-events-none absolute z-10 block h-full w-full to-transparent',
         className,
         direction === 'to-left' && 'right-0 top-0 bg-gradient-to-l',
         direction === 'to-right' && 'left-0 top-0 bg-gradient-to-r',
         direction === 'to-bottom' && 'left-0 top-0 bg-gradient-to-b',
         direction === 'to-top' && 'bottom-0 left-0 bg-gradient-to-t',
      )}
      role="presentation"
      aria-hidden="true"
      {...rest}
   />
);

import { twMerge } from 'tailwind-merge';

interface BloxProps extends React.HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: React.ReactNode;
}
export const Blox = ({ className, children, ...rest }: BloxProps) => (
   <div className={twMerge('p-6', className)} data-testid="blox" {...rest}>
      {children}
   </div>
);

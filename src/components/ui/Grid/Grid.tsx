import { twMerge } from 'tailwind-merge';

interface Props {
   children?: React.ReactNode;
   className?: string;
}

export const Grid = ({ children, className }: Props) => {
   return (
      <div
         className={twMerge(
            'grid w-full grid-cols-4 gap-x-[3%] gap-y-[5vh] md:grid-cols-8 lg:grid-cols-12',
            className,
         )}
      >
         {children}
      </div>
   );
};

export const SimpleGrid = ({ children, className }: Props) => {
   return (
      <div
         className={twMerge(
            'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
            className,
         )}
      >
         {children}
      </div>
   );
};

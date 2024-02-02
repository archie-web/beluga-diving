import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

export type LinkFieldProps = {
   customText?: string;
   text: string;
   title?: string;
   url: string;
   type?: any;
};

interface NextLinkProps extends LinkProps {
   children: React.ReactNode;
   isExternal?: boolean;
   className?: string;
}

export const NextLink = ({
   children,
   isExternal,
   className = '',
   ...rest
}: NextLinkProps) => {
   // Determine the link properties based on whether it's external or not
   const linkProps = isExternal
      ? {
           target: '_blank',
           rel: 'noopener noreferrer',
           ...rest, // Include all other properties from 'rest'
        }
      : { ...rest }; // Include all properties from 'rest'

   return (
      <Link className={twMerge('', className)} {...linkProps}>
         {children}
      </Link>
   );
};

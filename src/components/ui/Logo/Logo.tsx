import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import SITE_CONFIG from '../../../constants/siteConfig';

interface Props {
   className?: string;
   reversed?: boolean;
}

export const Logo = ({ className = '', reversed = false }: Props) => (
   <Link
      href="/"
      className={(twMerge('logo'), className)}
      title={SITE_CONFIG.SITE_NAME}
      aria-label={SITE_CONFIG.SITE_NAME}
   >
      <span className="sr-only invisible">{SITE_CONFIG.SITE_NAME}</span>
      <svg
         viewBox="0 0 128 64"
         xmlns="http://www.w3.org/2000/svg"
         className={`h-16 w-32 ${
            reversed ? 'fill-white' : 'fill-primaryColour'
         }`}
      >
         <rect x="0" y="0" width="3px" height="100%" fill="current" />
         <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="16"
            className="fill-secondaryColour"
         >
            Debluga Diving
         </text>
      </svg>
   </Link>
);

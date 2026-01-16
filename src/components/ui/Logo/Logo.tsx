import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import SITE_CONFIG from '@/constants/siteConfig';
import Image from 'next/image';

interface Props {
   reversed?: boolean;
   className?: string;
}

export const Logo = ({ reversed = false, className = '' }: Props) => (
   <Link
      href="/"
      title={SITE_CONFIG.SITE_NAME}
      aria-label={SITE_CONFIG.SITE_NAME}
      className={twMerge('inline-block', className)}
   >
      <span className="sr-only invisible">{SITE_CONFIG.SITE_NAME}</span>
      <Image
         src="/images/logo.png"
         alt="logo"
         width={197}
         height={92}
         className="h-24 w-auto"
      />
   </Link>
);

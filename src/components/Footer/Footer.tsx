import NextLink from '@components/NextLink';
import SITE_CONFIG from '@constants/siteConfig';
import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Container } from '../Container';

type FooterProps = {
   className?: string;
   children?: ReactNode;
};

export function Footer({ children, className }: FooterProps) {
   return (
      <footer className={twMerge('bg-white py-4', className)}>
         <Container className="flex divide-x divide-slate-400 leading-none text-white mix-blend-difference [&>*]:px-[0.75em]">
            {children}
            <div>
               &copy;{new Date().getFullYear()}&nbsp;
               <Link href="/" passHref>
                  {SITE_CONFIG.SITE_NAME}
               </Link>
            </div>
            <div>
               Website by&nbsp;
               <NextLink href={SITE_CONFIG.POWERED_BY.URL} isExternal>
                  {SITE_CONFIG.POWERED_BY.NAME}
               </NextLink>
            </div>
         </Container>
      </footer>
   );
}

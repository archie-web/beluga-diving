import NextLink from '@components/NextLink';
import SITE_CONFIG from '@constants/siteConfig';
import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Container } from '../Container';
import { navItems } from '../Navigation/navItems';
import { TextLink } from '@components/ui/text';
import { footerLinks, externalLinks } from '@/data/footerLinks';
import { Logo } from '@/components/ui/Logo';

type FooterProps = {
   className?: string;
   children?: ReactNode;
};

export function Footer({ children, className }: FooterProps) {
   return (
      <footer
         className={twMerge(
            'bg-secondaryColour pt-space lg:rounded-tl-[80px]',
            className,
         )}
      >
         <Container className="text-white">
            <div className="grid gap-12 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
               <Logo reversed className="hidden lg:block" />
               <div className="space-y-lg">
                  <h4>Navigation</h4>
                  <ul>
                     {navItems.map((item, index) => (
                        <FooterListItem item={item} key={index} />
                     ))}
                  </ul>
               </div>

               <div className="space-y-lg">
                  <h4>Other Links</h4>
                  <ul>
                     {externalLinks.map((item, index) => (
                        <FooterListItem item={item} key={index} isExternal />
                     ))}
                  </ul>
               </div>

               <div className="space-y-lg">
                  <h4>Contact Us</h4>
                  <ul>
                     {footerLinks.map((item, index) => (
                        <FooterListItem item={item} key={index} />
                     ))}
                  </ul>
               </div>
            </div>

            {children}
            <div className="pt-space justify-between pb-6 lg:flex">
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
            </div>
         </Container>
      </footer>
   );
}

function FooterListItem({ item, ...props }: any) {
   return (
      <li className="flex items-center gap-4">
         <i className="block h-px w-6 bg-white/40" />
         <NextLink
            className="block py-1 lg:py-2 lg:text-lg font-semibold"
            href={item.uri}
            {...props}
         >
            {item.label}
         </NextLink>
      </li>
   );
}

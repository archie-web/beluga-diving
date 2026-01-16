import NextLink from '@components/NextLink';
import SITE_CONFIG from '@constants/siteConfig';
import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Container } from '../Container';
import { navItems } from '../Navigation/navItems';
import { Text, TextLink } from '@components/ui/text';
import { footerLinks, externalLinks } from '@/data/footerLinks';
import { Logo } from '@/components/ui/Logo';
import ParallaxImage from '@/components/ParallaxImage';

type FooterProps = {
   className?: string;
   children?: ReactNode;
};

export function Footer({ children, className }: FooterProps) {
   return (
      <footer
         className={twMerge(
            'bg-secondaryColour pt-space relative overflow-hidden lg:rounded-tl-[80px]',
            className,
         )}
      >
         <ParallaxImage
            src="/images/bg-footer.jpg"
            containerClass="absolute top-0 left-0 z-0"
         />
         <Container className="relative z-10 text-white">
            <div className="flex flex-col gap-12 lg:gap-16 items-center lg:items-start">
                  <Logo reversed />

               <div className="flex items-center flex-col md:grid gap-12 grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:w-full lg:items-start">

               <FooterList heading="Navigation" items={navItems} />
               <FooterList
                  heading="Other Links"
                  items={externalLinks}
                  isExternal={true}
               />
               <FooterList heading="Enquire or book" items={footerLinks} />
               </div>
            </div>

            {children}
            <div className="pt-space pb-6 md:justify-start text-center gap-2 md:text-left flex flex-col md:flex-row md:divide-x divide-white/30 leading-none text-sm">
               <div className="">
                  &copy;{new Date().getFullYear()}&nbsp;
                  <Link href="/" passHref>
                     {SITE_CONFIG.LEGAL_NAME}
                  </Link>
               </div>
               <div className="md:pl-2">
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
      <li className="flex items-center gap-4 justify-center lg:justify-start">
         <i className="lg:block hidden h-px w-3 bg-white/40" />
         <NextLink
            className="block py-1 font-semibold lg:py-2 lg:text-lg "
            href={item.uri}
            {...props}
         >
            {item.label}
         </NextLink>
      </li>
   );
}

const FooterList = ({ heading, items, isExternal = false }: any) => {
   return (
      <div className="space-y-sm">
         <p className="font-shrikhand text-2xl">{heading}</p>
         <ul>
            {items.map((item: any, index: number) => (
               <FooterListItem
                  item={item}
                  key={index}
                  isExternal={isExternal}
               />
            ))}
         </ul>
      </div>
   );
};

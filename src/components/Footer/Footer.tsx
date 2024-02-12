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
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 pb-14">
               <div className="hidden space-y-4 lg:block">
                  <Logo reversed />
                  {/* <Text>
                     Vavaʻu is an island group, consisting of one large island
                     (ʻUtu Vavaʻu) and 40 smaller ones, in Tonga. It is part of
                     Vavaʻu District, which includes several other individual
                     islands.
                  </Text> */}
               </div>

               <FooterList heading="Navigation" items={navItems} />
               <FooterList
                  heading="Other Links"
                  items={externalLinks}
                  isExternal={true}
               />
               <FooterList heading="To enquire or book" items={footerLinks} />
            </div>

            {children}
            <div className="pt-space justify-between pb-6 lg:flex">
               <div>
                  &copy;{new Date().getFullYear()}&nbsp;
                  <Link href="/" passHref>
                     {SITE_CONFIG.LEGAL_NAME}
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
            className="block py-1 font-semibold lg:py-2 lg:text-lg"
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
      <div className="space-y-lg">
         <h5 className="uppercase">{heading}</h5>
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

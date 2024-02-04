import { NavItemType } from '@/components/Navigation/navItems';
import SITE_CONFIG from '@/constants/siteConfig';

export const externalLinks: NavItemType[] = [
   {
      label: 'Fiji airways',
      uri: 'https://www.fijiairways.com/',
   },
   {
      label: 'Motel Bed & Breakfast',
      uri: '/#about-us',
   },
];

export const footerLinks: NavItemType[] = [
   {
      label: 'Email Us',
      uri: `mailto:${SITE_CONFIG.EMAIL}`,
   },
];

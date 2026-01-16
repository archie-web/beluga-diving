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
   {
    label: 'TripAdvisor',
    uri: 'https://www.tripadvisor.co.nz/Attraction_Review-g317043-d3458477-Reviews-Beluga_Diving_Vava_u-Neiafu_Vava_u_Islands.html',
   }
];

export const footerLinks: NavItemType[] = [
   {
      label: 'Email us',
      uri: `mailto:${SITE_CONFIG.EMAIL}`,
   },
];

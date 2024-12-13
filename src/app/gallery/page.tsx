import Banner from '@/components/Blocks/Banner';
import Gallery from '@/components/Blocks/Gallery';
import ServiceList from '@/components/Blocks/ServiceList';
import TextAndMedia from '@/components/Blocks/TextAndMedia';
import TwoColumns from '@/components/Blocks/TwoColumns';
import { offers } from '@/data/offers';
import { about } from '@/data/about';
import SITE_CONFIG from '@/constants/siteConfig';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: `${SITE_CONFIG.SITE_NAME} | ${SITE_CONFIG.SITE_TAGLINE}`,
   description: SITE_CONFIG.SITE_DESCRIPTION,
};

export default function Page() {
   return <Gallery />;
}

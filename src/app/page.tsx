import Banner from '@/components/Blocks/Banner';
import Gallery from '@/components/Blocks/Gallery';
import ServiceList from '@/components/Blocks/ServiceList';
import TextAndMedia from '@/components/Blocks/TextAndMedia';
import TwoColumns from '@/components/Blocks/TwoColumns';
import SITE_CONFIG from '@/constants/siteConfig';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: SITE_CONFIG.SITE_NAME,
};

export default function Page() {
   return (
      <>
         <Banner />
         <TextAndMedia />
         <ServiceList />
         <section className="space-y-xl py-space">
            <TwoColumns />
            <Gallery />
         </section>
      </>
   );
}

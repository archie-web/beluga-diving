import Banner from '@/components/Blocks/Banner';
import TextAndMedia from '@/components/Blocks/TextAndMedia';
import ServiceList from '@/components/Blocks/ServiceList';
import TwoColumns from '@/components/Blocks/TwoColumns';
import Gallery from '@/components/Blocks/Gallery';
// import { whyUs } from '@/data/whyUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Page Title',
};

export default function Page() {
   return (
      <>
         <Banner />
         <TextAndMedia />
         <ServiceList />
         <TwoColumns />
         <Gallery />
      </>
   );
}

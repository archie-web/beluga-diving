import Banner from '@/components/Blocks/Banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Page Title',
};

export default function Page() {
   return (
      <>
         <Banner />
      </>
   );
}

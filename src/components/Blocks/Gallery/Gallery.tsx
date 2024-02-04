import { Container } from '@/components/Container';
import { Text } from '@/components/ui/text';
import { about } from '@/data/about';
import parse from 'html-react-parser';
import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

interface Props {
   data: {
      tagline: string;
      bodyAdvanced: string;
      linkField?: {
         text: string;
         url: string;
      };
   };
}

const gridSpacing = 'gap-2 lg:gap-6';

export const Gallery = ({}) => {
   return (
      <section className="pb-space" id="gallery">
         <Container
            className={twJoin('grid gap-6 lg:grid-cols-2', gridSpacing)}
         >
            <div className={twJoin('flex flex-col', gridSpacing)}>
               <div className={twJoin('grid h-2/3 grid-cols-2', gridSpacing)}>
                  <div className={twJoin('flex flex-col', gridSpacing)}>
                     <Image
                        src="https://via.placeholder.com/400"
                        width={400}
                        height={400}
                        alt="snorkel"
                        className="object-cover"
                     />
                     <Image
                        src="https://via.placeholder.com/400"
                        width={400}
                        height={400}
                        alt="snorkel"
                        className="object-cover"
                     />
                  </div>
                  <Image
                     src="https://via.placeholder.com/400"
                     width={400}
                     height={400}
                     alt="snorkel"
                     className="h-full w-full object-cover"
                  />
               </div>
               <Image
                  src="https://via.placeholder.com/400x200"
                  width={400}
                  height={200}
                  alt="snorkel"
                  className="block h-1/3 w-full object-cover"
               />
            </div>

            <div className={twJoin('flex flex-col', gridSpacing)}>
               <div className={twJoin('grid h-1/3 grid-cols-2', gridSpacing)}>
                  <Image
                     src="https://via.placeholder.com/400"
                     width={400}
                     height={400}
                     alt="snorkel"
                     className="size-full object-cover"
                  />
                  <Image
                     src="https://via.placeholder.com/400"
                     width={400}
                     height={400}
                     alt="snorkel"
                     className="size-full object-cover"
                  />
               </div>
               <Image
                  src="https://via.placeholder.com/600"
                  width={600}
                  height={600}
                  alt="snorkel"
                  className="block h-2/3 w-full object-cover"
               />
            </div>
         </Container>
      </section>
   );
};

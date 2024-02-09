import { Container } from '@/components/Container';
import { Text } from '@/components/ui/text';
import { about } from '@/data/about';
import parse from 'html-react-parser';
import Image from 'next/image';

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

export const TwoColumns = ({}) => {
   return (
      <section className='py-space bg-transparent'>
         <Container className="grid gap-12 lg:grid-cols-2">
            {about.map((item, index) => (
               <div className="space-y-md" key={index}>
                  <div className="flex shrink-0 items-center gap-8">
                     <Image
                        src={item.imageUri}
                        width={120}
                        height={120}
                        alt={item.title}
                        className="h-24 w-auto object-contain"
                     />
                     <h2 className="h2">{item.title}</h2>
                  </div>

                  <Text className="opacity-70">{parse(item.content)}</Text>
               </div>
            ))}
         </Container>
      </section>
   );
};

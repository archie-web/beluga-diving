import { Container } from '@/components/Container';
import { Text } from '@/components/ui/text';
import { about } from '@/data/about';
import parse from 'html-react-parser';
import Image from 'next/image';
import { ListItemProps, AnimateList } from '@/components/AnimateList';

type ServiceListProps = {
   className?: string;
   data: ListItemProps[];
};

export const TwoColumns = ({ data }: ServiceListProps) => {
   return (
      <section className="pb-space pt-20 bg-transparent">
         <Container className="">
            <AnimateList items={data} />
            {/* {data.map((item, index) => (
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
            ))} */}
         </Container>
      </section>
   );
};

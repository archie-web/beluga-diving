import { Container } from '@/components/Container';
import { ListItemProps, AnimateList } from '@/components/AnimateList';

type ServiceListProps = {
   className?: string;
   data: ListItemProps[];
};

export const ServiceList = ({ data }: ServiceListProps) => {
   return (
      <>
         <svg viewBox="0 0 1680 225.3" className="w-full fill-sky-50">
            <path d="M1680 101c-5.7-2.2-11.3-4.6-16.9-7.1-23.1-10-46.2-21.8-69.4-33.5-69.3-35.3-138.5-70.6-207.8-57.7-53.3 9.9-106.6 48.2-159.9 86.6-39.1 28.1-78.2 56.3-117.3 73.2-90.9 39.7-181.7 17.6-272.6-4.6-1.5-.4-3-.7-4.6-1.1-4-1-7.9-1.9-11.9-2.9-88.4-21.5-176.9-43.1-265.3-42.8-37.3-.1-74.5 3.6-111.8 7.4-55.1 5.6-110.3 11.1-165.4 4.1-92.4-11.8-184.8-56.7-231-79.9L0 19.8v205.4h1680V101z" />
         </svg>
         <section id="services">
            <div className="bg-sky-50 py-20">
               <Container>
                  <div className="pb-space flex flex-col items-center gap-5 text-center">
                     <h3 className="h4 text-orange-600">Our services</h3>
                     <h2 className="h1">Beluga Diving Vavau also offers</h2>
                     <p className="max-w-4xl">
                        Our adventurous scuba diving activity visits several
                        different dive sites, caves, swim through and coral
                        sites aiming to provide you with memories that will last
                        long.
                     </p>
                  </div>

                  <AnimateList items={data} />
               </Container>
            </div>
         </section>
         <svg viewBox="0 0 1690 256" className="w-full fill-sky-50">
            <path d="m1690 256-70.42-10.7C1549.17 235 1408.33 213 1267.5 208c-140.83-5-281.667 5-422.5-21.3C704.167 160 563.333 96 422.5 101.3 281.667 107 140.833 181 70.417 218.7L0 256V0h1690v256Z" />
         </svg>
      </>
   );
};

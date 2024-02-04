import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import { Logo } from '@/components/ui/Logo';

const Banner = () => {
   return (
      <section className="banner ralative">
         <div className="absolute right-0 top-0 z-[-1] lg:w-1/2">
            <Image
               src="/images/banner-img.png"
               alt="diving"
               width={876}
               height={743}
               className="w-full"
            />
         </div>
         <Container className="relative z-10">
            <div className="max-w-xl space-y-4 lg:space-y-7">
               {/* <Logo /> */}
               <h1>
                  Diving, whale watching and swimming with whales in Vavau Tonga
               </h1>
               <Text className="">
                  Our Dive Operation is located at Fangafoa Marina in the
                  capital of Vava&apos;u, called Neiafu. Tonga has a lot to
                  offer the world with its beautiful Coral Reefs that stretch
                  over fifty different dive spots and there is still a lot more
                  to discover. The visibility is between 25 meters (82 feet) to
                  40 meters (131 feet) and the Water Temperature is between 24C
                  degrees (74F) to 28C (84F)
               </Text>
               <div className="group-buttons lg:py-4">
                  <Button href="mailto:hello@archie.kiwi" color="orange">
                     Booking now
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Banner;

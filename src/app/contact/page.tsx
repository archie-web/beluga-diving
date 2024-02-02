import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { InternalBanner } from '@/components/InternalBanner/InternalBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Contact Us',
};

export default function Testing() {
   return (
      <main>
         <InternalBanner heading="page heading" />
         <section className="py-space">
            <Container size="xs" className="space-y-lg">
               <h1 className="h2">Contact us</h1>
               <ContactForm />
            </Container>
         </section>
      </main>
   );
}

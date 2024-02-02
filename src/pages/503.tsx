import { Container } from '@components/Container';
import Layout from '@components/Layout';
import NextLink from '@components/NextLink';
import SITE_CONFIG from '@constants/siteConfig';
import Head from 'next/head';

export default function Custom404() {
   return (
      <Layout>
         <Head>
            <title>{SITE_CONFIG.SITE_NAME} | 503</title>
            <meta
               property="og:title"
               content={`${SITE_CONFIG.SITE_NAME} | 503`}
               key="title"
            />
            <meta
               name="robots"
               content="noindex, nofollow, nosnippet, noarchive, nocache"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Container className="py-space flex min-h-[75vh] items-center">
            <div className="wysiwyg">
               <h1 className="h1">
                  Error 503 <br /> Service Unavailable
               </h1>
               <p className="lead-paragraph">
                  We are sorry, but the service you are trying to access is
                  currently unavailable. This may be due to high traffic,
                  maintenance, or other technical issues.
               </p>
               <p className="lead-paragraph">
                  Please try again later, or contact our support team if the
                  problem persists. Thank you for your patience and
                  understanding.
               </p>
               <div className="button-group flex pt-4">
                  <NextLink href="/" className="button">
                     return to the homepage
                  </NextLink>
               </div>
            </div>
         </Container>
      </Layout>
   );
}

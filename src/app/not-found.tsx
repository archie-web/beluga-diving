import { Container } from '@components/Container';
import NextLink from '@components/NextLink';
import SITE_CONFIG from '@constants/siteConfig';
// import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: `${SITE_CONFIG.SITE_NAME} | 404 page`,
   openGraph: {
      title: `${SITE_CONFIG.SITE_NAME} | 404 page`,
      images: ['/images/placeholder-image.jpg'],
   },
};

export default function NotFound() {
   return (
      <>
         {/* <Head>
            <title>{SITE_CONFIG.SITE_NAME} | 404</title>
            <meta
               property="og:title"
               content={`${SITE_CONFIG.SITE_NAME} | 404`}
               key="title"
            />
            <meta
               name="robots"
               content="noindex, nofollow, nosnippet, noarchive, nocache"
            />
         </Head> */}
         <Container className="p-space flex min-h-[75vh] items-center">
            <div className="wysiwyg">
               <h1 className="h1">Page Not Found</h1>
               <p className="">
                  The page you were looking for could not be found on our
                  server. This might be because:
               </p>
               <ul>
                  <li>The page has been removed or renamed</li>
                  <li>The page no longer exists</li>
                  <li>The URL you entered is incorrect</li>
               </ul>
               <p className="">
                  We apologize for any inconvenience this may have caused.
                  Please try the following
               </p>
               <ul>
                  <li>Check the URL for typos</li>
                  <li>
                     Use the navigation menu to find what you are looking for
                  </li>
                  <li>
                     Contact our support team if you continue to have problems
                  </li>
               </ul>
               <p className="">Thank you for your understanding</p>
               <div className="button-group flex items-center gap-4 pt-4 lg:gap-12">
                  <NextLink href="/" className="button">
                     return to the homepage
                  </NextLink>
               </div>
            </div>
         </Container>
      </>
   );
}

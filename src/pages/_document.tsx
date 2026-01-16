import SITE_CONFIG from '@/constants/siteConfig';
import FavIcon from '@components/FavIcon';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
   return (
      <Html className="scroll-smooth antialiased" lang="en">
         <Head>
            <Script
               async
               src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.GOOGLE_ANALYTICS_ID}`}
               strategy="afterInteractive"
            />
            <Script async id="google-analytics" strategy="afterInteractive">
               {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SITE_CONFIG.GOOGLE_ANALYTICS_ID}');`}
            </Script>
            <meta
               name="apple-mobile-web-app-title"
               content={SITE_CONFIG.SITE_NAME}
            />
            <meta name="application-name" content={SITE_CONFIG.SITE_NAME} />
            <link rel="canonical" href={SITE_CONFIG.SITE_URL} />
            <meta
               property="og:description"
               content={SITE_CONFIG.SITE_DESCRIPTION}
            />
            <meta name="description" content={SITE_CONFIG.SITE_DESCRIPTION} />
            {/* <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(structuredData),
               }}
               key="item-jsonld"
            /> */}

            {/* {['dev', 'staging'].includes(enviroment) && (
               <>
                  <meta
                     name="robots"
                     content="noindex, nofollow, nosnippet, noarchive, nocache"
                  />
                  <meta
                     name="googlebot"
                     content="noindex, nofollow, nosnippet, noarchive, nocache"
                  />
                  <meta
                     name="bingbot"
                     content="noindex, nofollow, nosnippet, noarchive, nocache"
                  />
               </>
            )} */}

            <FavIcon />
         </Head>
         <body className=" bg-zinc-50 dark:bg-zinc-900">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

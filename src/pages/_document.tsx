import SITE_CONFIG from '@/constants/siteConfig';
import FavIcon from '@components/FavIcon';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
// import theme from '@/../tailwind.config';

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

interface DocumentProps {
   environment: string;
}

export default function Document() {
   return (
      <Html className="scroll-smooth antialiased" lang="en">
         <Head>
            <script dangerouslySetInnerHTML={{ __html: modeScript }} />
            <Script
               async
               src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.GOOGLE_ANALYTICS_ID}`}
               strategy="afterInteractive"
            />
            <Script async id="google-analytics" strategy="afterInteractive">
               {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SITE_CONFIG.GOOGLE_ANALYTICS_ID}');`}
            </Script>
            {/* Google Fonts */}
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    as="style"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                /> */}

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
         <body className=" bg-zinc-50   dark:bg-zinc-900">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

import SITE_CONFIG from '@constants/siteConfig';

const FavIcon = () => {
   return (
      <>
         <link rel="icon" href="/favicon/favicon.ico" />
         <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
         />
         <link rel="manifest" href="/favicon/site.webmanifest" />
         <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            // color={SITE_CONFIG.BRAND_COLOUR}
            color="#212121"
         />
         <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            // color={SITE_CONFIG.BRAND_COLOUR}
            color="#212121"
         />
         <meta name="apple-mobile-web-app-title" content="Snippit" />
         <meta name="application-name" content={SITE_CONFIG.SITE_NAME} />
         <meta
            name="msapplication-TileColor"
            // color={SITE_CONFIG.BRAND_COLOUR}
            content="#212121"
         />
         <meta
            name="theme-color"
            // color={SITE_CONFIG.BRAND_COLOUR}
            content="#212121"
         />
      </>
   );
};

export default FavIcon;

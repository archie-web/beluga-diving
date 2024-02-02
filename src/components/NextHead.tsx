import Head from 'next/head';
import SITE_CONFIG from '@/constants/siteConfig';

interface Props {
   pageTitle?: string;
   slug?: string;
}

export default function NextHead({ pageTitle, slug }: Props) {
   const renderTitle = pageTitle
      ? `${pageTitle} | ${SITE_CONFIG.SITE_NAME}`
      : `${SITE_CONFIG.SITE_NAME} | ${SITE_CONFIG.SITE_TAGLINE}`;
   return (
      <Head>
         <title>{renderTitle.toString()}</title>
         <meta property="og:title" content={renderTitle} key="title" />
         <link
            rel="canonical"
            key="canonical"
            href={SITE_CONFIG.SITE_URL + (slug ? '/' + slug : '')}
         />
      </Head>
   );
}

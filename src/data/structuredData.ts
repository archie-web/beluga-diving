import SITE_CONFIG from '@/constants/siteConfig';

export const structuredData = {
   '@context': 'http://schema.org',
   '@type': 'LocalBusiness',
   name: SITE_CONFIG.SITE_NAME,
   description: SITE_CONFIG.SITE_DESCRIPTION,
   url: SITE_CONFIG.SITE_URL,
   priceRange: 'On application',
   image: SITE_CONFIG.SITE_URL + '/images/logo.png',
   telephone: SITE_CONFIG.PHONE_NUMBER,
//    address: {
//       '@type': 'PostalAddress',
//       postOfficeBoxNumber: SITE_CONFIG.PO_BOX,
//       addressLocality: 'Vava\'u',
//       addressRegion: 'Vava\'u',
//       addressCountry: 'Tonga',
//    },
   contactPoint: {
      '@type': 'ContactPoint',
    //   telephone: SITE_CONFIG.PHONE_NUMBER,
      contactType: 'Enquiry',
      email: SITE_CONFIG.EMAIL,
      contactOption: 'email, phone',
      areaServed: 'Vava\'u, Tonga',
      availableLanguage: 'English, Tongan',
   },
};

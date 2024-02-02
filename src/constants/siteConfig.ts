import theme from '@/theme';

const SITE_CONFIG = {
   SITE_NAME: 'SITE NAME',
   LEGAL_NAME: 'LEGAL_NAME Ltd',
   SITE_DESCRIPTION: '000000000000000.',
   SITE_URL: 'https://platocreative.co.nz',
   POWERED_BY: {
      NAME: 'POWERED',
      URL: 'https://platocreative.co.nz',
   },
   PHONE_NUMBER: '0800 123 456',
   SITE_TAGLINE: 'fast and reliable web design and development',
   MOBILE: '022 044 6761',
   EMAIL: 'archie@platocreative.co.nz',
   BRAND_COLOUR: theme && theme.colors ? theme.colors.brandColour : '#222222',
   SITE_ROOT_PATH: '/',

   GOOGLE_ANALYTICS_ID: 'G-X0X0X0000',

   // use reCAPTCHA V2 tickbox, admin: archieweb.nz@gmail.com
   RECAPTCHA_SITE_KEY: '6LduBgsnAAAAALElUIyRT57qy408ADYa01ezj-gn',
   RECAPTCHA_SECRET_KEY: '6LduBgsnAAAAAPUZ2euBVyXxHplLA4oz5mVyjLBG',

   // localhost site key
   RECAPTCHA_TEST_SITE_KEY: process.env.RECAPTCHA_TEST_SITE_KEY,
   RECAPTCHA_TEST_SECRET_KEY: process.env.RECAPTCHA_TEST_SECRET_KEY,

   EMAILJS_serviceID: 'service_id_emailjs',
   EMAILJS_templateID: 'template_id_emailjs',
   EMAILJS_userID: '4_0OLk42KOdRyYQHi', // API keys / public key, under account settings
};

export default SITE_CONFIG;

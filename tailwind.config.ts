import { Config } from 'tailwindcss';

const fallbackFonts: string[] = [
   'system-ui',
   '-apple-system',
   'Helvetica Neue',
   'sans-serif',
];

const colours = {
   brandColour: '#F25D2F',
deepWaterBlue: '#0A2342'
};

const config: Config = {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   // darkMode: ['class', '[data-mode="dark"]'],  // Toggle dark-mode based on data-mode="dark"
   darkMode: 'class',
   theme: {
      extend: {
         screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1366px',
            xxl: '1441px',
            '3xl': '1920px',
            '4xl': '2560px',
         },
         colors: {
            current: 'currentColor',
            primaryColour: colours.brandColour,
            secondaryColour: colours.deepWaterBlue,
            tertiaryColour: '#FFDED8',
            ...colours,
         },
         transitionDelay: {
            1500: '1.5s',
            2000: '2s',
         },
         transitionTimingFunction: {
            'in-lazy': 'cubic-bezier(.57,-0.2,.01,1)',
            'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
            'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
         },
         aspectRatio: {
            '4/3': '4 / 3',
            '6/4': '6 / 4',
         },
         fontFamily: {
            sans: ['Roboto', ...fallbackFonts],
            headings: ['Roboto Bold', ...fallbackFonts],
            serif: ['Georgia', 'serif'],
         },
      },
   },
   // plugins: [require('@tailwindcss/typography')],
};

export default config;

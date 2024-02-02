import { Config } from 'tailwindcss';

const fallbackFonts: string[] = [
   'system-ui',
   '-apple-system',
   'Helvetica Neue',
   'sans-serif',
];

const colours = {
   blackBeauty: '#212121',
   heritageCream: '#FDF7F3',
   magicLilac: '#C08FF5',
   champagneYellow: '#FFE65C',
   stakesGreen: '#58DB8B',
   paleGray: '#E7E2DE',
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
            navy: {
               300: '#514D8A',
               400: ' #25216D',
               DEFAULT: '#25216D',
            },
            brandColour: colours.champagneYellow,
            primaryColour: colours.magicLilac,
            secondaryColour: colours.stakesGreen,
            tertiaryColour: colours.champagneYellow,
            grey: {
               400: colours.paleGray,
               DEFAULT: colours.paleGray,
            },
            black: colours.blackBeauty,
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

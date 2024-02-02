import React, { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
   return (
      <svg viewBox="0 0 32 32" {...props}>
         <path d="M32 16.1C32 7.2 24.8 0 16 0S0 7.2 0 16.1c0 8 5.8 14.7 13.5 15.9V20.8H9.4v-4.7h4.1v-3.5c0-4 2.4-6.3 6-6.3 1.8 0 3.6.3 3.6.3v4h-2c-2 0-2.6 1.2-2.6 2.5v3H23l-.7 4.7h-3.7V32C26.1 30.8 32 24.1 32 16.1z" />
      </svg>
   );
};

export default FacebookIcon;

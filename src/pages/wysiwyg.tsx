import DrawingAnimate from '@/components/DrawingAnimate';
import { InternalBanner } from '@/components/InternalBanner/InternalBanner';
import SwiperThumbs from '@/components/SwiperThumbs';
import Layout from '@components/Layout';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

// import required modules

const inter = Inter({ subsets: ['latin'] });

export default function Wysiwyg() {
   return (
      <Layout>
         <Head>
            <title>WYSIWYG</title>
         </Head>

         <InternalBanner
            heading="WYSIWYG"
            bodyText='A WYSIWYG editor is a system that allows users to see what the end result will look like while the interface or document is being created. WYSIWYG is an acronym for "what you see is what you get".'
            ctaButton={{
               label: 'CTA Button',
               href: '/',
            }}
         />
      </Layout>
   );
}

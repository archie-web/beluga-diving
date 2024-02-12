import SITE_CONFIG from '@/constants/siteConfig';
import { ServerResponse } from 'http';

function getCurrentISODate() {
   const now = new Date();
   const year = now.getFullYear().toString().padStart(4, '0');
   const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
   const day = now.getDate().toString().padStart(2, '0');

   return `${year}-${month}-${day}`;
}

function generateSiteMap() {
   return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_CONFIG.SITE_URL}</loc>
       <lastmod>${getCurrentISODate()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
   // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: ServerResponse }) {
   res.setHeader('Content-Type', 'text/xml');
   // we send the XML sitemap to the browser
   res.write(generateSiteMap());
   res.end();

   return {
      props: {},
   };
}

export default SiteMap;

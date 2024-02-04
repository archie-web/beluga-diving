/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      minimumCacheTTL: 172800, // 2 days
      deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920, 2048],
      domains: [
         'tailwindui.com',
         'example.co.nz.ddev.site',
         'i.vimeocdn.com',
         'i.ytimg.com',
         'youtube.com',
         'via.placeholder.com',
         'craftypixels.com',
         'source.unsplash.com'
      ],
   },
};

module.exports = nextConfig;

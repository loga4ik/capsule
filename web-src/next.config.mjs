/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:4000/api/:path*',
        },
      ];
    },
  };
  
// export default nextConfig;

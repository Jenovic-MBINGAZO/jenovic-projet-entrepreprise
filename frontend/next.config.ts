/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Pour Next.js en mode statique
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint pendant la build
  },
  images: { 
    unoptimized: true, // Désactive l'optimisation d'images pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

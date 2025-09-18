/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // active le mode strict de React
    swcMinify: true,       // minification SWC rapide
  
    experimental: {
      appDir: true,        // obligatoire si tu utilises App Router
    },
  
    images: {
      // Autorise le chargement d'images depuis ces domaines
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // tu peux spécifier ton domaine exact
        },
      ],
    },
  
    env: {
      // Expose tes variables côté serveur (et client si NEXT_PUBLIC_)
      MONGODB_URI: process.env.MONGODB_URI,
      ADMIN_SECRET: process.env.ADMIN_SECRET,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
  
    async rewrites() {
      return [
        // Redirige /api/admin/reservation vers ton dossier d’API
        {
          source: '/api/admin/reservation',
          destination: '/api/admin/reservation/route',
        },
      ]
    },
  
    eslint: {
      ignoreDuringBuilds: true, // ignore les warnings ESLint pendant build
    },
  }
  
  module.exports = nextConfig
  
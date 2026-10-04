import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Necesario para imágenes estáticas en GitHub Pages
  },
};

export default nextConfig;

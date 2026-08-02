/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.100.4"],

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.prod.website-files.com", "philrice.gov.ph", "www.philrice.gov.ph"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;

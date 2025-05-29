import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: [], // Add your image domains here
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
};

export default nextConfig;

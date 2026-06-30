import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/space-innovation",
        destination: "/leosky-labs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

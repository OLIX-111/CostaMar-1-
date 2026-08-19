import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lromanarealestate.com",
      },
    ],
  },
};

export default nextConfig;

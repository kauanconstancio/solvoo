import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/announce",
        destination: "/pages/announce",
      },
      {
        source: "/message",
        destination: "/pages/message",
      },
      {
        source: "/menu",
        destination: "/pages/menu",
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projekte",
        destination: "/referenzen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

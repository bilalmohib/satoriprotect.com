import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/help",
        destination: "https://support.beyondintelligence.ai",
        permanent: true,
      },
      {
        source: "/help/:path*",
        destination: "https://support.beyondintelligence.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://beyondintelligence.ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

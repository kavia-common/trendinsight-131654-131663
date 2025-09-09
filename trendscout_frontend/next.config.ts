import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable static optimization to avoid build issues
  // output: "export",
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

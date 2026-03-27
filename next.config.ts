import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/project-savor-teaser",
  assetPrefix: "/project-savor-teaser",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

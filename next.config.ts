import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Office-Premises-Cost-analysis",
  assetPrefix: "/Office-Premises-Cost-analysis/",
  images: { unoptimized: true },
};

export default nextConfig;

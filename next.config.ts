import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isGithubPages ? "/curso3-movielab-app" : "",
  assetPrefix: isGithubPages ? "/curso3-movielab-app/" : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
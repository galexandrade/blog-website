import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Markdown copy of each post, for AI tools
      { source: "/blog/:slug.md", destination: "/blog/:slug/markdown" },
    ];
  },
};

export default nextConfig;

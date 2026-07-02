import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      { source: "/menu",    destination: "/menu.html" },
      { source: "/contact", destination: "/contact.html" },
      { source: "/space",   destination: "/space.html" },
      { source: "/admin",   destination: "/admin.html" },
      { source: "/privacy", destination: "/privacy.html" },
      { source: "/terms",   destination: "/terms.html" },
      { source: "/pod",     destination: "/" },
    ];
  },
};

export default nextConfig;

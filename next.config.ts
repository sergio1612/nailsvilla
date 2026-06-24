import type { NextConfig } from "next";

const wooStoreUrl =
  process.env.WOOCOMMERCE_URL ||
  process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL;

let wooImageHost: string | undefined;
try {
  wooImageHost = wooStoreUrl ? new URL(wooStoreUrl).hostname : undefined;
} catch {
  wooImageHost = undefined;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      ...(wooImageHost
        ? [
            {
              protocol: "https" as const,
              hostname: wooImageHost,
              pathname: "/**",
            },
            {
              protocol: "http" as const,
              hostname: wooImageHost,
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;

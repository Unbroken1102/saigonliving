import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { vlastaClusterRedirects } from "./app/lib/vlasta-cluster";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/blog/bo-nnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc",
        destination: "/blog/bo-tnmt-tu-choi-nang-cong-suat-bai-rac-da-phuoc",
        permanent: true,
      },
      ...Object.entries(vlastaClusterRedirects).map(([source, destination]) => ({
        source: `/blog/${source}`,
        destination: `/blog/${destination}`,
        permanent: true,
      })),
    ];
  },
  images: {
    qualities: [68, 75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "saigonliving.net",
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

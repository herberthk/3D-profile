/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"], // add this
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;

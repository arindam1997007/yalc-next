/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        followSymlinks: true,
      };
      config.snapshot = {
        unmanagedPaths: [
          /^(.+?[\\/]node_modules[\\/](@personal[\\/]project1)(@.+?[\\/])?.+?)[\\/]/,
        ],
      };
    }
    return config;
  },
};

export default nextConfig;

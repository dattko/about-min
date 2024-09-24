import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src')],
    prependData: `@import "styles/functions.scss"; @import "styles/mixin.scss"; @import "styles/base.scss";`,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
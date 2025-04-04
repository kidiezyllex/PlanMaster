/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: process.cwd(),
  outputFileTracingExcludes: {
    '*': [
      'node_modules/**/*',
    ],
  },
};

module.exports = nextConfig;
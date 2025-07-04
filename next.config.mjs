/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    //output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'geriasa.blob.core.windows.net',
          },
          {
            protocol: 'https',
            hostname: 'cdn.builder.io',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          },
        ],
      },
      webpack: (
          config,
          { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
        ) => {
          // Important: return the modified config
          config.module.rules.push(
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
            {
              test: /\.html$/,
              loader: 'html-loader',
            }
          )
          return config
        },
};



export default nextConfig;

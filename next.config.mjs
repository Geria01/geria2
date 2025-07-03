/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    images: {
        domains: ['localhost', 'geriasa.blob.core.windows.net', 'cdn.builder.io'],
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

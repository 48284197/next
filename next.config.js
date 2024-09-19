
const path = require('path');
const { DefinePlugin } = require('webpack');
module.exports = {
  

  webpack: (config, { isServer }) => {
    
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: path.resolve(__dirname, 'node_modules/cesium/Source')
    };
    config.plugins.push(
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('/cesium')
      })
    );
    if (!isServer) {
      config.externals = config.externals.map(external => {
        if (typeof external !== 'function') return external;
        return (context, request, callback) => {
          if (request.match(/^cesium/)) return callback();
          return external(context, request, callback);
        };
      });
    }
    return config;
  },

  //代理
  async rewrites() {
    return {
      fallback: [
        {
          source: '/music/:path*',
          destination: 'https://xuxiweii.top/music/:path*',
        }
      ]
    }
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

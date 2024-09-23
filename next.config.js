
const path = require('path');
const { DefinePlugin } = require('webpack');
module.exports = {
  

  webpack: (config, { isServer }) => {
    return config;
  },

  //代理
  async rewrites() {
    return {
      fallback: [
        {
          source: '/music/:path*',
          destination: 'https://music-api.heheda.top/:path*',
        }
      ]
    }
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

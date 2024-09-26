
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
        //音乐接口
        {
          source: '/music/:path*',
          destination: 'https://music-api.heheda.top/:path*',
        },
        //后台系统
        {
          source: '/admin',
          destination: 'https://xuxiweii.s3.bitiful.net/web/reactAdmin/index.html',
        },
        //后台接口
     
      ]
    }
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

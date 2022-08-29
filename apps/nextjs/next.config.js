const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const path = require('path')

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    // if (options.isServer) {
    //   config.externals = ['react', ...config.externals]
    // }
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-hook-form': path.resolve(__dirname, './node_modules/react-hook-form'),
      // 'react-hook-form-mui': path.resolve(__dirname, './node_modules/react-hook-form-mui'),
      '@mui/material': path.resolve(__dirname, './node_modules/@mui/material'),
      '@mui/icons-material': path.resolve(__dirname, './node_modules/@mui/icons-material'),
    }
    // config.resolve.alias['react-dom'] = path.resolve(__dirname, '.', 'node_modules', 'react-dom')
    // config.resolve.alias['@mui/material'] = path.resolve(__dirname, '.', 'node_modules', '@mui/material')
    // config.resolve.alias['@emotion/react'] = path.resolve(__dirname, '.', 'node_modules', '@emotion/react')
    return config
  }
})

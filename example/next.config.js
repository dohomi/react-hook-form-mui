const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const path = require('path')

module.exports = withBundleAnalyzer({
  future: {
    webpack5: true
  },
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals]
    }
    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react')
    config.resolve.alias['react-dom'] = path.resolve(__dirname, '.', 'node_modules', 'react-dom')
    config.resolve.alias['@mui/material'] = path.resolve(__dirname, '.', 'node_modules', '@mui/material')
    config.resolve.alias['@emotion/react'] = path.resolve(__dirname, '.', 'node_modules', '@emotion/react')
    return config
  }
})

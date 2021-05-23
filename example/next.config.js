const path = require('path')
module.exports = {
  future: {
    webpack5: true
  },
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals]
    }
    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react')
    config.resolve.alias['react-dom'] = path.resolve(__dirname, '.', 'node_modules', 'react-dom')
    return config
  }
}

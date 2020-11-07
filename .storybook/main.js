module.exports = {
  stories: ['../stories/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-knobs'],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve('ts-loader'),
  //         options: {
  //           transpileOnly: true
  //         }
  //       },
  //       {
  //         loader: require.resolve('react-docgen-typescript-loader')
  //       }
  //     ]
  //   })
  //
  //   config.resolve.extensions.push('.ts', '.tsx')
  //
  //   return config
  // }
}

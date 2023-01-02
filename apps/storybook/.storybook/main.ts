// import {StorybookViteConfig} from '@storybook/builder-vite'

// const {mergeConfig} = require('vite');

const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  features: {
    emotionAlias: false,
  },
  typescript: {
    check: false,
  },
  framework: '@storybook/react',
  core: {
    // 'builder': '@storybook/builder-vite'
    builder: 'webpack5',
  },
  // viteFinal: (config, {configType}) => {
  //     config.esbuild = {
  //         ...config.esbuild,
  //         logOverride: {'this-is-undefined-in-esm': 'silent'}
  //     }
  //     return mergeConfig(config, {
  //         resolve: {
  //             preserveSymlinks: true,
  //             dedupe: ["@storybook/client-api"]
  //         },
  //         build: {
  //             commonjsOptions: {
  //                 transformMixedEsModules: true,
  //             },
  //         },
  //     })
  // }
}
export default config

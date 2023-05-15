// import {StorybookViteConfig} from '@storybook/builder-vite'

// const {mergeConfig} = require('vite');

import {StorybookConfig} from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  typescript: {
    check: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
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
  docs: {
    autodocs: true,
  },
}
export default config

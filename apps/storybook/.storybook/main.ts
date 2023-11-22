import {StorybookConfig} from '@storybook/react-vite'

// const {mergeConfig} = require('vite');

// import {StorybookConfig} from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  // core: {
  //     builder: '@storybook/react-vite'
  // },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
export default config

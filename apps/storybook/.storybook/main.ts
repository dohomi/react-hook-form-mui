// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import {dirname, join} from 'path'
import {StorybookConfig} from '@storybook/react-vite'

const require = createRequire(import.meta.url);

// const {mergeConfig} = require('vite');

// import {StorybookConfig} from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [getAbsolutePath("@storybook/addon-docs")],

  // core: {
  //     builder: '@storybook/react-vite'
  // },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  }
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

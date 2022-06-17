import { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
  'stories': [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  'staticDirs': ['../public'],
  'addons': [
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  features: {
    emotionAlias: false
  },
  typescript: {
    check: false,
    reactDocgen: false
  },
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  viteFinal: (config) => {
    return config
  }
}
export default config


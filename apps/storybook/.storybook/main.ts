import {StorybookViteConfig} from '@storybook/builder-vite'

const config: StorybookViteConfig = {
    'stories': [
        '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
    ],
    'addons': [
        '@storybook/addon-essentials',
        '@storybook/addon-docs'
    ],
    features: {
        emotionAlias: false
    },
    typescript: {
        check: false
    },
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-vite'
    },
    viteFinal: (config) => {
        config.esbuild = {
            ...config.esbuild,
            logOverride: {'this-is-undefined-in-esm': 'silent'}
        }
        return config
    }
}
export default config


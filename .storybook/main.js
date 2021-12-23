module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../stories/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs']
}

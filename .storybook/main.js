module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../stories/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-knobs', '@storybook/builder-webpack5']
}

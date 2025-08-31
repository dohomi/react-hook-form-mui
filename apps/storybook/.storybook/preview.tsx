import {Preview} from '@storybook/react-vite'
import {createTheme, ThemeProvider} from '@mui/material'
import React from 'react';

const theme = createTheme()

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    options: {
      storySort: {
          method: 'alphabetical',
          locales: 'en-US',
      }
    },
  },

  tags: ['autodocs']
}

export default preview;
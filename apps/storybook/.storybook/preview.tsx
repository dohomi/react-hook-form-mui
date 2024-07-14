import {Preview} from '@storybook/react'
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
}

export default preview;
import {Preview} from '@storybook/react'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme()

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

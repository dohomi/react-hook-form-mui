import { createTheme } from '@mui/material/styles'
import red from '@mui/material/colors/red'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9922'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme

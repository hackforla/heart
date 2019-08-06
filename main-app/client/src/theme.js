import { createMuiTheme } from '@material-ui/core/styles'
import './App.css'

const font = "'Work Sans', sans-serif";

function pxToRem(value) {
  return `${value / 16}rem`
}

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#1F2933',
    },
  },
  typography: {
    fontFamily: font,
    fontSize: 16,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: font,
        fontWeight: 'light',
        fontSize: pxToRem(36),
        lineHeight: pxToRem(42),
      },
      h2: {
        fontWeight: 'light',
        fontSize: pxToRem(20),
        lineHeight: pxToRem(24),
      },
      h3: {
        fontWeight: 'medium',
        fontSize: pxToRem(16),
        lineHeight: pxToRem(24),
      },
      label: {
        fontWeight: 'regular',
        fontSize: pxToRem(16),
        lineHeight: pxToRem(42),
      },
    },
    alerts: {
      success: '#339900',
      warning: '#FFCC00',
      error: '#CC3300',
    },
  },
})

export default theme

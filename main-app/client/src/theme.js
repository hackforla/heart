import { createMuiTheme } from '@material-ui/core/styles'

function pxToRem(value) {
  return `${value / 16}rem`
}

const theme = createMuiTheme({
  palette: {
    white: { main: '#FFFFFF' }, //  Button Text, Data Row Background, Top Navigation
    dataRowBackgroundAlt: { main: '#F4F6F8' },
    primaryText: { main: '#1F2933' },
    siteBackground: { main: '#F4F7FB' },
    buttons: { main: '#0275D8' },
    headerRow: { main: 'E4E6E8' },
    userPFP: { main: 'B5B3BE' },
    error: { main: '#CC3300' },
    success: { main: '#339900' },
    warning: { main: '#FFCC00' },
    background: { main: '#F4F7FB' },
    misc: { main: '#007FFF' },
  },
  typography: {
    fontFamily: `'Work Sans', 'sans-serif'`,
    fontSize: 16,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: `'Work Sans'`,
        fontWeight: 'light',
        fontSize: pxToRem(36),
        lineHeight: pxToRem(42),
      },
      h2: {
        fontFamily: `'Work Sans'`,
        fontWeight: 'light',
        fontSize: pxToRem(20),
        lineHeight: pxToRem(24),
      },
      h3: {
        fontFamily: `'Work Sans'`,
        fontWeight: 'medium',
        fontSize: pxToRem(16),
        lineHeight: pxToRem(24),
      },
      body: {
        fontFamily: `'Work Sans'`,
        fontWeight: 'regular',
        fontSize: pxToRem(16),
        lineHeight: pxToRem(42),
      },
      label: {
        fontFamily: `'Work Sans'`,
        fontWeight: 'regular',
        fontSize: pxToRem(16),
        lineHeight: pxToRem(42),
      },
    },
  },
})

export default theme

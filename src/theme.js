import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[800],
      light: '#e57373',
    },
    error: {
      main: red.A700,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;

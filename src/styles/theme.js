import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#111',
    },
    colors: {
      primary: '#111',
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      paper: '#d8e8e8',
    },
    colors: {
      primary: '#d8e8e8',
    },
  },
});

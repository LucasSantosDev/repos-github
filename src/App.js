import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import Routes from './routes';

import store from './store';

// Get theme localStore
const themeLocation = localStorage.getItem('theme');

function App() {
  return (
    <MuiThemeProvider
      theme={themeLocation === 'light' ? lightTheme : darkTheme}
    >
      <Provider store={store}>
        <Routes />
        <ToastContainer autoClose={8000} position="bottom-right" />
        <GlobalStyles />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;

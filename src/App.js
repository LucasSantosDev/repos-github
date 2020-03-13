import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import Routes from './routes';

import store from './store';

// Get theme localStore
const themeLocation = localStorage.getItem('theme');

function App() {
  return (
    <ThemeProvider theme={themeLocation === 'light' ? lightTheme : darkTheme}>
      <Provider store={store}>
        <Routes />
        <ToastContainer autoClose={8000} position="bottom-right" />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

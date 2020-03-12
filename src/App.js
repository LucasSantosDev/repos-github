import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={8000} position="bottom-right" />
      <Routes />
    </Provider>
  );
}

export default App;

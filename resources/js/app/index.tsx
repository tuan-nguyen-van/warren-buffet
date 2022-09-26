import '../bootstrap';

import * as ReactDOM from 'react-dom/client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);

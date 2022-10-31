import '../bootstrap';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('login')!);

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

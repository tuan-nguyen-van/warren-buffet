import './bootstrap';

import * as ReactDOM from 'react-dom/client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Content from './content';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
  <React.Fragment>
    <CssBaseline />
    <Content />
  </React.Fragment>
);

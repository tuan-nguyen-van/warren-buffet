import './bootstrap';
import '../css/app.css'; 

import * as ReactDOM from 'react-dom/client';
import React from 'react';

// ReactDOM.render(<h1>Hello</h1> ,document.getElementById('app'));
const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<h1>Hello World!</h1>);
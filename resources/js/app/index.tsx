import '../bootstrap';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="add-stock" element={<h1>Add Stock</h1>} />
      <Route path="stock-list" element={<h1>Stock List</h1>} />
      <Route path="discount-rate" element={<h1>Discount Rate</h1>} />
      <Route path="stock-tenets" element={<h1>Stock Tenets</h1>} />
      <Route
        path="finnancial-index-types"
        element={<h1>Finnancial Index Types</h1>}
      />
      <Route path="famous-quotes" element={<h1>Famous Quotes</h1>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

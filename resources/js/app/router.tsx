import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import AddStock from '../AddStock';
import React from 'react';
import DiscountRate from '../DiscountRate';
import Tenets from '../Tenets';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="add-stock" element={<AddStock />} />
      <Route path="edit-stock/:editStockId" element={<AddStock />} />
      <Route path="stock-list" element={<h1>Stock List</h1>} />
      <Route path="discount-rate" element={<DiscountRate />} />
      <Route path="stock-tenets" element={<Tenets />} />
      <Route path="financial-metrics" element={<h1>Finnancial Metrics</h1>} />
      <Route path="famous-quotes" element={<h1>Famous Quotes</h1>} />
    </Route>
  )
);

export default router;

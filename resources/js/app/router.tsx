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
import Quotes from '../Quotes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="add-stock" element={<AddStock key="add" />} />
      <Route path="edit-stock/:editStockId" element={<AddStock key="edit" />} />
      <Route path="stock-list" element={<h1>Stock List</h1>} />
      <Route path="discount-rate" element={<DiscountRate />} />
      <Route path="stock-tenets" element={<Tenets />} />
      <Route path="financial-metrics" element={<h1>Finnancial Metrics</h1>} />
      <Route path="famous-quotes" element={<Quotes />} />
    </Route>
  )
);

export default router;

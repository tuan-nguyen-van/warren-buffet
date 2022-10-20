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
import Home from '../Home';
import StockList from '../StockList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="add-stock" element={<AddStock key="add" />} />
      <Route path="edit-stock/:editStockId" element={<AddStock key="edit" />} />
      <Route path="stock-list" element={<StockList />} />
      <Route path="discount-rate" element={<DiscountRate />} />
      <Route path="stock-tenets" element={<Tenets />} />
      <Route path="famous-quotes" element={<Quotes />} />
    </Route>
  )
);

export default router;

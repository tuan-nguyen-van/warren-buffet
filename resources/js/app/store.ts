import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../Content/sideBarSlice';
import discountSlice from '../DiscountRate/discountSlice';
import addStockSlice from '../AddStock/addStockSlice';
import lightModeSlice from './lightModeSlice';
import errorAlertSlice from '../Error/errorAlertSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    discount: discountSlice,
    addStock: addStockSlice,
    lightMode: lightModeSlice,
    errorAlert: errorAlertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

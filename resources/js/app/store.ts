import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../Content/sideBarSlice';
import discountSlice from '../DiscountRate/discountSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    discount: discountSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface DiscountState {
  value: string;
}

const initialState: DiscountState = {
  value: '',
};

export const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    changeDiscountRate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeDiscountRate } = discountSlice.actions;

export const getDiscountRate = (state: RootState) => state.discount.value;

export default discountSlice.reducer;

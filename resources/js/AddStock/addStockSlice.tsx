import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface AddStockState {
  stockId?: number;
}

const initialState: AddStockState = {
  stockId: undefined,
};

export const addStockSlice = createSlice({
  name: 'addStock',
  initialState,
  reducers: {
    changeStockId: (state, action: PayloadAction<number | undefined>) => {
      state.stockId = action.payload;
    },
  },
});

export const { changeStockId } = addStockSlice.actions;

export const getAddStockState = (state: RootState) => state.addStock;

export default addStockSlice.reducer;

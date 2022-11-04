import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

const initialState = {
  open: false,
  text: '',
};

export const addStockSlice = createSlice({
  name: 'errorAlert',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open;
    },
    changeAlertText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { toggleOpen, changeAlertText } = addStockSlice.actions;

export const getErrorAlertState = (state: RootState) => state.errorAlert;

export default addStockSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface AddStockState {
  stockId?: number;
  disableStep: DisableStep;
}

interface DisableStep {
  CompanyInfo: boolean;
  CheckTenets: boolean;
  GrowthRate: boolean;
  Assumption: boolean;
  Calculation: boolean;
}

const initialState: AddStockState = {
  stockId: undefined,
  disableStep: {
    CompanyInfo: false,
    CheckTenets: true,
    GrowthRate: true,
    Assumption: true,
    Calculation: true,
  },
};

export const addStockSlice = createSlice({
  name: 'addStock',
  initialState,
  reducers: {
    changeStockId: (state, action: PayloadAction<number | undefined>) => {
      state.stockId = action.payload;
    },
    changeDisableStep: (
      state,
      action: PayloadAction<[keyof DisableStep, boolean]>
    ) => {
      state.disableStep[action.payload[0] as keyof DisableStep] =
        action.payload[1];
    },
  },
});

export const { changeStockId, changeDisableStep } = addStockSlice.actions;

export const getAddStockState = (state: RootState) => state.addStock;

export default addStockSlice.reducer;

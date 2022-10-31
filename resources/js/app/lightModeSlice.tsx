import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

type State = {
  mode: 'dark' | 'light';
};

const initialState: State = {
  mode: 'dark',
};

export const lightModeSlice = createSlice({
  name: 'lightMode',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = lightModeSlice.actions;

export const getMode = (state: RootState) => state.lightMode;

export default lightModeSlice.reducer;

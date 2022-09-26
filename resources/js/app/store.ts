import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../Content/sideBarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
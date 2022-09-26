import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface SideBarState {
  open: boolean
}

const initialState: SideBarState = {
  open: true
}

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: state => {
      state.open = !state.open;
    }
  }
})

export const { toggle } = sideBarSlice.actions

export const selectOpen = (state: RootState) => state.sidebar.open

export default sideBarSlice.reducer
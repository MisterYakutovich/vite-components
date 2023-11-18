import { createSlice } from '@reduxjs/toolkit';
import { BeersArray } from '../../types/types';

export interface CounterState {
  search: string;
  beer: BeersArray[];
}

const initialState: CounterState = {
  search: '',
  beer: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setBeer(state, action) {
      state.beer = action.payload;
    },
  },
});

export const { setSearch, setBeer } = searchSlice.actions;
//export const {setBeer} = searchSlice.actions;
//export const selectInputValue = (state: { input: string }) => state.input;

export default searchSlice.reducer;

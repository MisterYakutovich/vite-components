import { createSlice } from '@reduxjs/toolkit';
import { BeersArray } from '../../types/types';

export interface CounterState {
  search: string;
  beer: BeersArray[];
  currentBeers: BeersArray[];
}

const initialState: CounterState = {
  search: '',
  beer: [],
  currentBeers: [],
};

export const combainSlice = createSlice({
  name: 'stateSeach',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setBeer(state, action) {
      state.beer = action.payload;
    },
    setCurrentBeers: (state, action) => {
      state.currentBeers = action.payload;
    },
  },
});

export const { setSearch, setBeer, setCurrentBeers } = combainSlice.actions;

export default combainSlice.reducer;

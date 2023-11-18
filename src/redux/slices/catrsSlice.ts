/*import {  createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  loading: boolean;
  data: any;
  error: string | null;
}

export const fetchData = createAsyncThunk('data/fetchData', async (): Promise<any> => {
    const response = await fetch('your_api_endpoint');
    const data = await response.json();
    return data;
  });

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null,
  } as DataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { fetchData } = dataSlice.actions;*/

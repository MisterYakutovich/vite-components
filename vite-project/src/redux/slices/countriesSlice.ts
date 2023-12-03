import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountriesState {
  countries: string[];
}

const initialState: CountriesState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    },
  },
});
export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
/*import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, CountryState } from "../../types/types";

export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
  // Здесь вы можете загрузить список стран с сервера или из статического файла
  const response = await fetch('https://moyaposylka.ru/api/v1/countries');
  const data = await response.json();
  console.log(data)
  return data;
});

const initialState: CountryState = {
  selectedCountry: null,
  countries: [],
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    selectCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { selectCountry } = countrySlice.actions;
export default countrySlice.reducer;*/
/*interface Country {
  name: string;
  population: number;
  capital: string;
}

interface CountriesState {
  list: Country[];
  loading: boolean;
}

const initialState: CountriesState = {
  list: [],
  loading: false
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
   
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.list = action.payload;
      state.loading = false;
   },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setCountries, setLoading } = countriesSlice.actions;

export const fetchCountries = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://moyaposylka.ru/api/v1/countries');
    const data: Country[] = await response.json();
    dispatch(setCountries(data));
  } catch (error) {
    console.error('Failed to fetch countries', error);
    dispatch(setLoading(false));
  }
};

export const selectCountries = (state: { countries: CountriesState }) =>
  state.countries.list;

export default countriesSlice.reducer;*/

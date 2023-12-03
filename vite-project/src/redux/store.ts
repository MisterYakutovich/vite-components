import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countriesSlice';
import formReducer from './slices/formslice';
const store = configureStore({
  reducer: {
    countries: countryReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // определите тип корневого состояния
export type AppDispatch = typeof store.dispatch; // определите тип диспетчера приложения

export default store;

/*import {
   
    PreloadedState,
    combineReducers, configureStore,
  } from '@reduxjs/toolkit';
  import countries from './slices/countriesSlice';
import { countryApi } from './services/apicountries';

 
  
  const rootReducer = combineReducers({
    [countryApi.reducerPath]: countryApi.reducer,
    countries: countries,
  });
  export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
  
      preloadedState,
    });
  };
  
  export type RootState = ReturnType<typeof rootReducer>;
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore['dispatch'];*/

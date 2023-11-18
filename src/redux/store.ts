import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import filterSearch from './slices/searchSlice';
import { beersApi} from './services/apiBeers';

const rootReducer = combineReducers({
  [beersApi.reducerPath]: beersApi.reducer,
 // [beersApiName.reducerPath]: beersApiName.reducer,
  input: filterSearch,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(beersApi.middleware),
      
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
/*export const store = configureStore({  //хранилище
  reducer: {
    input:filterSearch
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch*/

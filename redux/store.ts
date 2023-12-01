import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import stateSearch from './slices/stateSearchSlice';
import { beersApi } from './services/apiBeers';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  [beersApi.reducerPath]: beersApi.reducer,
  input: stateSearch,
  beer: stateSearch,
  currentBeers: stateSearch,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(beersApi.middleware),

    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });

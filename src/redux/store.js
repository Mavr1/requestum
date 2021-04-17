import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersSlice } from './users/usersSlice';
import { reposSlice } from './repos/reposSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { searchSlice } from './search/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['search'],
};

const reducer = combineReducers({
  repos: reposSlice.reducer,
  users: usersSlice.reducer,
  search: searchSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

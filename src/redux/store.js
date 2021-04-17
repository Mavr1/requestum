import { configureStore } from '@reduxjs/toolkit';
import { orgsSlice } from './orgs/orgsSlice';
import { reposSlice } from './repos/reposSlice';

export const store = configureStore({
  reducer: {
    repos: reposSlice.reducer,
    orgs: orgsSlice.reducer,
  },
});

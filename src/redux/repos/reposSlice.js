import { createSlice } from '@reduxjs/toolkit';

export const reposSlice = createSlice({
  name: 'repos',
  initialState: null,
  reducers: {
    setRepos: (state, { payload }) => payload,

    clearRepos: () => [],
  },
});

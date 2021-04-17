import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: null,
  reducers: {
    setSearch: (state, { payload }) => payload,
  },
});

import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    addSearchQuery: (state, { payload }) => {
      state.unshift({ id: Date.now().toString(), value: payload });
      state.length = state.length > 5 ? 5 : state.length;
    },
  },
});

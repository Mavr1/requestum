import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    isLoading: false,
    error: null,
  },

  reducers: {
    setLoading: (state, { payload }) => (state.isLoading = payload),
    setError: (state, { payload }) => (state.error = payload),
    clearError: (state, { payload }) => (state.error = null),
  },
});

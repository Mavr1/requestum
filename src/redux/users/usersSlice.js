import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    setUsers: (state, { payload }) => payload,

    clearUsers: () => [],
  },
});

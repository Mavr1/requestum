import { createSlice } from '@reduxjs/toolkit';

export const orgsSlice = createSlice({
  name: 'orgs',
  initialState: null,
  reducers: {
    setOrgs: (state, { payload }) => payload,
  },
});

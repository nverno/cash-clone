import { createSlice } from '@reduxjs/toolkit';
import { authApi, usersApi } from '../services';
import { User } from '../types';

const initialState: User = {
  name: null,
  cashTag: null,
  balance: null,
  email: null,
  id: null,
  card: null,
  settings: null,
  accounts: null,
  phoneNumber: null,
  pinNumber: null,
  roles: null,
  username: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,

  /* eslint-disable @typescript-eslint/no-unused-vars */
  reducers: {
    unsetUser: (state, _action) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        Object.assign(state, payload.user);
      },
    );

    builder.addMatcher(
      usersApi.endpoints.getUserById.matchFulfilled,
      (state, { payload }) => {
        Object.assign(state, payload);
      },
    );
  },
  /* eslint-enable @typescript-eslint/no-unused-vars */
});

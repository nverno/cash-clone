import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services';
import { User } from '../types';

const initialState: User = {
  firstName: null,
  lastName: null,
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

export const userSlice = createSlice({
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
      authApi.endpoints.loginPhoneOrEmail.matchFulfilled,
      (state, { payload }) => {
        Object.assign(state, payload.user);
      },
    );
  },
  /* eslint-enable @typescript-eslint/no-unused-vars */
});

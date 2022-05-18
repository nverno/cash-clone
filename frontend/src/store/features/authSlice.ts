import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../services';
import type { LoginResponse, User } from '../types';

interface AuthState {
  token?: LoginResponse['token'];
  userId?: User['id'];
}

const initialState: AuthState = {};

const setAuth = (state: AuthState, action: PayloadAction<LoginResponse>) => {
  const { token, user } = action.payload;
  state.token = token;
  state.userId = user.id;

  localStorage.setItem(
    'auth',
    JSON.stringify({
      token,
      user: { id: user.id },
    }),
  );
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth,
    unsetAuth: () => {
      localStorage.removeItem('auth');
      return initialState;
    },
  },

  extraReducers: (builder) => {
    // eslint-disable-next-line
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, setAuth);

    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, () => {
      localStorage.removeItem('auth');
      return initialState;
    });

    builder.addMatcher(authApi.endpoints.logout.matchRejected, () => {
      localStorage.removeItem('auth');
      return initialState;
    });
  },
});

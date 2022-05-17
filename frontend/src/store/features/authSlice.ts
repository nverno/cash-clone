import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';

interface AuthState {
  token?: string;
  user?: User;
  isAdmin?: boolean;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<Pick<AuthState, 'token' | 'user'>>,
    ) => {
      const { token, user } = action.payload;

      // TODO: Consider remove this. RTK query read token from redux.
      if (token) {
        localStorage.setItem('authtoken', token);
      }

      state.token = token;
      state.user = user;
      state.isAdmin = user?.roles?.includes('admin');
    },
  },
});

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../services';
import type { User } from '../types';

interface AuthState {
  token?: string;
  userId?: User['id'];
  isAdmin?: boolean;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<Pick<AuthState, 'token'> & { user: User }>,
    ) => {
      const { token, user } = action.payload;

      if (token) {
        localStorage.setItem('authtoken', token);
      }

      state.token = token;
      state.userId = user.id;
      state.isAdmin = user?.roles?.includes('admin');
    },
  },

  extraReducers: (builder) => {
    // eslint-disable-next-line
    builder.addMatcher(
      authApi.endpoints.loginPhoneOrEmail.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        console.debug('DEBUG: payload:', payload);
        if (token) {
          localStorage.setItem('authtoken', token);
        }
        state.token = token;
        state.userId = user.id;
        state.isAdmin = user?.roles?.includes('admin');
      },
    );
  },
});

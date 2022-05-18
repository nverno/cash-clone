import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const tagTypes = ['User', 'Transaction', 'Settings', 'Search'];

/** Initialize an empty api service that we'll inject endpoints into later as needed */
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5005'
        : 'https://caashapp-backend.herokuapp.com',

    credentials: 'include',

    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootState;
      const token = state.auth.token?.token || localStorage.getItem('authToken');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),

  tagTypes,
});

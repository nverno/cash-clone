import { LoginResponse, LoginUserForm } from '../types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // send login code to user's email
    requestLoginCode: builder.mutation<void, LoginUserForm>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    // login with phone/email + login code or phone/email + password
    login: builder.mutation<LoginResponse, LoginUserForm>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    logout: builder.mutation<Pick<LoginResponse, 'user'>, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRequestLoginCodeMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;

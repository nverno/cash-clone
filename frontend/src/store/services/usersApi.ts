import { User } from '../types';
import { api } from './api';

export const usersApi = api.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
      providesTags: (result = {} as User) => {
        if (result.cashTag)
          return [{ type: 'User' as const, id: String(result.cashTag) }];
      },
    }),

    getUserByCashTag: builder.query<User, string>({
      query: (cashTag) => ({
        url: `/users/by-cashtag/${cashTag}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) => [
        { type: 'User' as const, id: String(arg) },
      ],
    }),

    setName: builder.mutation<User, { id: string; name: string }>({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error) => {
        if (error) return [];
        return [{ type: 'User', id: result.cashTag }];
      },
    }),
  }),
});

export const {
  useGetUserByCashTagQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useSetNameMutation,
} = usersApi;

import { SearchParams, User } from '../types';
import { api } from './api';

export const searchApi = api.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    searchUsers: builder.query<User[], SearchParams>({
      query: (params) => ({
        url: '/search/users',
        method: 'GET',
        params,
      }),
      providesTags: (_result, error, arg) => {
        if (error) return [];
        return [{ type: 'Search', id: JSON.stringify(arg) }];
      },
    }),

    // searchTransactions: builder.query<Transaction[], SearchParams>({
    //   query: (params) => ({
    //     url: '/search/transactions',
    //     method: 'GET',
    //     params,
    //   }),
    //   providesTags: (_result, error, arg) => {
    //     if (error) return [];
    //     return [{ type: 'Search', id: JSON.stringify(arg) }];
    //   },
    // }),
  }),
});

export const { useLazySearchUsersQuery } = searchApi;

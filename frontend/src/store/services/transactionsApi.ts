import { SearchParams, Transaction } from '../types';
import { api } from './api';

export const transactionsApi = api.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // FIXME: use session user, remove userId param
    getTransactions: builder.query<
      Transaction[],
      Partial<SearchParams> & { userId: string }
    >({
      query: ({ userId, ...params }) => ({
        url: `/transactions/${userId}`,
        method: 'GET',
        params,
      }),
      providesTags: ['Transaction'],
    }),

    createTransaction: builder.mutation<Transaction, Partial<Transaction>>({
      query: (body) => ({
        url: '/transactions',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, arg) => {
        if (error) return [];
        return [
          'Transaction',
          { type: 'User', id: arg.receiverId },
          { type: 'User', id: arg.senderId },
        ];
      },
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useLazyGetTransactionsQuery,
  useCreateTransactionMutation,
} = transactionsApi;

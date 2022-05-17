import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { useAppSelector } from '.';
import { authSlice } from './features';
import { api } from './services';

export { skipToken } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectUuid = () => useAppSelector((state) => state.auth.user.id);

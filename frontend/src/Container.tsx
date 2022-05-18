import React, { FC } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import {
  ActivityPage,
  Dashboard,
  LandingPage,
  MyCashPage,
  SettingsPage,
  LoginPage,
  PaymentPage,
} from './components';
import {
  authSlice,
  useAppDispatch,
  useAppSelector,
  useLazyGetUserByIdQuery,
} from './store';

export interface ContainerProps {}

/* const routes = (loggedIn) => [{
 *   path: '/',
 *   element: loggedIn ? <Navigate replace to='/account/activity' /> : <LandingPage />,
 * }, {
 *   path: '/login',
 *   element: loggedIn ? <Navigate replace to='/account/activity' /> : <LoginPage />,
 * }, {
 *   path: '/account',
 *   element: loggedIn ? <Dashboard /> : <Navigate to='/login' replace state={{ from: location }}>
 * }
 * ];
 *  */
/*
 * const RequireAuth = () => {
 *   const location = useLocation();
 *   const loggedIn = useAppSelector((state) => state.auth?.token); // ?? localStorage.getItem('authtoken');
 *   const dispatch = useAppDispatch();
 *
 * }
 *  */
const Container: FC<ContainerProps> = () => {
  const loggedIn = useAppSelector((state) => state.auth?.token); // ?? localStorage.getItem('authtoken');
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [getUser, { data: _, isLoading }] = useLazyGetUserByIdQuery();

  React.useEffect(() => {
    const handleGetUser = async (id: string) => {
      try {
        await getUser(id).unwrap();
      } catch (err) {
        console.error(
          'Error fetching user from localStorage id:',
          JSON.stringify(err, null, 2),
        );
        dispatch(authSlice.actions.unsetAuth());
      }
    };

    if (!loggedIn) {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const parsed = JSON.parse(auth);
        console.debug(
          'DEBUG reading auth from storage: parsed:',
          JSON.stringify(parsed, null, 2),
        );
        dispatch(authSlice.actions.setAuth(parsed));
        handleGetUser(parsed.user.id);
      }
    }
  }, []);

  const displayLoggedOut = () => (
    <>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='$:cashTag' element={<PaymentPage />} />
      <Route
        path='*'
        element={<Navigate to='/login' replace state={{ from: location }} />}
      />
    </>
  );

  const displayLoggedIn = () => (
    <>
      <Route path='/' element={<Navigate replace to='/account/activity' />} />
      <Route path='account' element={<Dashboard user={user} />}>
        <Route path='activity' element={<ActivityPage user={user} />} />
        <Route path='mycash' element={<MyCashPage user={user} />} />
        <Route path='settings' element={<SettingsPage user={user} />} />
        <Route path='*' element={<Navigate replace to='/account/activity' />} />
      </Route>
      <Route path='$:cashTag' element={<PaymentPage />} />
      <Route path='*' element={<Navigate replace to='/account/activity' />} />
    </>
  );

  if (isLoading) return null;
  return <Routes>{loggedIn ? displayLoggedIn() : displayLoggedOut()}</Routes>;
};

export default Container;

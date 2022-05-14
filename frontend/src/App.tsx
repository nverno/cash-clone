// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'; // eslint-disable-line
import '../styles/globals.css';
import {
  Activity,
  Dashboard,
  LandingPage,
  MyCash,
  Settings,
} from './components';
import { User } from './store';
import LoginPage from './components/Login/LoginPage';

export interface AppProps {}

const container = document.getElementById('root');
const root = createRoot(container);

const fakeUser: User = {
  firstName: 'Fake',
  lastName: 'User',
  username: 'Fake User',
  cashTag: '$FakeUser',
  phoneNumber: ['1234567890'],
  email: ['fake.user@gggmail.com'],
  balance: 0,
  card: {
    cardNumber: '0000000000000000',
    cardActivated: false,
  },
  accounts: [
    {
      name: 'Bank of America',
      accountNumber: '12345678',
      routingNumber: '123456789',
    },
  ],
  settings: {
    allowPay: true,
    privacy: 'all',
  },
};

export interface DefaultProps {
  user: User;
}

const App: FC<AppProps> = () => {
  const loggedIn = false;

  const displayLoggedOut = () => (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route
        path='*'
        element={
          <Navigate
            replace
            to={`/login?redirect-to=${window.location.pathname}`}
          />
        }
      />
    </Routes>
  );

  const displayLoggedIn = () => (
    <Routes>
      <Route path='/account' element={<Dashboard user={fakeUser} />}>
        <Route path='activity' element={<Activity user={fakeUser} />} />
        <Route path='mycash' element={<MyCash user={fakeUser} />} />
        <Route path='settings' element={<Settings user={fakeUser} />} />
      </Route>

      <Route path='*' element={<Navigate replace to='/account/activity' />} />
    </Routes>
  );

  return (
    <BrowserRouter basename={'/'}>
      {/* {displayLoggedIn()} */}
      {loggedIn ? displayLoggedIn() : displayLoggedOut()}
      {/* <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/account' element={<Dashboard user={fakeUser} />}>
          <Route
          path='activity'
          element={<Activity user={fakeUser} />}
          />
          <Route path='mycash' element={<MyCash user={fakeUser} />} />
          <Route
          path='settings'
          element={<Settings user={fakeUser} />}
          />
          </Route>

          <Route path='/login' element={<LoginPage />} />
          </Routes> */}
    </BrowserRouter>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  // set theme
  document.body.className = 'theme-bg theme-green';
});

root.render(<App />);

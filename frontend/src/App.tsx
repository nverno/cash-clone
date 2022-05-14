// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // eslint-disable-line
import '../styles/globals.css';
import { Activity, Dashboard, MyCash, Settings } from './components';
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
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path='/' element={<Dashboard user={fakeUser} />}>
          <Route
            path='account/activity'
            element={<Activity user={fakeUser} />}
          />
          <Route path='account/mycash' element={<MyCash user={fakeUser} />} />
          <Route
            path='account/settings'
            element={<Settings user={fakeUser} />}
          />
        </Route>

        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  // set theme
  document.body.className = 'theme-bg theme-green';
});

root.render(<App />);

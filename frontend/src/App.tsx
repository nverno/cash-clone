// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // eslint-disable-line
import '../styles/globals.css';
import { store, User } from './store';
import Container from './Container';

export interface AppProps {}

const container = document.getElementById('root');
const root = createRoot(container);

export interface DefaultProps {
  user: User;
}

const App: FC<AppProps> = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Provider store={store}>
        <Container />
      </Provider>
    </BrowserRouter>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  // set theme
  document.body.className = 'theme-bg theme-green';
});

root.render(<App />);

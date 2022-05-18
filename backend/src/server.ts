import App from '@/app';
import {
  AuthRoute,
  IndexRoute,
  UsersRoute,
  TransactionsRoute,
  SearchRoute,
} from '@routes';
import { validateEnv } from '@utils';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new TransactionsRoute(),
  new SearchRoute(),
]);

app.listen();

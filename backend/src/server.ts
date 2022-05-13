import App from '@/app';
import { AuthRoute, IndexRoute, UsersRoute } from '@routes';
import { validateEnv } from '@utils';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// eslint-disable-next-line
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';
import { Routes } from '@interfaces';
import { errorMiddleware } from '@middlewares';
import { logger, stream } from '@utils';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    // logging
    this.app.use(morgan(LOG_FORMAT, { stream }));
    this.app.use(
      cors({
        origin: true, // ORIGIN
        credentials: CREDENTIALS,
      }),
    );
    // protect against HTTP parameter pollution attacks
    this.app.use(hpp());
    // set security HTTP headers
    this.app.use(helmet());
    // use gzip compression
    this.app.use(compression());
    // parse json request body
    this.app.use(express.json());
    // parse url encoded request body
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    // dont send 304 response if data hasn't changed
    this.app.disable('etag');
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        openapi: '3.0.3',
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Cashapp Service docs',
        },
      },
      apis: [
        'swagger.yaml',
        'src/prisma/*.yaml',
        'src/interfaces/swagger/*.yaml',
        'src/routes/*route.ts',
        'src/dtos/*dto.ts',
        'src/interfaces/*interface.ts',
      ],
    };

    const specs = swaggerJSDoc(options);
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(specs, {
        swaggerOptions: {
          docExpansion: 'none',
          deepLinking: true,
        },
      }),
    );
  }

  private initializeErrorHandling() {
    // report HTTP exceptions
    this.app.use(errorMiddleware);
  }
}

export default App;

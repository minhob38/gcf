import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middlewares/error-middleware';

const app: express.Application = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;

import '../../config';

import express from 'express';
import 'express-async-errors';

import helmet from 'helmet';
import logger from 'morgan';
import BullBoard from 'bull-board';

import routes from './routes';
import Queue from '../lib/Queue';

class App {
  readonly server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();

    this.server.use('/v1', routes);
  }

  middlewares() {
    BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
    this.server.use('/admin/queues', BullBoard.UI);

    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(logger('combined'));
  }
}

export default new App().server;

import 'dotenv/config';

import Queue from './app/lib/Queue';

console.log(
  `🤘 Queue process started in '${process.env.NODE_ENV}' environment!`,
);

Queue.process();

import Queue, { Job } from 'bull';
import redisConfig from '../../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add<T>(name: string, data: T): Promise<Job> {
    const queue = this.queues.find(item => item.name === name);

    if (!queue) {
      throw new Error(
        'Não foi possivel processar a operação para uma fila não registrada',
      );
    }

    return queue.bull.add(data, queue.options);
  },
  process(): void {
    this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job: Job, err: Error) => {
        console.log(`Job failed in [${queue.name}] with data: `, job.data);
        console.log(err);
      });
    });
  },
};

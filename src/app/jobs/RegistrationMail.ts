import { Job } from 'bull';
import Mail from '../lib/Mail';
import User from '../models/User';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 2000,
    priority: 3,
  },
  async handle(job: Job<User>): Promise<void> {
    const { data } = job;

    await Mail.sendMail({
      from: 'DIO <bootcamp-node@dio-example.com.br>',
      to: `${data.name} <${data.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${data.name}, bem-vindo ao exemplo de background jobs.`,
    });
  },
};

import { Request, Response } from 'express';
import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';
import User from '../models/User';

class UsersController {
  async store(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const user: User = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    await Queue.add<User>('RegistrationMail', user);

    return res.json(user);
  }
}

export default UsersController;

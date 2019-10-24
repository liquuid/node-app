import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'User teste',
    email: 'email@email.com',
    password_hash: 'aaaaaaaaa',
  });
  return res.json(user);
});

export default routes;

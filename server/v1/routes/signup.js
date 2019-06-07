import { Router } from 'express';
import RegisterUser from '../controllers/signup';

const routes = Router();

routes.post('/api/v1/auth/signup', RegisterUser.create);
// routes.post('/api/v1/auth/signin', RegisterUser.create);

export default routes;

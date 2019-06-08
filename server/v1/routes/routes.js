import { Router } from 'express';
import RegisterUser from '../controllers/signup';
import AdvertHandler from '../controllers/ads';

const routes = Router();

routes.post('/api/v1/auth/signup/', RegisterUser.create);
// routes.post('/api/v1/auth/signin', RegisterUser.create);
routes.post('/api/v1/car/', AdvertHandler.create);
routes.get('/api/v1/cars/', AdvertHandler.getAll);

export default routes;

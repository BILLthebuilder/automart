import { Router } from 'express';
import user from '../controllers/userController';
import ads from '../controllers/adsController';
// import OrderHandler from '../controllers/order';

const routes = Router();

routes.post('/api/v1/auth/signup/', user.signup);
routes.post('/api/v1/auth/signin', user.login);
routes.post('/api/v1/car/', ads.create);
// routes.get('/api/v1/cars/', AdvertHandler.getAll);
// routes.post('/api/v1/order/', OrderHandler.create);
// routes.get('/api/v1/car/:id', AdvertHandler.viewSpecific);
// routes.delete('/api/v1/car/:id', AdvertHandler.deleteSpecific);

export default routes;

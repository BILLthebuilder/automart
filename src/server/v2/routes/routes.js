import { Router } from 'express';
import user from '../controllers/userController';
import ads from '../controllers/adsController';
import orders from '../controllers/orderController';

const routes = Router();

routes.post('/api/v1/auth/signup/', user.signup);
routes.post('/api/v1/auth/signin', user.login);
routes.post('/api/v1/car/', ads.create);
routes.post('/api/v1/order/', orders.create);
// routes.get('/api/v1/cars/', AdvertHandler.getAll);
// routes.get('/api/v1/car/:id', AdvertHandler.viewSpecific);
// routes.delete('/api/v1/car/:id', AdvertHandler.deleteSpecific);

export default routes;

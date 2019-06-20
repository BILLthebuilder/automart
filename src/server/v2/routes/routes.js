import { Router } from 'express';
import user from '../controllers/userController';
import ads from '../controllers/adsController';
import orders from '../controllers/orderController';

const routes = Router();

routes.post('/api/v2/auth/signup/', user.signup);
routes.post('/api/v2/auth/signin', user.login);
routes.post('/api/v2/car/', ads.create);
routes.post('/api/v2/order/', orders.create);
routes.get('/api/v2/cars/:id', ads.viewSpecific);
routes.get('/api/v2/cars/', ads.viewAll);
routes.delete('/api/v1/car/:id', ads.deleteSpecific);

export default routes;

import { Router } from 'express';
import user from '../controllers/userController';
import ads from '../controllers/adsController';
import orders from '../controllers/orderController';

const routes = Router();
// Auth routes
routes.post('/api/v2/auth/signup/', user.signup);
routes.post('/api/v2/auth/signin', user.login);

// Car advert routes
routes.post('/api/v2/car/', ads.create);
routes.get('/api/v2/cars/:id', ads.viewSpecific);
routes.get('/api/v2/status/cars', ads.viewUnsold);
routes.get('/api/v2/cars', ads.viewAll);
routes.delete('/api/v2/car/:id', ads.deleteSpecific);
routes.get('/api/v2/range/cars', ads.viewUnsoldPriceRange);

// Purchase order routes
routes.post('/api/v2/order/', orders.create);
export default routes;

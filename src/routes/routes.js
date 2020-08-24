const routes = require('express').Router();
const user = require('../controllers/userController');
const ads = require('../controllers/adsController');
const orders = require('../controllers/orderController');
const flags = require('../controllers/flagController');
const Auth = require('../middlewares/auth');

const tokenVerify = Auth.verifyToken;
// Auth routes
routes.post('/api/v2/auth/signup/', user.signup);
routes.post('/api/v2/auth/signin', user.login);

// Car advert routes
routes.post('/api/v2/car/', tokenVerify, ads.create);
routes.get('/api/v2/cars/:id', tokenVerify, ads.viewSpecific);
routes.get('/api/v2/status/cars', tokenVerify, ads.viewUnsold);
routes.get('/api/v2/status/used', tokenVerify, ads.viewUnsoldUsed);
routes.get('/api/v2/cars', tokenVerify, ads.viewAll);
routes.delete('/api/v2/car/:id', tokenVerify, ads.deleteSpecific);
routes.get('/api/v2/range/cars', tokenVerify, ads.viewUnsoldPriceRange);
routes.patch('/api/v2/car/:id/status', tokenVerify, ads.markSold);
routes.patch('/api/v2/car/:id/price', tokenVerify, ads.updatePrice);

// Flagging posted ads routes
routes.post('/api/v2/flag', tokenVerify, flags.create);

// Purchase order routes
routes.post('/api/v2/order/', tokenVerify, orders.create);
routes.patch('/api/v2/order/:id/price', tokenVerify, orders.updatePrice);

module.exports = routes;

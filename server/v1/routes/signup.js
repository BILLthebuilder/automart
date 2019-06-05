import express from 'express';
import signup from '../controllers/signup';

const signupRoute = express();
signupRoute.use(express.json());
signupRoute.use(express.urlencoded({ extended: false }));

signupRoute.post('api/v1/auth/signup', signup());

export default signupRoute;

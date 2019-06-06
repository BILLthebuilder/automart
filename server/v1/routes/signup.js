import express from 'express';
import signup from '../controllers/signup';

const signupRoute = express.Router();
signupRoute.use(express.json());
signupRoute.use(express.urlencoded({ extended: false }));

signupRoute.post('/api/v1/auth/signup', signup.newUser);

export default signupRoute;

// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;

// var _express = _interopRequireDefault(require("express"));

// var _signup = _interopRequireDefault(require("../controllers/signup"));

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var signupRoute = _express.default.Router();

// signupRoute.use(_express.default.json());
// signupRoute.use(_express.default.urlencoded({
//   extended: false
// }));
// signupRoute.post('/api/v1/auth/signup', _signup.default.newUser);
// var _default = signupRoute;
// exports.default = _default;

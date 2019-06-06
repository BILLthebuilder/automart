import express from 'express';

import signupRoute from './server/v1/routes/signup';

const app = express();
app.use(signupRoute);

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default signupRoute;

// 'use strict';

// Object.defineProperty(exports, '__esModule', {
//     value: true
// });
// exports.default = void 0;

// var _express = _interopRequireDefault(require('express'));

// var _signup = _interopRequireDefault(require('./server/v1/routes/signup'));

// function _interopRequireDefault(obj) {
//     return obj && obj.__esModule ? obj : { default: obj };
// }

// var app = (0, _express.default)();
// app.use(_signup.default);
// var port = process.env.PORT || 3000; // eslint-disable-next-line no-console

// app.listen(port, function() {
//     return console.log('Server running on port '.concat(port, '...'));
// });
// var _default = _signup.default;
// exports.default = _default;

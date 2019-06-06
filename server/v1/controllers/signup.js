/* eslint-disable class-methods-use-this */

import Joi from '@hapi/joi';

import users from '../models/user';

class Signup {
    newUser(req, res) {
        const schema = Joi.object({
            id: Joi.number(),
            email: Joi.string()
                .email({ minDomainSegments: 2 })
                .required(),
            first_name: Joi.string()
                .alphanum()
                .min(3)
                .max(50)
                .required(),
            last_name: Joi.string()
                .alphanum()
                .min(3)
                .max(50)
                .required(),
            password: Joi.string()
                .regex(/^[a-zA-Z0-9]{3,30}$/)
                .required(),
            address: Joi.string()
                .alphanum()
                .min(3)
                .max(50)
                .required(),
            isAdmin: Joi.boolean().required()
        });
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json({
                status: 400,
                error: result.error.details[0].message
            });
        }

        const user = {
            id: users.length + 1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            isAdmin: req.body.isAdmin
        };
        users.push(user);
        return res.status(201).json({
            status: 201,
            Data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                address: user.address,
                isAdmin: user.isAdmin
            }
        });
    }
}
const register = new Signup();

export default register;

// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;

// var _joi = _interopRequireDefault(require("@hapi/joi"));

// var _user = _interopRequireDefault(require("../models/user"));

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// var Signup =
// /*#__PURE__*/
// function () {
//   function Signup() {
//     _classCallCheck(this, Signup);
//   }

//   _createClass(Signup, [{
//     key: "newUser",
//     value: function newUser(req, res) {
//       var schema = _joi.default.object({
//         id: _joi.default.number(),
//         email: _joi.default.string().email({
//           minDomainSegments: 2
//         }).required(),
//         first_name: _joi.default.string().alphanum().min(3).max(50).required(),
//         last_name: _joi.default.string().alphanum().min(3).max(50).required(),
//         password: _joi.default.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
//         address: _joi.default.string().alphanum().min(3).max(50).required(),
//         isAdmin: _joi.default.boolean().required()
//       });

//       var result = _joi.default.validate(req.body, schema);

//       if (result.error) {
//         return res.status(400).json({
//           status: 400,
//           error: result.error.details[0].message
//         });
//       }

//       var user = {
//         id: _user.default.length + 1,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         password: req.body.password,
//         address: req.body.address,
//         isAdmin: req.body.isAdmin
//       };

//       _user.default.push(user);

//       return res.status(201).json({
//         status: 201,
//         Data: {
//           id: user.id,
//           first_name: user.first_name,
//           last_name: user.last_name,
//           email: user.email,
//           password: user.password,
//           address: user.address,
//           isAdmin: user.isAdmin
//         }
//       });
//     }
//   }]);

//   return Signup;
// }();

// var register = new Signup();
// var _default = register;
// exports.default = _default;

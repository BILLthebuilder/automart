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

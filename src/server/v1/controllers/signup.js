/* eslint-disable class-methods-use-this */
import Joi from '@hapi/joi';
import User from '../models/user';
import { userSchema } from '../helpers/validations';

const RegisterUser = {
    create(req, res) {
        const result = Joi.validate(req.body, userSchema);

        if (result.error) {
            return res.status(400).json({
                status: 400,
                error: result.error.details[0].message
            });
        }

        const user = User.create(req.body);
        return res.status(201).json({
            status: 201,
            Data: user
        });
    }
};

export default RegisterUser;

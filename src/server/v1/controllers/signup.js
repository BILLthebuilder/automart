/* eslint-disable class-methods-use-this */
// import Joi from '@hapi/joi';
import User from '../models/user';

const RegisterUser = {
    create(req, res) {
        const user = User.create(req.body);
        return res.status(201).json({
            status: 201,
            Data: user
        });
    }
};

export default RegisterUser;

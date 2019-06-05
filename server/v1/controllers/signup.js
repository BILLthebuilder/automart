import Joi from '@hapi/joi';

import User from '../models/user';

const schema = Joi.object({
    id: Joi.number().required(),
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

const signup = (req, res) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send({
            status: 400,
            error: result.error.details[0].message
        });
    } else {
        res.status(201).send({
            status: 201,
            data: User.create(req.body, req.body, req.body, req.body, req.body, req.body)
        });
    }
};

export default signup;

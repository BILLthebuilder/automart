import Joi from '@hapi/joi';

export const userSchema = Joi.object({
    id: Joi.number(),
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
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

export const adSchema = Joi.object({
    id: Joi.number(),
    owner: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    createdOn: Joi.string()
        .alphanum()
        .min(3)
        .max(200),
    manufacturer: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    model: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    price: Joi.number().required(),
    state: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    status: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required()
});

export const orderSchema = Joi.object({
    id: Joi.number(),
    carId: Joi.number().required(),
    createdOn: Joi.string()
        .alphanum()
        .min(3)
        .max(200),
    status: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    price: Joi.number().required(),
    priceOffered: Joi.number().required()
});

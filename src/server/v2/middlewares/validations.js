const Joi = require('@hapi/joi');

const userSchema = Joi.object({
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

const userLoginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
});

const adSchema = Joi.object({
    id: Joi.number(),
    owner: Joi.number().required(),
    createdOn: Joi.string()
        .alphanum()
        .min(3)
        .max(200),
    state: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    status: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    price: Joi.number().required(),
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
    bodyType: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    description: Joi.string()
        .min(3)
        .max(50)
        .required()
});

const orderSchema = Joi.object({
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

const flagSchema = Joi.object({
    id: Joi.number(),
    carId: Joi.number().required(),
    createdOn: Joi.string()
        .alphanum()
        .min(3)
        .max(200),
    reason: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .required(),
    description: Joi.string()
        .min(3)
        .max(150)
        .required()
});

module.exports = {
    userSchema,
    userLoginSchema,
    adSchema,
    orderSchema,
    flagSchema
};

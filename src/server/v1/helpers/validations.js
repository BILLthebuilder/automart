// import Joi from '@hapi/joi';

// import User from '../models/user';

// const schema = Joi.object({
//     id: Joi.number(),
//     firstName: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(50)
//         .required(),
//     lastName: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(50)
//         .required(),
//     email: Joi.string()
//         .email({ minDomainSegments: 2 })
//         .required(),
//     password: Joi.string()
//         .regex(/^[a-zA-Z0-9]{3,30}$/)
//         .required(),
//     address: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(50)
//         .required(),
//     isAdmin: Joi.boolean().required()
// });

// const validated = (req, res) => {
//     const result = Joi.validate(User.create, schema);
//     if (!result) {
//         res.status(400).json({
//             status: 400,
//             error: result.error.details[0].message
//         });
//     }
//     return res.status(201).json({
//         status: 201,
//         Data: user
//     });
// };

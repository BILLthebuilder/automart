const Joi = require('@hapi/joi');
const moment = require('moment');
const query = require('../db/index');
const { userSchema, userLoginSchema } = require('../middlewares/validations');
const Helper = require('../helpers/helper');

const user = {
    async signup(req, res) {
        const { error } = Joi.validate(req.body, userSchema);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const hashPassword = Helper.hashPassword(req.body.password);
        const insert = `INSERT INTO users (firstName, lastName, password, email, 
        address, role) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const results = [
            req.body.firstName,
            req.body.lastName,
            hashPassword,
            req.body.email,
            req.body.address,
            'user'
        ];
        try {
            const { rows } = await query(insert, results);
            const token = Helper.generateToken(rows[0].id);
            const data = {
                token,
                id: rows[0].id,
                firstName: rows[0].firstname,
                lastName: rows[0].lastname,
                email: rows[0].email,
                address: rows[0].address,
                role: rows[0].role
            };
            res.status(201).json({
                data
            });
            console.log(data);
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(400).send({
                    error: ' A User with that EMAIL already exists'
                });
            }
            res.status(400).json({
                error: error.message
            });
            console.error(error);
        }
    },
    async login(req, res) {
        const { error } = Joi.validate(req.body, userLoginSchema);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const text = 'SELECT * FROM users WHERE email = $1';
        try {
            const { rows } = await query(text, [req.body.email]);
            if (!rows[0]) {
                return res.status(401).json({
                    
                    error: 'Incorrect credentials, please try again'
                });
            }
            if (!Helper.comparePassword(rows[0].password, req.body.password)) {
                return res.status(401).json({
                    
                    error: 'Incorrect credentials, please try again'
                });
            }
            const token = Helper.generateToken(rows[0].id);
            return res.status(200).json({
                token,
                Data: rows[0].email
            });
        } catch (error) {
            return res.status(400).json({
                error: error.message
            });
        }
    }
};
module.exports = user;

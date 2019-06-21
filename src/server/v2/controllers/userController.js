/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import Joi from '@hapi/joi';
import '@babel/polyfill';
import db from '../db/index';
import Helper from '../helpers/helper';
import { userSchema, userLoginSchema } from '../middlewares/validations';

dotenv.config();
const user = {
    async signup(req, res) {
        const { error } = Joi.validate(req.body, userSchema);
        if (error) {
            return res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
        }
        const hashPassword = Helper.hashPassword(req.body.password);
        const insert = `INSERT INTO users (firstName, lastName, password, email, 
            address, isAdmin) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const results = [
            req.body.firstName,
            req.body.lastName,
            hashPassword,
            req.body.email,
            req.body.address,
            false
        ];
        try {
            const { rows } = await db.query(insert, results);
            const token = Helper.generateToken(rows[0].id);
            const Data = {
                token,
                id: rows[0].id,
                firstName: rows[0].firstName,
                lastName: rows[0].lastName,
                email: rows[0].email,
                address: rows[0].address,
                isAdmin: false
            };
            return res.status(201).json({
                status: 201,
                Data
            });
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(400).send({
                    status: 400,
                    error: ' A User with that EMAIL already exists'
                });
            }
            return res.status(400).json({
                status: 400,
                error: error.message
            });
        }
    },
    async login(req, res) {
        const { error } = Joi.validate(req.body, userLoginSchema);
        if (error) {
            return res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
        }
        const text = 'SELECT * FROM users WHERE email = $1';
        try {
            const { rows } = await db.query(text, [req.body.email]);
            if (!rows[0]) {
                return res.status(401).json({
                    status: 401,
                    error: 'Incorrect credentials, please try again'
                });
            }
            if (!Helper.comparePassword(rows[0].password, req.body.password)) {
                return res.status(401).json({
                    status: 401,
                    error: 'Incorrect credentials, please try again'
                });
            }
            const token = Helper.generateToken(rows[0].id);
            return res.status(200).json({
                status: 200,
                token,
                Data: rows[0].email
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                error: error.message
            });
        }
    }
};
export default user;

/* eslint-disable no-shadow */
import dotenv from 'dotenv';
import Joi from '@hapi/joi';
import '@babel/polyfill';
import moment from 'moment';
import db from '../db/index';
import { flagSchema } from '../middlewares/validations';

dotenv.config();

const flags = {
    async create(req, res) {
        const { error } = Joi.validate(req.body, flagSchema);
        if (error) {
            return res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
        }
        const insert = `INSERT INTO flags (carId, createdOn,reason, description) VALUES ($1, $2, $3, $4) returning *`;
        const results = [req.body.carId, moment(new Date()), req.body.reason, req.body.description];
        try {
            const { rows } = await db.query(insert, results);
            return res.status(201).json({
                status: 201,
                Data: rows[0]
            });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
};

export default flags;

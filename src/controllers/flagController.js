const Joi = require('@hapi/joi');
const moment = require('moment');
const db = require('../db/index');
const { flagSchema } = require('../middlewares/validations');

const flags = {
    async create(req, res) {
        const { error } = Joi.validate(req.body, flagSchema);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const insert = `INSERT INTO flags (carId, createdOn,reason, description) VALUES ($1, $2, $3, $4) returning *`;
        const results = [req.body.carId, moment(new Date()), req.body.reason, req.body.description];
        try {
            const { rows } = await db.query(insert, results);
            return res.status(201).json({
                Data: rows[0]
            });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
};

module.exports = flags;

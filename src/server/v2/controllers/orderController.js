import dotenv from 'dotenv';
import '@babel/polyfill';
import moment from 'moment';
import db from '../db/index';

dotenv.config();

const orders = {
    async create(req, res) {
        if (!req.body.buyerId || !req.body.carId || !req.body.status) {
            return res.status(400).send({ message: 'Some values are missing' });
        }
        const insert = `INSERT INTO orders (buyerId, carId, createdOn , amount, status) VALUES ($1, $2, $3, $4, $5) returning *`;
        const results = [
            req.body.buyerId,
            req.body.carId,
            moment(new Date()),
            req.body.amount,
            req.body.status
        ];
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

export default orders;

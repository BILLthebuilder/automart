/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import '@babel/polyfill';
import db from '../db/index';

dotenv.config();
const user = {
    async signup(req, res) {
        const insert = `INSERT INTO users (firstName, lastName, password, email, 
            address, isAdmin) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const results = [
            req.body.firstName,
            req.body.lastName,
            req.body.password,
            req.body.email,
            req.body.address,
            false
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
export default user;

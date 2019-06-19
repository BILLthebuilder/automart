/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import '@babel/polyfill';
import db from '../db/index';
import Auth from '../helpers/auth';

dotenv.config();
const user = {
    async signup(req, res) {
        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.password ||
            !req.body.email ||
            !req.body.address
        ) {
            return res.status(400).send({ message: 'Some values are missing' });
        }
        if (!Auth.isValidEmail(req.body.email)) {
            return res.status(400).send({ message: 'Please enter a valid email address' });
        }
        const hashPassword = Auth.hashPassword(req.body.password);
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
            const token = Auth.generateToken(rows[0].id);
            return res.status(201).json({
                status: 201,
                token,
                Data: rows[0]
            });
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(400).send({ message: ' A User with that EMAIL already exists' });
            }
            return res.status(400).json({ error });
        }
    },
    async login(req, res) {
        if (!req.body.password || !req.body.email) {
            return res.status(400).json({ message: 'Email or password is missing, try again' });
        }
        if (!Auth.isValidEmail(req.body.email)) {
            return res.status(400).json({ message: 'Please enter a valid email address' });
        }

        if (!Auth.isValidEmail(req.body.email)) {
            return res.status(400).json({ message: 'Please enter a valid email address' });
        }
        const text = 'SELECT * FROM users WHERE email = $1';
        try {
            const { rows } = await db.query(text, [req.body.email]);
            if (!rows[0]) {
                return res.status(400).json({ message: 'Incorrect credentials, please try again' });
            }
            if (!Auth.comparePassword(rows[0].password, req.body.password)) {
                return res.status(400).json({ message: 'Incorrect credentials, please try again' });
            }
            const token = Auth.generateToken(rows[0].id);
            return res.status(200).json({
                status: 200,
                token,
                Data: rows[0]
            });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
export default user;

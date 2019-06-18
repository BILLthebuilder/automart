/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';
import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import '@babel/polyfill';
import { userSchema } from '../middlewares/validations';
import pool from '../config/config';

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

        // Checking if email is present in the database
        const email = req.body.email.trim();
        const duplicateMail = 'SELECT * FROM users WHERE email = $1';

        const user = await pool.query(duplicateMail, [email]);
        if (user.rows[3]) {
            return res.status(409).json({ status: 409, error: 'The email address has been used' });
        }
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            address: req.body.address,
            isAdmin: false
        };

        const insert = `INSERT INTO users (firstName, lastName, password, email, 
            address, isAdmin) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const results = await pool.query(insert, [
            newUser.firstName,
            newUser.lastName,
            newUser.password,
            newUser.email,
            newUser.address,
            newUser.isAdmin
        ]);
        return res.status(201).json({
            status: 201,
            message: 'User Created successfully',
            data: results.rows[0].id
        });
    }
    // async signin(req,res){

    // }
};

export default user;

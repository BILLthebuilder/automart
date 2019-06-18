/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connected to the db');
});

export const dropTables = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS flags CASCADE;
`;

pool.query(dropTables)
    .then(() => {
        console.log('tables dropped successfully');
        pool.end();
    })
    .catch(err => {
        console.log(err);
        process.exit(0);
    });

// require('make-runnable');

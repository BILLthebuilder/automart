/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Create Tables
 */
export const createTables = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(150) NOT NULL,
        lastName VARCHAR(150) NOT NULL,
	      password VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL,
        address VARCHAR(150) NOT NULL,
        isAdmin BOOL NOT NULL
      ); 
      CREATE TABLE IF NOT EXISTS cars(
        id SERIAL PRIMARY KEY,
        owner INT NOT NULL,
        createdOn TIMESTAMP,
        state VARCHAR(51) NOT NULL,
        status VARCHAR(20) NOT NULL,
        price INT NOT NULL,
        manufacturer VARCHAR(20) NOT NULL,
        model VARCHAR(20) NOT NULL,
        bodyType VARCHAR(20) NOT NULL,
        description VARCHAR(150) NOT NULL,
        picture VARCHAR(150),
        FOREIGN KEY (owner) REFERENCES users(id) ON DELETE CASCADE
      );
      CREATE TABLE IF NOT EXISTS orders(
        id SERIAL PRIMARY KEY,
        buyerId INT NOT NULL,
        carId INT NOT NULL,
        createdOn TIMESTAMP,
        amount INT NOT NULL,
        status VARCHAR(20) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS flags(
        id SERIAL PRIMARY KEY,
        carId INT NOT NULL,
        createdOn TIMESTAMP NOT NULL,
        reason VARCHAR(100) NOT NULL,
        description VARCHAR(150) NOT NULL,
        FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
      )`;

pool.query(createTables)
    .then(() => {
        console.log('tables created successfully');
        pool.end();
    })
    .catch(err => {
        console.log(err);
        process.exit(0);
    });

// require('make-runnable');

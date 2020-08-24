const { Pool } = require('pg');
const { createAll, sessionCreate, dropAll } = require('./queries');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connected to the db');
});
pool.on('error', err => {
    console.log(err, 'Error connecting to the database');
});
function createTables() {
    pool.query(createAll)
        .then(res => {
            console.log('all tables created successfully');
            pool.end();
        })
        .catch(err => {
            console.log(err);
            process.exit(0);
        });
}

function createSession() {
    pool.query(sessionCreate)
        .then(res => {
            console.log('Session table created successfully');
            pool.end();
        })
        .catch(err => {
            console.log(err);
            process.exit(0);
        });
}

function dropTables() {
    pool.query(dropAll)
        .then(res => {
            console.log('all tables dropped successfully');
            pool.end();
        })
        .catch(err => {
            console.log(err);
            process.exit(0);
        });
}

function dropSession() {
    const dropSession = `DROP TABLE IF EXISTS sessions CASCADE`;
    pool.query(dropSession)
        .then(res => {
            console.log('session table dropped successfully');
            pool.end();
        })
        .catch(err => {
            console.log(err);
            process.exit(0);
        });
}

module.exports = {
    pool,
    createTables,
    dropTables,
    createSession,
    dropSession
};

require('make-runnable');

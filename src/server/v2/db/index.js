const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

function query(text, params) {
    return new Promise((resolve, reject) => {
        pool.query(text, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

module.exports = query;

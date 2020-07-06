const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const _default = {
    query(text, params) {
        return new Promise((resolve, reject) => {
            pool.query(text, params)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};
exports.default = _default;

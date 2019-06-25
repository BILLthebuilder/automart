import { Pool } from 'pg';
import dotenv from 'dotenv';
// node environments;
dotenv.config();
let pool = {};
if (process.env.NODE_ENV === 'development') {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    pool.on('connect', () => {});
} else if (process.env.NODE_ENV === 'test') {
    pool = new Pool({
        connectionString: process.env.TEST_DB_URL
    });

    pool.on('connect', () => {});
} else if (process.env.NODE_ENV === 'production') {
    pool = new Pool({
        connectionString: process.env.PROD_DB_URL
    });

    pool.on('connect', () => {});
}
export default pool;

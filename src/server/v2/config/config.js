import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

switch (process.env.NODE_ENV) {
    case 'test':
        module.exports = new Pool({
            connectionString: process.env.TEST_DB_URL
        });
        break;

    case 'production':
        module.exports = new Pool({
            connectionString: process.env.PROD_DB_URL
        });
        break;

    default:
        module.exports = new Pool({
            connectionString: process.env.DATABASE_URL
        });
}

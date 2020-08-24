const createAll = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(150) NOT NULL,
    lastName VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
    address VARCHAR(150) NOT NULL,
    role VARCHAR(10) NOT NULL
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
    carId INT NOT NULL,
    createdOn TIMESTAMP,
    status VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    priceOffered INT NOT NULL,
    FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS flags(
    id SERIAL PRIMARY KEY,
    carId INT NOT NULL,
    createdOn TIMESTAMP NOT NULL,
    reason VARCHAR(100) NOT NULL,
    description VARCHAR(150) NOT NULL,
    FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
    );
    `;
const sessionCreate = `CREATE TABLE IF NOT EXISTS sessions(
        id SERIAL PRIMARY KEY,
        userId INT,
        expires DATE NOT NULL,
        data VARCHAR(50000)
    );`;

const dropAll = `DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS cars CASCADE;
    DROP TABLE IF EXISTS orders CASCADE;
    DROP TABLE IF EXISTS flags CASCADE;
    `;

module.exports = {
    createAll,
    sessionCreate,
    dropAll
};

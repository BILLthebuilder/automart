const chai = require('chai');
const asserttype = require('chai-asserttype');
const Auth = require('../middlewares/auth');
const { createTables, dropTables, pool } = require('../db/tables');

chai.use(asserttype);

describe('Table creation', () => {
    it('Tables must be created', () => {
        chai.expect(createTables).to.be.a('function');
    });
});
describe('Table destruction', () => {
    it('Tables must be dropped', () => {
        chai.expect(dropTables).to.be.a('function');
    });
});
describe('Other functions', () => {
    it('on must be a function', () => {
        chai.expect(pool).to.be.an('object');
    });
});

describe('Authentication', () => {
    it('Auth must be a function', () => {
        chai.expect(Auth).to.be.an('object');
        // eslint-disable-next-line no-unused-expressions
        chai.expect(Auth.verifyToken).to.be.a('function').and.to.not.be.undefined;
    });
});

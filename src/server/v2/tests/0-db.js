/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import chai from 'chai';
import 'chai/register-expect';
import asserttype from 'chai-asserttype';
import { createTables, dropTables, pool } from '../db/tables';
import Auth from '../middlewares/auth';

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
        chai.expect(Auth.verifyToken).to.be.a('function').and.to.not.be.undefined;
    });
});

const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaihttp = require('chai-http');
const expect = require('chai/register-expect');
const app = require('../../../app');

chai.use(chaihttp);
chai.use(asserttype);

describe('Swagger docs', () => {
    it('A user should be able to view swagger docs', done => {
        chai.request(app)
            .get('/docs/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
            });
        done();
    });
});

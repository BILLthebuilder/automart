const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaihttp = require('chai-http');

const { expect } = chai;
const app = require('../../../app');

chai.use(chaihttp);
chai.use(asserttype);

describe('Flags', () => {
    const flag = {
        Data: {
            id: 1,
            carId: 'John',
            createdOn: '01/01/2019',
            reason: 'Pricing',
            description: 'the pricing is too high'
        }
    };
    it('A user should not be able to flag a posted car ad', done => {
        chai.request(app)
            .post('/api/v2/flag')
            .send(flag)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body).to.be.an('object');
            });
        done();
    });
});

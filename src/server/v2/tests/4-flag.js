/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

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

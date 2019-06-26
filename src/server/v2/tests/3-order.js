/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);

describe('Purchase Order', () => {
    const order = {
        Data: {
            id: 1,
            carId: 1,
            createdOn: '01/01/2019',
            status: 'avalable',
            price: 4.598,
            priceOffered: 3.48
        }
    };
    it('A user Should not be able to create a purchase order', () => {
        chai.request(app)
            .post('/api/v2/order/')
            .send(order)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
            });
    });
});

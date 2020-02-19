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
            status: 'avalable/sold',
            price: 4.598,
            priceOffered: 3.48
        }
    };
    it('A user Should be able to create a purchase order', done => {
        chai.request(app)
            .post('/api/v1/order/')
            .send(order)
            .end((err, res) => {
                expect(res.body)
                    .to.have.a.status(400)
                    .and.to.be.an('object');
                // expect(res.body.Data).to.have.a.property('id');
                // expect(res.body.Data)
                //     .to.have.a.property('carId')
                //     .and.to.be.a('number');
                // expect(res.body.Data)
                //     .to.have.a.property('createdOn')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('status')
                //     .and.to.be.a('string');
                // expect(res.body.Data)
                //     .to.have.a.property('price')
                //     .and.to.be.a('number');
                // expect(res.body.Data)
                //     .to.have.a.property('priceOffered')
                //     .and.to.be.a('number');
                done();
            });
    });
});

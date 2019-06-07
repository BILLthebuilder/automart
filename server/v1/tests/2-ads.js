/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);

describe('Advertisements', () => {
    const ad = {
        Data: {
            id: 'sdfjfjkdsfjkerjffkfdksad3',
            owner: 'John',
            email: 'email@email.com',
            createdOn: '01/01/2019',
            manufacturer: 'Toyota',
            model: '80100',
            price: 4.598,
            state: 'new/used',
            status: 'avalable/sold'
        }
    };
    it('Should be able to create a car sale ad', () => {
        chai.request(app)
            .post('/car/')
            .send(ad)
            .end((err, res) => {
                expect(res.body)
                    .to.have.a.status(201)
                    .and.to.be.an('object');
                expect(res.body.Data)
                    .to.have.a.property('id')
                    .and.to.be.a('string');
                expect(res.body.Data)
                    .to.have.a.property('owner')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('email')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('createdOn')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('manufacturer')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('model')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('price')
                    .and.to.be.a('number');
                expect(res.body.data)
                    .to.have.a.property('state')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('status')
                    .and.to.be.a('string');
            });
    });
});
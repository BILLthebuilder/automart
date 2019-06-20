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
            id: 1,
            owner: 'John',
            email: 'email@email.com',
            createdOn: '01/01/2019',
            manufacturer: 'Toyota',
            model: '80100',
            price: 4.598,
            state: 'used',
            status: 'avalable'
        }
    };
    it('A user Should be able to create a car sale ad', () => {
        chai.request(app)
            .post('/api/v2/car/')
            .send(ad)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
    it('A user should be able to view all posted ads', () => {
        chai.request(app)
            .get('/api/v2/cars/')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
    it('A user should be able to view a specific car ad', () => {
        chai.request(app)
            .get('/api/v2/car/:id')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
    it('A user should be able to view all unsold car ads', () => {
        chai.request(app)
            .get('/api/v2/status/cars')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
    it('A user should be able to view all unsold car ads by price range', () => {
        chai.request(app)
            .get('/api/v2/range/cars')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
    it('A user should be able to delete a specific car ad', () => {
        chai.request(app)
            .delete('/api/v2/car/:id')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
});

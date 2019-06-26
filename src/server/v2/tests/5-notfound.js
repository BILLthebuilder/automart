/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);

describe('404', () => {
    it('A user should get a 404 for non-existent endpoints', done => {
        chai.request(app)
            .post('/api/v4/fsdfsc/sdsfsf')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
});

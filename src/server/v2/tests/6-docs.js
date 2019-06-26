/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);

describe('Swagger docs', () => {
	it('A user should be able to view swagger docs', done => {
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.a('string');
			});
		done();
	});
});

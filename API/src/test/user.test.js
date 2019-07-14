import chai from 'chai';

import request from 'supertest';

import app from '../index';

const { expect } = chai;

const API_PREFIX = '/api/v1';

describe('Test case for the default for the propertypro route /', () => {
  describe('/ testing for response', () => {
    it('should return a welcome message to the user', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect(response => {
          expect(response.text)
            .to.be.a('string')
            .to.equal('Welcome to Propertypro Lite!');
        })
        .end(done);
    });
  });

  describe('/ testing for endpoints that do not exist', () => {
    it('should return 404 error', done => {
      request(app)
        .get('/google')
        .expect(404)
        .expect(response => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              message:
                'The endpoint you have requested does not exist on this server'
            })
            .to.have.all.keys('status', 'message');
        })
        .end(done);
    });
  });
});

describe('/ User Auth Signup Endpoint ', () => {
  describe('/ user signup - User SignUp Validation Test(Required)', () => {
    it('user signup validation check', done => {
      request(app)
        .post(`${API_PREFIX}/auth/signup`)
        .set('Accept', 'application/json')
        .send({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          address: '',
          password: ''
        })
        .expect(400)
        .expect(response => {
          expect(response.body.status).to.equal('Bad Request');
          expect(response.body.error).to.equal(
            'Validation failed, check to ensure fields are properly filled'
          );
          expect(response.body).to.have.all.keys('status', 'error', 'errors');
        })
        .end(done);
    });

    it('should allow a user to signup ', done => {
      request(app)
        .post(`${API_PREFIX}/auth/signup`)
        .set('Accept', 'application/json')
        .send({
          first_name: 'Okikiola',
          last_name: 'Apelehin',
          email: 'user@gmail.com',
          password: 'okiki123',
          phone_number: '08023182819',
          address: '2a, 2nd street Osborne estate Ikoyi',
          is_admin: false
        })
        .expect(201)
        .expect(response => {
          expect(response.body.status).to.equal('success');
          expect(response.body.message).to.equal('New user has been created');
          expect(response.body.data).to.have.all.keys(
            'token',
            'id',
            'first_name',
            'last_name',
            'email',
            'phone_number',
            'address'
          );
        })
        .end(done);
    });
  });
});

describe('/ User Auth Signin Endpoint ', () => {
  describe('/ POST user login ', () => {
    it("POST /auth/signin - User Can't login with incorrect password", done => {
      request(app)
        .post(`${API_PREFIX}/auth/signin`)
        .send({
          email: 'user@gmail.com',
          password: 'okiki111'
        })
        .expect(401)
        .expect(response => {
          expect(response.body.status).to.equal('Unauthorized');
          expect(response.body.message).to.equal('Incorrect Password');
        })
        .end(done);
    });

    it('should allow a user to signin after signing up ', done => {
      request(app)
        .post(`${API_PREFIX}/auth/signin`)
        .set('Accept', 'application/json')
        .send({
          email: 'user@gmail.com',
          password: 'okiki123'
        })
        .expect(200)
        .expect(response => {
          expect(response.body.status).to.equal('success');
          expect(response.body.message).to.equal(
            'Welcome user@gmail.com, you have successfully logged in'
          );
          expect(response.body.data).to.have.all.keys(
            'token',
            'id',
            'first_name',
            'last_name',
            'email',
            'is_admin'
          );
        })
        .end(done);
    });
  });
});

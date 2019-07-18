"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

var expect = _chai["default"].expect;
var API_PREFIX = '/api/v1';
describe('Test case for the default for the propertypro route /', function () {
  describe('/ testing for response', function () {
    it('should return a welcome message to the user', function (done) {
      (0, _supertest["default"])(_index["default"]).get('/').expect(200).expect(function (response) {
        expect(response.text).to.be.a('string').to.equal('Welcome to Propertypro Lite!');
      }).end(done);
    });
  });
  describe('/ testing for endpoints that do not exist', function () {
    it('should return 404 error', function (done) {
      (0, _supertest["default"])(_index["default"]).get('/google').expect(404).expect(function (response) {
        expect(response.body).to.be.an('object').to.eql({
          status: 404,
          message: 'The endpoint you have requested does not exist on this server'
        }).to.have.all.keys('status', 'message');
      }).end(done);
    });
  });
});
describe('/ User Auth Signup Endpoint ', function () {
  describe('/ user signup ', function () {
    // it('user check signup validation ', done => {
    //   request(app)
    //     .post(`${API_PREFIX}/auth/signup`)
    //     .set('Accept', 'application/json')
    //     .send({
    //       first_name: '',
    //       last_name: '',
    //       email: '',
    //       phone_number: '',
    //       address: '',
    //       password: ''
    //     })
    //     .expect(400)
    //     .expect(response => {
    //       expect(response.body.status).to.equal('Bad Request');
    //       expect(response.body.error).to.equal(
    //         'Validation failed, check to ensure fields are properly filled'
    //       );
    //       expect(response.body).to.have.all.keys('status', 'error', 'errors');
    //     })
    //     .end(done);
    // });
    it('should not allow an existing email to signup', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signup")).set('Accept', 'application/json').send({
        first_name: 'Okikiola',
        last_name: 'Apelehin',
        email: 'user@gmail.com',
        password: 'okiki123',
        phone_number: '08023182819',
        address: '2a, 2nd street Osborne estate Ikoyi'
      }).expect(409).expect(function (response) {
        expect(response.body.status).to.equal('Conflict');
        expect(response.body.error).to.equal('Email already exist');
      }).end(done);
    });
    it('should allow a user to signup ', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signup")).set('Accept', 'application/json').send({
        first_name: 'Okikiola',
        last_name: 'Apelehin',
        email: 'something@gmail.com',
        password: 'okiki123',
        phone_number: '08023182819',
        address: '2a, 2nd street Osborne estate Ikoyi',
        is_admin: false
      }).expect(201).expect(function (response) {
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('New user has been created');
        expect(response.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email', 'phone_number', 'address');
      }).end(done);
    });
  });
});
describe('/ User Auth Signin Endpoint ', function () {
  describe('/ POST /auth/signin', function () {
    // it('should check user login input fields', done => {
    //   request(app)
    //     .post(`${API_PREFIX}/auth/signin`)
    //     .set('Accept', 'application/json')
    //     .send({
    //       email: '',
    //       password: ''
    //     })
    //     .expect(400)
    //     .expect(response => {
    //       expect(response.body.status).to.equal('Bad Request');
    //       expect(response.body.error).to.equal(
    //         'Validation failed, check to ensure fields are properly filled'
    //       );
    //     })
    //     .end(done);
    // });
    it("POST /auth/signin - User Can't login with incorrect password", function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signin")).send({
        email: 'user@gmail.com',
        password: 'oki'
      }).expect(401).expect(function (response) {
        expect(response.body.status).to.equal('Unauthorized');
        expect(response.body.error).to.equal('Incorrect Password');
      }).end(done);
    });
    it('should allow a user to signin after signing up ', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signin")).set('Accept', 'application/json').send({
        email: 'user@gmail.com',
        password: 'okiki123'
      }).expect(200).expect(function (response) {
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Welcome user@gmail.com, you have successfully logged in');
        expect(response.body.data).to.have.all.keys('email', 'first_name', 'id', 'last_name', 'token');
      }).end(done);
    });
  });
});
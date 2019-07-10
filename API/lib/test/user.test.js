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
  describe('/ user signup - User SignUp Validation Test(Required)', function () {
    it('user signup validation check', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signup")).set('Accept', 'application/json').send({
        first_name: '',
        last_name: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: ''
      }).expect(400).expect(function (response) {
        expect(response.body.status).to.equal('Bad Request');
        expect(response.body.error).to.equal('Validation failed, check to ensure fields are properly filled');
        expect(response.body).to.have.all.keys('status', 'error', 'errors');
      }).end(done);
    });
    it('should allow a user to signup ', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/auth/signup")).set('Accept', 'application/json').send({
        first_name: 'Okikiola',
        last_name: 'Apelehin',
        email: 'user@gmail.com',
        password: 'okiki123',
        phoneNumber: '08023182819',
        address: '2a, 2nd street Osborne estate Ikoyi',
        is_admin: false
      }).expect(201).expect(function (response) {
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('New user has been created');
        expect(response.body.data).to.have.all.keys('token', 'id', 'first_name', 'last_name', 'email', 'phoneNumber', 'address');
      }).end(done);
    });
  });
});
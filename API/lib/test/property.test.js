"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = require("dotenv");

var _index = _interopRequireDefault(require("../index"));

(0, _dotenv.config)();
var expect = _chai["default"].expect;
var API_PREFIX = '/api/v1';

var token = _jsonwebtoken["default"].sign({
  id: 1,
  is_admin: false
}, process.env.SECRET, {
  expiresIn: '24h'
});

describe('/ PropertyPro Endpoint ', function () {
  describe('/ POST Property ', function () {
    it('should be able to create a propertypro lite', function (done) {
      (0, _supertest["default"])(_index["default"]).post("".concat(API_PREFIX, "/property/")).set('Accept', 'application/json').set('token', "".concat(token)).send({
        price: '850000',
        state: 'lagos',
        city: 'ikeja',
        address: '5a, Udi street ikoyi',
        type: '3 bedroom',
        image_url: 'https://res.cloudinary.com/dqyaazwe7/image/upload/v1563116789/property/images/rarvxd8bq7cyxopuslx3.jpg'
      }).expect(201).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Property advert has been created');
        expect(response.body.data).to.have.all.keys('id', 'price', 'state', 'city', 'address', 'type', 'image_url');
      }).end(done);
    }); // it('should create user accounts validation check', done => {
    //   request(app)
    //     .post(`${API_PREFIX}/accounts`)
    //     .set('Accept', 'application/json')
    //     .set('Authorization', `${token}`)
    //     .send({
    //       type: '',
    //       openingBalance: '25000.00',
    //       price: '850000',
    //         state:'lagos',
    //         city: '',
    //         address: '',
    //         type: '2 bedroom',
    //         image_url: ''
    //     })
    //     .expect(400)
    //     .expect(response => {
    //       expect(response.body.status).to.equal(400);
    //       expect(response.body.error).to.equal(
    //         'Validation failed, check errors property for more details'
    //       );
    //     })
    //     .end(done);
    // });
  });
  describe('/ GET all property ', function () {
    it('should get all property adverts ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal(200);
        expect(response.body.message).to.equal('There are no existing properties');
        expect(response.body.data[0]).to.have.all.keys('id', 'price', 'state', 'city', 'address', 'type', 'image_url');
      }).end(done);
    });
    it('should get all properties ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal(200);
        expect(response.body.message).to.equal('Successfully retrieved all properties');
        expect(response.body.data[0]).to.have.all.keys('id', 'price', 'state', 'city', 'address', 'type', 'image_url');
      }).end(done);
    });
    it('should get a not found if the property does not exist ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property/")).set('Accept', 'application/json').set('token', "".concat(token)).expect(404).expect(function (response) {
        expect(response.body).to.eql({
          status: 'Not found',
          error: 'No property found'
        }).to.have.all.keys('status', 'error');
      }).end(done);
    });
  });
  describe('/ UPDATE property ', function () {
    it('should send an error message if property is not found ', function (done) {
      (0, _supertest["default"])(_index["default"]).patch("".concat(API_PREFIX, "/property/2")).set('Accept', 'application/json').set('token', "".concat(token)).send({
        price: '850000'
      }).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal(200);
        expect(response.body.message).to.equal('Property has been succesfully updated');
        expect(response.body.data[0]).to.have.all.keys('id', 'status', 'type', 'state', 'city', 'address', 'price', 'created_on', 'image_url');
      }).end(done);
    }); // it('should send an error message if Validation fails ', done => {
    //   request(app)
    //     .patch(`${API_PREFIX}/accounts/2040050222`)
    //     .set('Accept', 'application/json')
    //     .set('Authorization', `${staffToken}`)
    //     .expect(400)
    //     .expect(response => {
    //       expect(response.body.status).to.equal(400);
    //       expect(response.body.error).to.equal(
    //         'Validation failed, check errors property for more details'
    //       );
    //     })
    //     .end(done);
    // });
  });
  describe('/ DELETE property ', function () {
    it('should return an error message if property was not found ', function (done) {
      (0, _supertest["default"])(_index["default"])["delete"]("".concat(API_PREFIX, "/property/2")).set('Accept', 'application/json').set('token', "".concat(token)).expect(404).expect(function (response) {
        expect(response.body).to.eql({
          status: 404,
          error: 'Oooops! no record with such Property Id'
        }).to.have.all.keys('status', 'error');
      }).end(done);
    });
    it('should delete a property advert ', function (done) {
      (0, _supertest["default"])(_index["default"])["delete"]("".concat(API_PREFIX, "/property/2")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message');
        expect(response.body.status).to.equal(200);
        expect(response.body.message).to.equal('Property has been deleted successfully');
      }).end(done);
    });
  });
});
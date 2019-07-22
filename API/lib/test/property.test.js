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
        expect(response.body.data).to.have.all.keys('id', 'owner', 'status', 'price', 'state', 'city', 'address', 'type', 'image_url', 'created_on');
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
    it('should return success mssg if there are no properties ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message');
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('There are no existing properties');
      }).end(done);
    });
    it('should get all properties ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully retrieved all properties');
        expect(response.body.data[0]).to.have.all.keys('id', 'address', 'city', 'created_on', 'image_url', 'owner_email', 'owner_phone_number', 'price', 'state', 'status', 'type');
      }).end(done);
    });
    it('should get a not found if the property does not exist ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property")).set('Accept', 'application/json').set('token', "".concat(token)).expect(404).expect(function (response) {
        expect(response.body).to.eql({
          status: 'Not found',
          error: 'No property found'
        }).to.have.all.keys('status', 'error');
      }).end(done);
    });
  });
  describe('/ GET a specific property ', function () {
    it('should get specific property, if propertyId exist', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property/1")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Property has been retrieved successfully');
        expect(response.body.data).to.have.all.keys('id', 'status', 'type', 'state', 'city', 'address', 'price', 'created_on', 'image_url', 'owner_email', 'owner_phone_number');
      }).end(done);
    });
    it('should return not found if property does not exist ', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property/22")).set('Accept', 'application/json').set('token', "".concat(token)).expect(404).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'error');
        expect(response.body.status).to.equal('Not found');
        expect(response.body.error).to.equal('Property does not exist');
      }).end(done);
    });
    it('should return forbidden if property does not belong you', function (done) {
      (0, _supertest["default"])(_index["default"]).get("".concat(API_PREFIX, "/property/4")).set('Accept', 'application/json').set('token', "".concat(token)).expect(403).expect(function (response) {
        expect(response.body).to.eql({
          status: 'Forbidden',
          error: 'This property does not belong to you'
        }).to.have.all.keys('status', 'error');
      }).end(done);
    });
  });
  describe('/ UPDATE property ', function () {
    it('should return error if property does not exist', function (done) {
      (0, _supertest["default"])(_index["default"]).patch("".concat(API_PREFIX, "/property/1")).set('Accept', 'application/json').set('token', "".concat(token)).send({
        price: '850000'
      }).expect(404).expect(function (response) {
        console.log(response.body);
        expect(response.body).to.have.all.keys('status', 'error');
        expect(response.body.status).to.equal('Not found');
        expect(response.body.error).to.equal('No property found');
      }).end(done);
    });
    it('should return error if ownerId does not tally with signed in user Id', function (done) {
      (0, _supertest["default"])(_index["default"]).patch("".concat(API_PREFIX, "/property/1")).set('Accept', 'application/json').set('token', "".concat(token)).send({
        price: '850000'
      }).expect(401).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'error');
        expect(response.body.status).to.equal('Unauthorized');
        expect(response.body.error).to.equal('This property does not belong to you');
      }).end(done);
    });
    it('should send an error message if property is not found ', function (done) {
      (0, _supertest["default"])(_index["default"]).patch("".concat(API_PREFIX, "/property/1")).set('Accept', 'application/json').set('token', "".concat(token)).send({
        price: '850000'
      }).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message', 'data');
        expect(response.body.status).to.equal('success');
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
      (0, _supertest["default"])(_index["default"])["delete"]("".concat(API_PREFIX, "/property/4")).set('Accept', 'application/json').set('token', "".concat(token)).expect(404).expect(function (response) {
        expect(response.body).to.eql({
          status: 'Not found',
          error: 'Oooops! no record with such Property Id'
        }).to.have.all.keys('status', 'error');
      }).end(done);
    });
    it('should delete a property advert ', function (done) {
      (0, _supertest["default"])(_index["default"])["delete"]("".concat(API_PREFIX, "/property/1")).set('Accept', 'application/json').set('token', "".concat(token)).expect(200).expect(function (response) {
        expect(response.body).to.have.all.keys('status', 'message');
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Property has been deleted successfully');
      }).end(done);
    });
  });
});
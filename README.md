# PROPERTYPRO LITE
[![Build Status](https://travis-ci.org/okikiola11/PropertyPro.svg?branch=develop)](https://travis-ci.org/okikiola11/PropertyPro)
[![Coverage Status](https://coveralls.io/repos/github/okikiola11/PropertyPro/badge.svg?branch=develop)](https://coveralls.io/github/okikiola11/PropertyPro?branch=develop)

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

## Required Features

- User can sign up.
- User can sign in.
- User (agent) can post a property advert.
- User (agent) can update the details of a property advert.
- User (agent) can mark his/her posted advert as sold.
- User (agent) can delete a property advert.
- User can view all properties adverts.
- User can view all properties of a specific type - 2 bedroom, 3 bedroom, mini flat etc.
- User can view a specific property advert.

## Endpoints

| HTTP Verb       | Endpoints                                 |
| --------------- | ----------------------------------------- |
| `POST request`  | api/v1/auth/signup                        |
| `POST request`  | api/v1/auth/signin                        |
| `POST request`  | api/v1/property                           |
| `GET type`      | api/v1//property/:property-id?type        |
| `GET single`    | api/v1/property/:property-id              |
| `PATCH request` | api/v1/property/:property-id              |
| `PATCH sold`    | api/v1/property/:property-id/sold         |
| `DELETE`        | api/v1/property/:property-id              |


## Clone the Repo

https://github.com/okikiola11/PropertyPro

## Github Pages

- https://okikiola11.github.io/PropertyPro/UI/index.html

## Prerequisites

The following tools will be needed to run this application successfully:

- Node v10.15.0 or above
- Npm v6.4 or above

## SETUP

To get started, clone this repository on your local machine using the following steps:

Open your terminal and navigate to the folder you want the project to be and enter the the following commands:
```
$ git clone -b develop https://github.com/okikiola11/PropertyPro.git
$ cd PropertyPro
$ npm install
```

## Starting the dev server

```
npm run dev
```

## Running the tests

```
npm test
```


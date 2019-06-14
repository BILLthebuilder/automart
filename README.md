# automart-UI
[![Build Status](https://travis-ci.org/BILLthebuilder/automart.svg?branch=develop)](https://travis-ci.org/BILLthebuilder/automart)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/49ef39d76a524574a1a17377fd577175)](https://www.codacy.com/app/BILLthebuilder/automart?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BILLthebuilder/automart&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/BILLthebuilder/automart/badge.svg?branch=develop)](https://coveralls.io/github/BILLthebuilder/automart?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/ffb1d05cd6ce559cedcb/maintainability)](https://codeclimate.com/github/BILLthebuilder/automart/maintainability)

## About

Auto Mart is an online marketplace for automobiles of diverse makes, model or body type. With Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers.

This app is built using html, css and Javascript

The frontend is located on the [gh-pages branch](https://github.com/BILLthebuilder/automart/tree/gh-pages)

The backend, built with Nodejs and Express is located on the [develop branch](https://github.com/BILLthebuilder/automart/tree/develop)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* Nodejs/ npm 
  
* Postman
  
### Installing

A step by step series of examples that tell you how to get a development environment running

* Clone the project repository
  
`git clone https://github.com/BILLthebuilder/automart.git`

* Change the directory
  
`cd automart`

* Install the dependencies
  
`npm install`

* To compile and run a production build
    ```bash
      npm start 
    ```

* To run a regular development build
    ```bash
      npm startdev 
    ```

### The Working API Endpoints
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e8c72a3c6aec23d3251b)

| Request | Endpoint                              | Function                                          |
| ------- | ------------------------------------- | ------------------------------------------------- |
| POST    | `/api/v1/auth/signup`                 | Register a new user                               |
| POST    | `/api/v1/car/`                        | Create a car sale ad                              |
| GET     | `/api/v1/cars/`                       | Fetch all posted ads                              |
| POST    | `/api/v1/order/`                      | Create a purchase order                           |
| GET     |  `/api/v1/car/:id`                    | View a specific car ad                            |
| DELETE  | `/api/v1/car/:id`                     | Delete a specific car ad                          |
|         |                                       |                                                   |

## Running the tests

* Run  `npm test`

## Deployment

* The API is deployed [here](https://automart-api.herokuapp.com/) on heroku

## Built With

* [Express](http://expressjs.com) - The web framework used

## Versioning

* This is version 1(v1) of the API which uses data structures to handle user data 

## Authors

### Bill Kariri

* Initial work : [Bill Kariri](https://github.com/BILLthebuilder)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

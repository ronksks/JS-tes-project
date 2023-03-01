
# Testing an API with Mocha, Chai, and Nock.
This repository includes a Node.js server and a test suite written with Jest to test its functionality.

## Installation
Clone the repository
Install dependencies using npm install

## Running Tests
To run the tests, use the command npm test. 
This will start Jest and run all tests in the __tests__ directory.

The test suite includes tests for the server endpoints in server.test.js. 
These tests use the supertest library to simulate requests to the server and check the responses.

The server file server.js includes endpoints for retrieving and creating users. 
The tests ensure that these endpoints return the expected data and handle errors correctly.

## Starting the Server
To start the server, use the command npm run devStart. This will start the server on http://localhost:3000.

## Conclusion
The test suite ensures that the server functions correctly and handles errors appropriately. 
By running the tests regularly, developers can catch issues early and avoid releasing faulty code.

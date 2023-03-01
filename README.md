
# Testing an API with Mocha, Chai, and Nock.
This repository includes a Node.js server and a test suite written with Jest to test its functionality.

## Installation
Clone the repository.<br />
Install dependencies using npm install.<br />

## Running Tests
To run the tests, use the command npm test. <br />
This will start Jest and run all tests in the __tests__ directory.<br />

The test suite includes tests for the server endpoints in server.test.js. <br />
These tests use the supertest library to simulate requests to the server and check the responses.<br />

The server file server.js includes endpoints for retrieving and creating users. <br />
The tests ensure that these endpoints return the expected data and handle errors correctly.<br />

## Starting the Server
To start the server, use the command npm run devStart. <br />
This will start the server on http://localhost:3000.<br />

## Conclusion
The test suite ensures that the server functions correctly and handles errors appropriately. <br />
By running the tests regularly, developers can catch issues early and avoid releasing faulty code.<br />

/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var should = require('should');
var moment = require('moment');
var UserDb = require('./../../js/database/user-db');
var DummyUserCreator = require('./../data-generation/dummy-user-creator');

describe('Database test for user functions', function() {

    // Initialize the dummy user creator
    var dummyUserCreator = new DummyUserCreator();

    before(function(done) {
        done();
    });

    after(function(done) {
        done();
    });


    // Create a random user
    var userObject = dummyUserCreator.createTestUser();

    describe('Testing Creation of new User', function() {

        // Then, use this at the user
        var userDb = new UserDb();

        it('Should create a new user succesfully', function(done) {
            userDb.createUser(userObject, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("Result of the use creation:", result);
                // Done!
                done();
            });
        });
    });


});
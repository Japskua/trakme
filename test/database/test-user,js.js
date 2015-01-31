/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var should = require('should');
var moment = require('moment');
var UserDb = require('./../../js/database/user-db');
var DummyUserCreator = require('./../data-generation/dummy-user-creator');

describe.skip('Database test for user functions', function() {

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
                // Set the userobject, so it can be removed later
                result.should.not.be.empty;
                result.locale.should.equal(userObject.locale);
                result.id.should.not.be.empty;
                result.id.should.be.string;
                userObject = result;
                // Done!
                done();
            });
        });
    });

    describe('Testing Editing of a User', function() {
        var userDb = new UserDb();

        it('Should update the user succesfully', function(done) {
            userDb.updateUser({ _id : userObject.id}, { givenName : "Changed", familyName : "New Name"}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("The result of the update:", result);
                result.should.not.be.empty;
                result.locale.should.equal(userObject.locale);
                result.id.should.not.be.empty;
                result.id.should.be.string;
                result.givenName.should.equal("Changed");
                result.familyName.should.equal("New Name");
                userObject = result;
                done();
            });
        });
    });

    describe('Testing Find a user', function() {
        var userDb = new UserDb();

        it('Should find the newly updated user', function(done) {
            userDb.findUser({ _id : userObject.id}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("The results of the find are:", result);
                result.should.not.be.empty;
                result.locale.should.equal(userObject.locale);
                result.id.should.not.be.empty;
                result.id.should.be.string;
                result.givenName.should.equal("Changed");
                result.familyName.should.equal("New Name");

                done();
            });
        });
    });

    describe('Testing Removal of the user', function() {

        var userDb = new UserDb();

        it('Should remove the user succesfully', function(done) {
            userDb.removeUser({ _id : userObject.id}, function(err, result) {
                if(err) {
                    throw err;
                }

                console.log("Result of the user removal:", result);
                result.should.not.be.empty;
                result.locale.should.equal(userObject.locale);
                result.id.should.not.be.empty;
                result.id.should.be.string;
                result.givenName.should.equal("Changed");
                result.familyName.should.equal("New Name");
                done();
            });
        });
    });


});
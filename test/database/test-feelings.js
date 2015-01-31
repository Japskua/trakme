/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
var should = require('should');
var moment = require('moment');
var UserDb = require('./../../js/database/user-db');
var FeelingsDb = require('./../../js/database/feelings-db');
var DummyUserCreator = require('./../data-generation/dummy-user-creator');

describe.only('Database test for user functions', function() {

    // Initialize the dummy user creator
    var dummyUserCreator = new DummyUserCreator();
    // Create a random user
    var userObject = dummyUserCreator.createTestUser();
    var userDb = new UserDb();

    before(function (done) {
        // Create the user
        userDb.createUser(userObject, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("User created");
            userObject = result;
            done();
        });
    });

    after(function (done) {
        // Remove the user
        userDb.removeUser({_id: userObject.id}, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("User removed");
            done();
        });
    });


    // Create the feelings Json that can be used throughout the tests
    var feelingsJson;
    var feelings2Json;

    describe('Testing Creation of feelings for a user', function () {
        var feelingsDb = new FeelingsDb();

        it('Should create a new feelings entry to the database', function (done) {
            // Create the random feelings JSONs
            feelingsJson = new DummyUserCreator().createTestFeelings(userObject._id);

            feelingsDb.createFeelings(feelingsJson, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log("Result of feelings creation:", result);
                result.should.not.be.empty;
                result.comment.should.equal(feelingsJson.comment);
                result._creator.toString().should.equal(feelingsJson.userId.toString());
                result.feelings.should.equal(feelingsJson.feelings);
                // Update the feelings JSON
                feelingsJson = result;
                done();
            });
        });

        it('Should create a 2nd new feelings entry to the database', function (done) {
            // Create the random feelings JSONs
            feelings2Json = new DummyUserCreator().createTestFeelings(userObject._id);

            feelingsDb.createFeelings(feelings2Json, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log("Result of 2nd feelings creation:", result);
                result.should.not.be.empty;
                result.comment.should.equal(feelings2Json.comment);
                result._creator.toString().should.equal(feelings2Json.userId.toString());
                result.feelings.should.equal(feelings2Json.feelings);
                // Update the feelings JSON
                feelings2Json = result;
                done();
            });
        });
    });


    describe('Testing finding of feelings of a user', function() {
        var feelingsDb = new FeelingsDb();

        it('Should find the created feelings entry from the database', function(done) {
            feelingsDb.findFeelingsOfUser({ _id : feelingsJson.id}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("Results of the find:", result);
                result.comment.should.equal(feelingsJson.comment);
                result.feelings.should.equal(feelingsJson.feelings);
                result._creator.familyName.should.equal(userObject.familyName);
                done();
            });
        });
    });


    describe('Testing find of all feelings a user', function() {
        var feelingsDb = new FeelingsDb();

        it('Should find the created feelings entry from the database', function(done) {
            feelingsDb.findAllFeelingsOfUser({ _creator : userObject._id}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("Results of the find:", result);
                result.length.should.equal(2);
                done();
            });
        });
    });

    describe('Removing the feelings form the database', function() {
        var feelingsDb = new FeelingsDb();

        it('Should remove the feelings entry from the database', function(done) {
            feelingsDb.removeFeelings({ _id : feelingsJson.id}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("Results of the feelings removal:", result);
                result.should.not.be.empty;
                result.comment.should.equal(feelingsJson.comment);
                result.feelings.should.equal(feelingsJson.feelings);
                done();
            });
        });


        it('Should remove the 2nd feelings entry from the database', function(done) {
            feelingsDb.removeFeelings({ _id : feelings2Json.id}, function(err, result) {
                if (err) {
                    throw err;
                }

                console.log("Results of the feelings removal:", result);
                result.should.not.be.empty;
                result.comment.should.equal(feelings2Json.comment);
                result.feelings.should.equal(feelings2Json.feelings);
                done();
            });
        });
    });
});
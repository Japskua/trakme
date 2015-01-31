/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var mongoose = require('mongoose');
var moment = require('moment');
var winston = require('winston');
var feelingsSchema = require('./schemas/feelings-schema');

function FeelingsDb() {

}

/**
 * Creates a new feelings entry to the database
 * @param {Object} feelingsJson
 * @param {Function} callback
 */
FeelingsDb.prototype.createFeelings = function(feelingsJson, callback) {
    // Check that the feelingsJson is not empty
    if (!feelingsJson) {
        winston.error("FeelingsDb.createFeelings() - userJson was empty");
        callback("create feelings was empty", null);
        return;
    }
    if (!feelingsJson.userId) {
        winston.error("FeelingsDb.createFeelings() - userId was missing from the JSON");
        callback("Feelings Json was not properly formed", null);
        return;
    }

    var Feelings = mongoose.model('Feelings', feelingsSchema);
    var feelings = new Feelings();

    feelings._creator = feelingsJson.userId;
    feelings.feelings = feelingsJson.feelings;
    feelings.comment = feelingsJson.comment;
    feelings.date = moment(feelingsJson.date).format('YYYY-MM-DD');

    // And then save it
    feelings.save(callback);
};

/**
 * Finds the feelings entry of a user
 * @param {Object} queryJson
 * @param {Function} callback
 */
FeelingsDb.prototype.findFeelingsOfUser = function (queryJson, callback) {
    // Check that the feelingsJson is not empty
    if (!queryJson) {
        winston.error("FeelingsDb.findFeelingsOfUser() - userJson was empty");
        callback("query JSON was empty", null);
        return;
    }

    // Create the model from the schema
    var Feelings = mongoose.model('Feelings', feelingsSchema);
    // Find
    Feelings
        .findOne(queryJson)
        .populate('_creator')
        .exec(callback);
};

/**
 * Removes a feelings entry
 * @param {Object} queryJson
 * @param {Function} callback
 */
FeelingsDb.prototype.removeFeelings = function(queryJson, callback) {
    // First, check that the queryJson is not empty
    if(!queryJson) {
        winston.error("FeelingsDb.removeFeelings() - queryJson was empty");
        callback("query JSON was empty", null);
        return;
    }

    var Feelings = mongoose.model('Feelings', feelingsSchema);
    // Find and remove
    Feelings.findOneAndRemove(queryJson, callback);
};

/**
 * Finds all feelings of a certain user
 * @param {Object} queryJson
 * @param {Function} callback
 */
FeelingsDb.prototype.findAllFeelingsOfUser = function(queryJson, callback) {
    // Check that the feelingsJson is not empty
    if (!queryJson) {
        winston.error("FeelingsDb.findAllFeelingsOfUser() - userJson was empty");
        callback("query JSON was empty", null);
        return;
    }

    var Feelings = mongoose.model('Feelings', feelingsSchema);
    // Find
    Feelings
        .find(queryJson)
        .populate('_creator')
        .exec(callback);
};

module.exports = FeelingsDb;
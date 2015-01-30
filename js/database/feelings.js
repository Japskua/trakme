/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trakme');
var moment = require('moment');
var feelingsSchema = require('./schemas/feelings-schema');

function Feelings() {

}

Feelings.prototype.getFeelings = function () {
    // Create the model from the schema
    var Feelings = mongoose.model('Feelings', feelingsSchema);


};

module.exports = Feelings;
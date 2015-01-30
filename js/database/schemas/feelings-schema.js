/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var feelingsSchema = new Schema({
    feelings : Number,
    comment : String,
    date : { type : Date, default : moment().format('YYYY-MM-DD')}

});

module.exports = feelingsSchema;
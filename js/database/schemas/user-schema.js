/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var emailsSchema = new Schema({ email : String});

var userSchema = new Schema({
    googleId : String,
    familyName : String,
    givenName : String,
    displayName : String,
    emails : [String],
    plusLink : String,
    plusPicture : String,
    gender : String,
    locale : String,
    registerDate : { type : Date, default : moment().format()},
    lastLogin : { type : Date, default : moment().format()},
    updated : { type : Date, default : moment().format()}
});

module.exports = userSchema;
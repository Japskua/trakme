/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var lastModifiedPlugin = require('./plugins/last-modified-plugin');

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
    lastLogin : { type : Date, default : moment().format()}
});

// Add the plugin, indexing the last modified
userSchema.plugin(lastModifiedPlugin, { index : true});

module.exports = userSchema;
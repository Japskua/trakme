/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var lastModifiedPlugin = require('./plugins/last-modified-plugin');

var feelingsSchema = new Schema({
    _creator : { type : Schema.Types.ObjectId, ref : 'User', index : true},
    feelings : Number,
    comment : String,
    date : { type : Date}
});

// Add the plugin, indexing the last modified
feelingsSchema.plugin(lastModifiedPlugin, { index : true});

module.exports = feelingsSchema;
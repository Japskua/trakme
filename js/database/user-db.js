/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trakme');
var moment = require('moment');
var userSchema = require('./schemas/user-schema');
var winston = require('winston');

function UserDb() {

}

UserDb.prototype.createUser = function(userJson, callback) {
    // Check that the userJson is not empty
    if (!userJson) {
        winston.error("User.createUser() - userJson was empty");
        return;
    }

    var User = mongoose.model('User', userSchema);
    var user = new User();

    // Set all the names from the JSON
    user.googleId = userJson.id;
    user.familyName = userJson.name.familyName;
    user.givenName = userJson.name.givenName;
    user.displayName = userJson.displayName;
    user.emails = userJson.emails;
    user.plusLink = userJson.link;
    user.plusPicture = userJson.picture;
    user.gender = userJson.gender;
    user.locale = userJson.locale;
    user.registerDate = moment().format();
    user.lastLogin = moment().format();
    user.updated = moment().format();

    // Then save
    user.save(callback);
};

UserDb.prototype.getUser = function() {

};

module.exports = UserDb;
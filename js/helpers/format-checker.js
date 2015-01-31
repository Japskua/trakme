/**
 * Created by Janne on 31.1.2015.
 */
"use strict";

var winston = require('winston');

function FormatChecker() {

}

FormatChecker.prototype.checkJsonExists = function(caller, jsonName, json) {
    // Check that the queryJson is not empty
    if(!json) {
        winston.error(caller.toString() + " - " + jsonName.toString() + " was empty");
        return false;
    }

    return true;
};


module.exports = FormatChecker;
/**
 * Created by Janne on 31.1.2015.
 */
"use strict";

function FacebookInfo() {
    this.FACEBOOK_CLIENT_ID = "";
    this.FACEBOOK_CLIENT_SECRET = "";
}

/**
 * Returns the Client ID
 * @returns {string} Client ID
 * @constructor
 */
FacebookInfo.prototype.ClientId = function() {
    return this.FACEBOOK_CLIENT_ID;
};

/**
 * Returns the Client Secret
 * @returns {string} Client Secret key
 * @constructor
 */
FacebookInfo.prototype.ClientSecret = function() {
    return this.FACEBOOK_CLIENT_SECRET;
};

module.exports = FacebookInfo;
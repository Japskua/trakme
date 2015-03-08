/**
 * Created by Janne on 31.1.2015.
 */
"use strict";

function FacebookInfo() {
    this.FACEBOOK_CLIENT_ID = "786912374717120";
    this.FACEBOOK_CLIENT_SECRET = "8390b0014c463d54661370fc4fef05b5";
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
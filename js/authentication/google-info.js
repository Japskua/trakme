/**
 * Created by Janne on 11.1.2015.
 */
"use strict";
function GoogleInfo() {
    this.GOOGLE_CLIENT_ID = "";
    this.GOOGLE_CLIENT_SECRET = "";
}

/**
 * Returns the Client ID
 * @returns {string} Client ID
 * @constructor
 */
GoogleInfo.prototype.ClientId = function() {
    return this.GOOGLE_CLIENT_ID;
};

/**
 * Returns the Client Secret
 * @returns {string} Client Secret key
 * @constructor
 */
GoogleInfo.prototype.ClientSecret = function() {
    return this.GOOGLE_CLIENT_SECRET;
};

module.exports = GoogleInfo;
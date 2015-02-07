/**
 * Created by Janne on 11.1.2015.
 */
"use strict";
function GoogleInfo() {
    this.GOOGLE_CLIENT_ID = "942679974100-hoa59suq1nlbqs3npdc3mmialmnlh0js.apps.googleusercontent.com";
    this.GOOGLE_CLIENT_SECRET = "HaQ5i5e7xUZ_-PaMnupLUFwj";
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
/**
 * Created by parkkila on 30.1.2015.
 */
"use strict";

var Chance = require('chance');
var moment = require('moment');

function DummyCreator() {
    this.chance = new Chance();
}

/**
 * Sets the seed for the random information. Then all the random information can be repeated
 * @param {Number} seed A seed number to use
 */
DummyCreator.prototype.setSeed = function(seed) {
    if (typeof (seed) !== Number) {
        throw new Error("DummyCreator.setSeed(seed) only accepts numbers");
    }

    // Otherwise, set the seed and create a new chance object
    this.chance = new Chance(seed);
};

/**
 *
 * Creates a test user that contains all needed information
 * @returns {Object} The filled random user object
 */
DummyCreator.prototype.createTestUser = function() {
    // Create a fake user
    // Start with defining the gender
    var gender = this.chance.gender();

    // Then, create a name
    var name = {
        familyName : this.chance.last(),
        givenName : this.chance.first({ gender : gender})
    };

    // And finally fill the userJson completely, returning it
    return {
        id : this.chance.integer().toString(),
        name : name,
        displayName : name.givenName + " " + name.familyName,
        emails : [this.chance.email({ domain : "example.com"})],
        link : "http://www.google.fi",
        picture : "http://www.google.fi",
        gender : gender,
        locale : this.chance.country()
    };
};


/**
 * Creates a test feelings entry
 * @param {String} userId userId to use with the entry
 * @returns {Object} The newly created random entry object
 */
DummyCreator.prototype.createTestFeelings = function(userId) {
    return {
        userId : userId,
        feelings : this.chance.integer({ min : 1, max : 3}),
        comment : this.chance.sentence({ words : 5}),
        date : moment().format('YYYY-MM-DD')
    };
};

module.exports = DummyCreator;
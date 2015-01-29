/**
 * Created by Janne on 8.1.2015.
 */
"use strict";
var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    GoogleInfo = require('./google-info');

function configurePassport() {

    var devEnv = true;
    var useHttps = false;
    var callbackUrl;

    if (devEnv) {
        if (useHttps) {
            callbackUrl = "https://127.0.0.1:8888/api/1/auth/google/callback";
        } else {
            // Plain HTTP
            callbackUrl = "http://127.0.0.1:3000/api/1/auth/google/callback";
        }
    }
    // Production environment
    else {
        if (useHttps) {
            callbackUrl = "https://178.62.215.70:8888/api/1/auth/google/callback";
        } else {
            // Plain HTTP
            callbackUrl = "http://178.62.215.70:3000/api/1/auth/google/callback";
        }

    }

    // API Access link for creating client ID and secret:
    // https://code.google.com/apis/console/
    var googleInfo = new GoogleInfo();

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
            clientID: googleInfo.ClientId(),
            clientSecret: googleInfo.ClientSecret(),
            callbackURL: callbackUrl
        },
        function(accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {

                // To keep the example simple, the user's Google profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Google account with a user record in your database,
                // and return that user instead.
                console.log("accessToken:", accessToken);
                console.log("refreshToken:", refreshToken);
                console.log("profile:", profile);
                profile.token = accessToken;
                return done(null, profile);
            });
        }
    ));

}

module.exports = configurePassport;
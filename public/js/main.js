/**
 * Created by Janne on 31.1.2015.
 */
"use strict";
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        moment: {
            exports: 'Moment'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        }
    },
    paths: {
        jquery:     'libs/jquery-2.1.3.min',
        backbone:   'libs/backbone.min',
        bootstrap:  'libs/bootstrap.min',
        underscore: 'libs/underscore-min',
        moment:     'libs/moment-with-locales.min'
    }
});

window.App = window.App || {};

require(['backbone','router'], function (Backbone, Router) {
    window.App.Router = new Router();
    Backbone.history.start();
});
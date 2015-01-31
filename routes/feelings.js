/**
 * Created by Janne on 31.1.2015.
 */
"use strict";

var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('./authentication/ensure-authenticated');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res) {
    res.render('feelings', { title: 'trak.life feelings page', user : req.user});
});

module.exports = router;

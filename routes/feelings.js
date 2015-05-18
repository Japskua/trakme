/**
 * Created by Janne on 31.1.2015.
 */
"use strict";

var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('./authentication/ensure-authenticated');
var FeelingsDb = require('./../js/database/feelings-db');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res) {
    res.render('feelings', { title: 'trak.life feelings page', user : req.user});
});

/* POST /api/1/feelings */
router.post('/', ensureAuthenticated, function(req, res) {
    // Check that the feelingsJSON is properly formatted
    console.log(req.body.feelingsJson);
    res.json(200).send({ message : "ok"});
});

module.exports = router;

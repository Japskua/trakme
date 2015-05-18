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
router.post('/', function(req, res) {
    // Check that the feelingsJSON is properly formatted
    if (!req.body) {
        res.json(400).send({ error : "Message body was missing!"});
        return;
    }
    // Read the feelings object
    var feelingsObj = req.body;
    // Write it to the database
    var feelingsDb = new FeelingsDb();
    feelingsDb.createFeelings(feelingsObj, function(err, result) {
        if (err) {
            res.json(400).send({ error : err});
            return;
        }

        res.json(200).send({ message : result});
    });
});

module.exports = router;

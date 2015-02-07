"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'trak.life test page', user : req.user});
});

module.exports = router;

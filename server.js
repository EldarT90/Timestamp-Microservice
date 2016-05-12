'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send("test");
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + process.env.PORT + '...');
});
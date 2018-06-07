var express = require('express');
var path = require("path");
var config = require('./config');
var fs = require('fs');
var request = require('request');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.baseUrl);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/api/searchProduct/:term", function (req, res) {
    const url = config.searchUrl.replace('{apiKey}', config.apiKey).replace('{searchTerm}', req.params.term);
    request(url, function (error, response, json, callback) {
        if (res != null) {
            res.send(JSON.stringify(response));
        }
    });
});
app.get("/api/getProduct/:id", function (req, res) {
    const url = config.productUrl.replace('{apiKey}', config.apiKey).replace('{itemId}', req.params.id);
    request(url, function (error, response, json, callback) {
        if (res != null) {
            res.send(JSON.stringify(response));
        }
    });
});
app.get("/api/getProductRecommendations/:id", function (req, res) {
    const url = config.recommendationsUrl.replace('{apiKey}', config.apiKey).replace('{itemId}', req.params.id);
    request(url, function (error, response, json, callback) {
        if (res != null) {
            res.send(JSON.stringify(response));
        }
    });
});


app.listen(8080, function () {
    console.log('Node server is listening on port 8080!')
});
const express = require('express');
const skyrouterdat = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');


// Rotas para entrega de dados
skyrouterdat.get('/img/:imgsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});

skyrouterdat.get('/homecss/:stlycss', function(req, res){
    res.sendFile(path.join(__dirname, '/homepage/css/' + req.params.stlycss));
});

skyrouterdat.get('/respack/:ressrc', function(req, res){
    const file = `${__dirname}/respack/${req.params.ressrc}`;
    res.download(file);
});

// Rotas para receber requests API
module.exports = skyrouterdat;
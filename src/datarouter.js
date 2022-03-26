const express = require('express');
const skyrouterdat = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');


// Rotas para entrega de dados
skyrouterdat.get('/img/:imgsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});

skyrouterdat.get('/respack/:ressrc', function(req, res){
    const file = `${__dirname}/respack/${req.params.ressrc}`;
    res.download(file);
    res.sendStatus(200)
});

// Rotas para receber requests API
module.exports = skyrouterdat;
const express = require('express');
const skyrouterdat = express.Router();
const path = require('path');


// Rotas para entrega de dados
skyrouterdat.get('/img/:imgsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});

skyrouterdat.get('/respack/:ressrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});

// Rotas para receber requests API
module.exports = skyrouterdat;
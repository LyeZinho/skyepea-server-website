const express = require('express');
const skyrouter = express.Router();
const path = require('path');



// Rotas para entrega HTML

skyrouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/homepage/home.html'));
});



// Rotas para receber requests API

module.exports = skyrouter;
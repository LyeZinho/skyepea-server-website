const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]

//Paginas
const skyrouter = require('./routes_esp/router.js')
app.use(skyrouter);
//Dados 
const skyrouterdat = require('./routes_esp/datarouter.js')
app.use(skyrouterdat);


app.listen(port, () => {
  console.log(`Site rodando na porta port ${port}`)
})
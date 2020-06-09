const express = require('express');
const app = express(); // Criando uma instância do express;

app.get('/', (req, res) => {// Criando uma requisição através do APP;
  res.send('Hello Word - Guilherme');
});

app.post('/account',(req, res)=>{
  console.log("post account")
})

app.listen(3000, () => {// Abrindo a porta da aplicação.
  console.log('API started');
});

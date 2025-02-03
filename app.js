// importando servidor
const express = require('express');
// inicializando o servidor
const app = express();
// porta que o servidor irá rodar
const port = 3000;
// rota principal
app.get('/', (req, res) => {
  res.send('Raiz do servidor');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });

//   ouvindo a porta 3000 e exibindo uma mensagem no console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
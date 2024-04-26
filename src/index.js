const express = require('express'); //vai chamar o express atraves do require
const server = express(); //servidor vai receber o express com as dependencias
const path = require('path');

server.use(express.static('public'));


server.get('/', (req,res) => { //requisição e resposta  do metodo get com a ROTA Pablo
  res.sendFile(path.join(__dirname,'public','index.html'));
  console.log(path.join(__dirname, 'public', 'index.html'));
}); 

server.listen(3000, () => { //aqui você define a porta
console.log('O servidor está funcionando na porta 3000...'); //essa mensagem vai aparecer no navegador depois de 2 etapas
// 1° quando o servidor estiver funcionando no terminal, 2° digita no naveador "localhost:3000/"
}); 

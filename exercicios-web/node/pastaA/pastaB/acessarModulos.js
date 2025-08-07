const moduloA = require('../../moduloA') // importa o módulo A  
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http') // módulo http do Node.js
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // cria um servidor HTTP que responde com "Bom dia!" na porta 8080
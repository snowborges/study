const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo) // aqui nao preciso converter em string pq o readFileSync ja retorna o conteudo do arquivo (ele pausa o codigo ate ler o arquivo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
}) // o json.parse converte conteudo em uma string devido ao readFile não retornar imediatamente o conteudo do arquivo

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => { // __dirname = diretorio atual do arquivo
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})


// fs= file system = modulo nativo do node para trabalhar com arquivos
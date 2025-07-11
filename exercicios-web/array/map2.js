const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) //torna as strings como um objeto
const apenasPreco = produto => produto.preco //vai retonar apenas o valor

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
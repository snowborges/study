module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
} // ...nomes torna o argumento variável, permitindo passar qualquer número de nomes
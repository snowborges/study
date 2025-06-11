const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { //internamente ele tem um for, e faz uma alteação interna dentro de um array
    return e * 2 //retorna o e muldiplicado por 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

//parseFloat -> converte uma string em numero 
//toFixed(2) -> limitando o valor a somente duas casas decimais
//replace('.', ',') ->substitui a conversão padrao de . para , como funciona a formatação de R$

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

//o map não transforma o array atual, ele gera um novo array com a modificação determinada
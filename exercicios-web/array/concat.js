const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos) // faz a junção do array filhas ao array filhos e cria um array novo com todos os elementos
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // o 6 e 7 estão dentor de um array matriz, portanto o que o código faz é tirar ele da matriz mas manter o array dele no resultado 
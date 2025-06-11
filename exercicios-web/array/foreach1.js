const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) //função callback
// percorre a lista dos aprovados a função vai receber nome e indice (posição dele no array)

aprovados.forEach(nome => console.log(nome)) //imprime os nomes mas não vai mostrar a posição dos nomes no índice

const exibirAprovados = aprovado => console.log(aprovado) //criou uma função armazenada na const
aprovados.forEach(exibirAprovados) //chamando a função criada acima, se precisar no futuro consegue chamar novamente se declarar outro array

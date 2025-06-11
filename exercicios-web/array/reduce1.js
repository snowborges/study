const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) //extrai as notas
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)

//desafio deepseek 

const numNotasAltas = alunos.reduce((acc, aluno) => aluno.nota >= 8 ? acc + 1 : acc, 0);  

console.log("Número de alunos com nota maior que 8 =", numNotasAltas); 

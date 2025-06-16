const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //recebe nota dos alunos
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //recebe a nota da turma inteira

const notas1 = escola.map(getNotasDaTurma) // nota de todas as turmas na escola
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])) // concatena as notas extraidas

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback)) // todos os arrays terão herdade essa função devido ao "prototype" 
} 

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) 
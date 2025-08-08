// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
} // função que cria objetos e cada vez o que a gente chama ela, retorna um novo objeto
// o this é o objeto que está sendo criado, e o inc é um método que increment
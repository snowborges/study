// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()  // dispara o proximo passo de cadeia sem interromper o fluxo 
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { 
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0) // começa a execução a partir do primeiro middleware
} // o "..." é um operador rest que permite receber um número indefinido de middlewares

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
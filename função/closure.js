//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a funcao acessar e manipular variaveis externa à função

//Contexto lexico em acao
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
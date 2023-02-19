//par nome/valor
const saudacao = 'ola' //contexto lexico 1

function exec (){
    const saudadcao =  'Faaala' //contexto lexico 2
    return saudadcao
}

//objetos sao grupos de par nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
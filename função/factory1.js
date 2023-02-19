//Factory é uma função que SEMPRE retorna um objeto {}


//Factory Simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
//Aramazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,2))

//retorno implicito
const sub = (a, b) => a - b
console.log(sub(10, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!')
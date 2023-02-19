const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for( let i in notas){  // [FOR-IN] percorre os indices dentro do array
    console.log(i, notas[i]) //para acessar o valor = notas[i]   (:
}

const pessoa = {
    nome:'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}

for(let atributo in pessoa){ //percorre os atributos do objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


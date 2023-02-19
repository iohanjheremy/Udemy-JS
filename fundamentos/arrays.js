const valores = [7.7, 8.9, 6.3, 9.2] // é dinamico, cresce ou dimimnui seu tamanho
console.log(valores[0], valores[3])
console.log(valores[4]) //leitura de valor do array

valores [4] = 10 //altera ou insere valores no array
console.log(valores)
console.log(valores.length) //length diz qnts elementos tem o array

valores.push({id: 3}, false , null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0] //deleta um elemento dentro da array
console.log(valores)

console.log(typeof valores) 
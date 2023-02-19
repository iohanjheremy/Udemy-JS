let contador = 1
while(contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
}
console.log('fim while')

for( let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}
console.log('Fim For...')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++){ //length é o comprimento do Array
    console.log(`nota = ${notas[i]}`)
}
console.log('Fim do For com array')
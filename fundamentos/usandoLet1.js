let numero = 4
{
    let numero = 2 //Let tem escop de global, funcao e de bloco
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
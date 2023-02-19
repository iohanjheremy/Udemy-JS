var numero = 1
{
    var numero = 2 //Var tem escopo de global e funcao
    console.log('dentro= ', numero)
}
console.log('fora= ', numero)
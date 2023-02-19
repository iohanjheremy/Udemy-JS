const valor = function (a = 0.30000000000000004){
  return a 
}
console.log(valor()) //antes 
console.log(valor().toLocaleString('pt-br',{style: "currency", currency: 'BRL'})) //depois

const juroSimples = function (capital, taxa, tempo){
  return capital + ( capital * taxa * tempo)
}


const jurosComp = (capital, taxa, tempo) => {
  return capital + (1+ taxa) ** tempo
}

console.log("Juros Simples: " + juroSimples(100, 10/100, 2).toFixed(2))
console.log("Juros Composto: " + jurosComp(100, 10/100, 2).toFixed(2))


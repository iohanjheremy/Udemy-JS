function verifica(num){
  if(num % 3 == 0){
    return console.log(`${num} É divisível por 3`)
  } else{
    return  console.log(`${num} Não é divisível por 3`)
  }
}
verifica(Math.floor(Math.random() * 100 + 1))
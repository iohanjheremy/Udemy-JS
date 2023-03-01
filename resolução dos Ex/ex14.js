let fruta = ["Maçã", "Kiwi" ,"Melancia"]

function vender(fruta) {
  switch(fruta){
    case "Maçã":
      console.log("Não vendemos esta fruta aqui")
      break
    
    case "Kiwi":
      console.log("Estamos com escassez de Kiwis")
      break
    
    case "Melancia":
      console.log("Aqui está, são 3 reais o quilo")
      break

    default:
      console.log("ERRO!!")
  }
}
console.log(vender(fruta[Math.floor(Math.random() * 4)]))

//for (var pos = 0; pos < fruta.length; pos++){
 // console.log(fruta[pos])
//}
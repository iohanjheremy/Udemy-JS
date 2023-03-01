function semana(dias){
  switch(dias){
    case 1:
      console.log('Dia: Domingo // Fim de Semana')
      break
    case 2: 
      console.log("Dia: Segunda-Feira // Dia útil")
      break
    case 3: 
      console.log("Dia: Terça-Feira // Dia útil")
      break
    case 4:
      console.log("Dia: Quarta-Feira // Dia útil")
      break
    case 5:
      console.log("Dia: Quinta-Feira // Dia útil")
      break
    case 6:
      console.log("Dia: Sexta-Feira // Dia útil")
      break
    case 7: 
      console.log("Dia: Sábado // Fim de Semana")
      break

    default:
      console.log("Dia Inválido")
  }
}

console.log(semana(Math.floor(Math.random() * 7 + 1)))
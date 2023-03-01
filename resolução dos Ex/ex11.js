function anoBissexto(ano){
  let anoBissexto
  if(ano < 0){
    anoBissexto = false
  } else if(ano % 100 == 0){
    anoBissexto = true
  } else if(ano % 400 == 0){
    anoBissexto = true
  } else if(ano % 4 == 0){
    anoBissexto = true
  }

  if (!anoBissexto){
    console.log(`O Ano ${ano} não é bissexto`)
    return false
  }
  console.log(`O Ano ${ano} é bissexto`)
  return true
}

anoBissexto(Math.floor(Math.random() * 4000 + 1))
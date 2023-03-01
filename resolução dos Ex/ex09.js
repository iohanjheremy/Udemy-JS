function avaliaAluno (nota){
  const notaCorrigida = arredondar(nota);
  if(notaCorrigida < 40){
    console.log(`ALUNO REPROVADO COM NOTA: ${notaCorrigida}`)
  } else{
    console.log(`ALUNO APROVADO COM NOTA: ${notaCorrigida}`)
  }
}

function arredondar(nota){
  if(nota < 38){
    return nota
  }else if (nota % 5>= 3){
    return nota = nota + (5 - (nota % 5))
  }else{
    return nota = nota - (nota % 5)
  }
}

avaliaAluno(Math.floor(Math.random() * 100 + 1))
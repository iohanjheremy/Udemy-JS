const triangulo = function(a, b, c){
  if (a == b && a == c){
    console.log(`Este triangulo é Equilatero`)
  } if(a == b || a == c || b == c){
    console.log(`Este triangulo é Isoceles`)
  } else{
    console.log(`Este triangulo é Escaleno`)
  }
}

console.log(triangulo(1, 1, 1))
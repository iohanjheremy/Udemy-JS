Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim 
}

const result = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperacao')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota Invalida')
    }

    //console.log('Fim...')
}

result(10)
result(8.9)
result(6.55)
result(2.3)
result(-1)
result(11)
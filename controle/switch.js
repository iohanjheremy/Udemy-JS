const result = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra... Nota = ' + nota)
            break 

        case 8: 
        case 7:
            console.log('Aprovado ... Nota = ' + nota)
        break

        case 6: case 5: case 4:
            console.log('Recuperacao ... Nota = ' + nota)
            break
        
        case 3: case 2: case 1: case 0:
            console.log('Reprovado ... Nota = ' + nota)
            break

        default:
            console.log('Nota Invalida')   
    }
}

result(10)
result(8.9)
result(6.55)
result(2.3)
result(-1)
result(11)
var lista_numeros = []
function clickadd(){
    var numero = Number(document.getElementById('entrynumb').value)
    var caixa = document.getElementById('painel')
    if(numero > 100){
        alert('Error! Please, enter a valid number')
        }else{caixa.innerHTML += `<option>Number ${numero} added</option>`
        lista_numeros.push(numero)
    }
}

function finish(){
    var resultado = document.getElementById('result')
    var maior = 0
    var menor = 100
    var soma = 0
    console.log(typeof(lista_numeros[0]))
    
    for(num in lista_numeros){
        if(lista_numeros[num] > maior){
            maior = lista_numeros[num]
        }else if(lista_numeros[num] < menor){
            menor = lista_numeros[num]
        }
        soma += lista_numeros[num]
    }


    resultado.className = 'bottomon'
    resultado.innerHTML = `There area ${lista_numeros.length} registered numbers.<br>`
    resultado.innerHTML += `The biggest number is ${maior}.<br>`
    resultado.innerHTML += `The smallest number is ${menor}.<br>`
    resultado.innerHTML += `The sum of all of them ${soma}<br>`
    resultado.innerHTML += `The average of numbers is ${soma/lista_numeros.length}.`
}
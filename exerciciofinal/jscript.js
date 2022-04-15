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
    var media = 0
    for(num in lista_numeros){

    }


    resultado.className = 'bottomon'
    resultado.innerHTML = `There area ${lista_numeros} registered numbers.<br>`
    resultado.innerHTML += `The biggest number is ${lista_numeros}.<br>`
    resultado.innerHTML += `The smallest number is ${lista_numeros}.<br>`
    resultado.innerHTML += `The sum of all of them ${lista_numeros}<br>`
    resultado.innerHTML += `The average of numbers is${lista_numeros}.`
}
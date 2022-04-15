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
    resultado.innerHTML = `Ao Todo temos ${lista_numeros} numeros cadastrados.<br>`
    resultado.innerHTML += `O maior valor informado foi ${lista_numeros}.<br>`
    resultado.innerHTML += `O menor valor informado foi ${lista_numeros}.<br>`
    resultado.innerHTML += `Somando todos valores, temos ${lista_numeros}<br>`
    resultado.innerHTML += `A Média dos valores digitados é ${lista_numeros}.`
}
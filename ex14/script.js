function clicou(){
var inicio = Number(document.querySelector('input#inicio').value)
var fim = Number(document.querySelector('input#fim').value)
var passo = Number(document.querySelector('input#passo').value)
var resultado = document.querySelector('div#resultado')
resultado.innerText = ''
if(!inicio || !fim || !passo ){
    alert('Error')
    document.querySelector('div#res').innerText = 'Preparando a contagem...'
}
else{
    document.querySelector('div#res').innerText = 'Contando...'
    if (inicio < fim){
    while(inicio <= fim){
        if(inicio == fim){
            resultado.innerHTML += '&#128513; =>'+inicio
            inicio = inicio + passo
        }else{
    resultado.innerHTML += '&#128516;'+inicio
    inicio = inicio + passo}
}
    }else{
        while(inicio >= fim){
            if(inicio == fim){
                resultado.innerHTML += '&#128513; =>'+inicio
                inicio = inicio - passo
            }
            else{resultado.innerHTML += '&#128516;'+inicio
            inicio = inicio- passo}
            
        }
    }

}
}

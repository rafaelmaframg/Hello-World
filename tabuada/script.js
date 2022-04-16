function coleta(){
    var numero = Number(document.getElementById('entrada').value)
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    if(!numero){
        alert('Insira um numero valido!')
    }else{
        for(c=0;c<10;c++){
            resultado.innerHTML +=  `<option> ${numero} x ${c} = ${numero*c}</option>`
        }
    }
}



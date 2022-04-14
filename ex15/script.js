function coleta(){
    var numero = Number(document.getElementById('entrada').value)
    var resultado = document.querySelectorAll('option')
    console.log(numero)
    console.log(resultado)
    if(!numero){
        alert('Insira um numero valido!')
    }else{
        for(c=0;c<10;c++){
            resultado[c].innerHTML +=  ` ${numero} x ${c} = ${numero*c}`
        }
    }
}



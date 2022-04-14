var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
var hora = 18
msg.innerText = `agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'img1.jpg'
    document.body.style.background = '#9dbceb5c'
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'img2.jpg'
    window.document.body.style.background = '#eaa570'
} else {
    //boa noite
    img.src = 'img3.jpg'
    document.body.style.background = '#325281e'
}
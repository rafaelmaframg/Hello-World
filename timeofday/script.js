var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
var header = document.querySelector('header')
var footer = document.querySelector('footer')
msg.innerText = `It's ${hora}:${data.getMinutes()} hrs`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = './media/img1.jpg'
    document.body.style.background = '#f5ffbf85'
    header.style.color = 'gray'
    footer.style.color = 'gray'
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = './media/img2.jpg'
    window.document.body.style.background = '#eaa570'
} else {
    //boa noite
    img.src = "./media/img3.jpg"
    document.body.style.background = '#325281e0'
}

function change(img){
    if(img == 'dia'){
        var hora = 9
        var img = window.document.getElementById('imagem')
        img.src = './media/img1.jpg'
        window.document.body.style.background = '#f5ffbf85'
        header.style.color = 'gray'
        footer.style.color = 'gray'
    }if(img == 'tarde'){
        var hora = 13
        var img = window.document.getElementById('imagem')
        img.src = './media/img2.jpg'
        window.document.body.style.background = '#eaa570'
        header.style.color = 'white'
        footer.style.color = 'white'
    }if(img == 'noite'){
        var hora = 20
        var img = window.document.getElementById('imagem')
        img.src = "./media/img3.jpg"
        window.document.body.style.background = '#325281e0'
        header.style.color = 'white'
        footer.style.color = 'white'
    }
}

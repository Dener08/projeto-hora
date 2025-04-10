function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var secundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`


    if (hora <= 12) {
        img.src = 'imagens/02.png'
        document.body.style.background = '#dbcccc'
    } else if (hora <= 18) {
        img.src = 'imagens/03.png'
        document.body.style.background = '#6191c9af'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#830505af'
    }
}
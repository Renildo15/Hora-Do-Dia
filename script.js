function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML=`Agora são ${hora}:${minuto}:${segundo} horas.`

    if(hora > 0 && hora < 12){
        img.src = './imgs/manha.png'
        document.body.style.background = '#846d4a'
    }else if(hora > 12 && hora <= 18){
        img.src = './imgs/tarde.png'
        document.body.style.background = '#862a11'
    }else{
        img.src = './imgs/noite.png'
        document.body.style.background = '#303032'
    }
}

setInterval(function(){
    carregar()
},1000)
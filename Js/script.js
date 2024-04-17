function carregar(){
    var titulo = document.getElementById('title')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0  && hora < 12) {
        //Bom dia 
        titulo.innerHTML = 'Bom dia'; 
        img.src = 'imgs/manha.jpg';
        document.body.style.background = '#e2cd9f'
    }else if (hora>= 12 && hora <= 18){
        //Boa tarde
        titulo.innerHTML = 'Boa tarde';
        img.src = 'imgs/tarde.jpg';
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        titulo.innerHTML = 'Boa noite';
        img.src = 'imgs/noite.jpg';
        document.body.style.background = '#515154'
    }
}


 

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = ` Agora são ${hora} horas`
    document.body.style.fontSize ='20px'
    
    if(hora >= 0 && hora <12){
        
        img.src ='./img/manhã.jpg'
        document.body.style.background ='#d6421d'
    }
        else if(hora >= 12 && hora <= 18){
            img.src ='./img/tarde.jpg'
            document.body.style.background ='#c3234c'
        }
        else{
            img.src ='./img/noite.jpg'
            document.body.style.background ='#000'
        }

    

}
   // este codigo faz carregar a pagina com horario atualizado de cada maquina onde o codigo roda , mudando a cor de fundo e imagens de acordo com a hora local.
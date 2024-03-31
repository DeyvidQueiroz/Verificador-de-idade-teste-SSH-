function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){ //se não digitou o ano ou e maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!.')    
    } else{
        var fsex = document.getElementsByName('rdsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
          genero = 'Homem'  
          if (idade >=0 && idade < 10){
            //criança
          }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovemh.png' ) 
          }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/adutoh.png')
          }else{
            //idoso
            img.setAttribute('src', 'imagens/velho.png')
          }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
              }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
              }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adutom.png')
              }else{
                //idoso
                img.setAttribute('src', 'imagens/velha.png')
              }
        }
        res.style.textAlign = 'center'
        res.innerHTML = genero +' com idade de '+ idade
        res.appendChild(img )
        img.style.width = '300px'
    }
}

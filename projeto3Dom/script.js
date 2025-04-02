
function jogar(){
    let rodada = 1
    while(rodada <= 3 ){
        console.log(`Rodada: ${rodada}`)
        
        let escolhaJogador = prompt(`Nivel ${rodada}, vidro (1, 2, 3)?`) 
        escolhaJogador = Number(escolhaJogador.trim())
        while (![1, 2, 3].includes(escolhaJogador) && isNaN(escolhaJogador)) {
            escolhaJogador = prompt(`Nível ${rodada}, vidro (1, 2, 3)?`);
            escolhaJogador = Number(escolhaJogador.trim);
        }
        
        let pisoQuebrado1  =  Math.floor(Math.random() * 3) + 1;
        let pisoQuebrado2 =  Math.floor(Math.random() * 3) + 1;
        while(pisoQuebrado1 == pisoQuebrado2){
            pisoQuebrado2 = Math.floor(Math.random() * 3) + 1;
        }

        if(escolhaJogador === pisoQuebrado1 && escolhaJogador != pisoQuebrado2){
            console.log(`Voce passou da ${rodada}° rodada!!`)
            alert(`Voce passou da ${rodada}° rodada!!`)
        }else{
            console.log('Fim de jogo!!')
            alert('Fim de jogo!!')
            break;
        }
        rodada+=1;
    }

    if ( rodada == 4){
        console.log("Voce venceu !!!!")
        alert("Voce venceu !!!!")
    }
}
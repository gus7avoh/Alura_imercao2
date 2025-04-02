while (true) {
    let input = prompt("Digite a sua idade: "); 
    let idade = Number(input.trim()); 

    if (input.trim() === "" || isNaN(idade) || idade < 0) {
        alert("Digite uma idade válida!");
    } 
    else {
        if(idade < 18)
            alert("Voce não é maior de idade!");
        else{
            break;
        } 
    }
}

function jogar(){
    let escolhaJogador;
    while(true){
        escolhaJogador = prompt("Digite:\n1- Pedra\n2- Papel\n3- Tesoura")
        if(escolhaJogador != "1" && escolhaJogador != "2" && escolhaJogador != "3"){
            alert("Digite uma opção valida")
        }
        else{
            break;
        }
    }
    escolhaJogador = Number(escolhaJogador)
    let escolhaComputador = Math.floor(Math.random() * 3 ) + 1;

    if (escolhaComputador === escolhaJogador){
        alert("Empate !!!")
    }
    else if(  escolhaComputador ===  1 && escolhaJogador === 3 ||
         escolhaComputador ===  2 && escolhaJogador === 1 ||
         escolhaComputador ===  3 && escolhaJogador === 2 ){
        alert("O computador venceu!!!")
    }else{
        alert("Você venceu!!!")
    }
}


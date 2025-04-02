
const Pedra = document.getElementById("1")
const Papel = document.getElementById("2")
const Tesoura = document.getElementById("3")

const resultado = document.getElementById("resultado")

let escolhaJogador = null;

Pedra.addEventListener('click', () => {
    escolhaJogador = 1;
    Pedra.style.background = "lightblue"; 
    Papel.style.background = "";
    Tesoura.style.background = "";
    verificar()
});

Papel.addEventListener('click', () => {
    escolhaJogador = 2;
    Papel.style.background = "lightblue";
    Pedra.style.background = "";
    Tesoura.style.background = "";
    verificar()
});

Tesoura.addEventListener('click', () => {
    escolhaJogador = 3;
    Tesoura.style.background = "lightblue";
    Papel.style.background = "";
    Pedra.style.background = "";
    verificar()
});

function verificar(){
    let escolhaComputador = Math.floor(Math.random() * 3 ) + 1;

    if (escolhaComputador === escolhaJogador){
        resultado.innerHTML = "<p>Empate!!!</p>"
    }
    else if(  escolhaComputador ===  1 && escolhaJogador === 3 ||
            escolhaComputador ===  2 && escolhaJogador === 1 ||
            escolhaComputador ===  3 && escolhaJogador === 2 ){
        
        resultado.innerHTML = "<p>O computador venceu!!!</p>"
    }else{
        resultado.innerHTML = "<p>Voce venceu!!!</p>"
    }
}

function jogar(){
    Papel.style.background = "";
    Pedra.style.background = "";
    Tesoura.style.background = "";

    resultado.innerHTML = ""
    escolhaJogador = null
    escolhaComputador = null
}




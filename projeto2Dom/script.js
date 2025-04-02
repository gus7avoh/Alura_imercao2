
const Pedra = document.getElementById("1")
const Papel = document.getElementById("2")
const Tesoura = document.getElementById("3")

const resultado = document.getElementById("resultado")


let escolhaJogador;
Pedra.addEventListener('click', () => {
    let escolhaJogador = 1
    Pedra.style.background = "light-blue";
})

Papel.addEventListener('click', () => {
    let escolhaJogador = 2
    Papel.style.background = "light-blue";
})

Tesoura.ventListener('click', () => {
    let escolhaJogador = 3
    Tesoura.style.background = "light-blue";
})


let escolhaComputador = Math.floor(Math.random() * 3 ) + 1;

if (escolhaComputador === escolhaJogador){
    resultado.innerHTML = "Empate!!!"

}
else if(  escolhaComputador ===  1 && escolhaJogador === 3 ||
        escolhaComputador ===  2 && escolhaJogador === 1 ||
        escolhaComputador ===  3 && escolhaJogador === 2 ){
    
    resultado.innerHTML = "O computador venceu!!!"
}else{
    resultado.innerHTML = "Voce venceu!!!"
}


